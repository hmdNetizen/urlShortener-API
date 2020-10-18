import React, { useReducer } from "react";
import shortenerContext from "./shortenerContext";
import shortenerReducer from "./shortenerReducer";
import {
  GET_SHORTENED_URL,
  SET_LOADING,
  SET_VALUE,
  SET_VALUE_HELPER,
  SET_IS_INVALID,
  SET_ALERT,
  SET_EXISTING_URL,
  EXISTING_URL_HELPER,
} from "./../Types";

let apiKey;

if (process.env.NODE_ENV === "production") {
  apiKey = process.env.REBRANDLY_API_KEY;
} else {
  apiKey = process.env.REACT_APP_REBRANDLY_API_KEY;
}

const ShortenerState = (props) => {
  const initialState = {
    url: JSON.parse(localStorage.getItem("links")) || [], //checks if there is a key with the name "link" in the local storage otherwise create it with an empty array
    loading: false,
    value: "",
    valueHelper: "",
    alert: "",
    isInvalid: false,
    existingURL: false,
    existingUrlHelper: "",
  };
  const [state, dispatch] = useReducer(shortenerReducer, initialState);

  //Returns the the short url after sending the long url
  const getShortenedURL = (link) => {
    let exist = findExistingURL();
    const data = {
      destination: link,
      apikey: apiKey,
    };

    if (exist) {
      setExistingURL();
      setExistingUrlHelper("Link already exist");
      return;
    } else {
      setLoading();
      fetch("https://api.rebrandly.com/v1/links", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      })
        .then((response) => response.json())
        .then((data) => {
          dispatch({
            type: GET_SHORTENED_URL,
            payload: data,
          });
        })
        .catch((error) => {
          console.error("Error:", error);
        });

      setExistingUrlHelper("");
    }
  };

  //set the progress bar to true
  const setLoading = () => dispatch({ type: SET_LOADING });

  //This is necessary to avoid users from typing in non-valid URL
  const validateUrl = (url) => {
    const regex = /https?:\/\/(www\.)?[-a-zA-Z0-9@:%._+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_+.~#?&//=]*)/gi;
    const valid = regex.test(url);

    setValue(url);

    if (!valid) {
      setValueHelper("Link is not valid");
      setIsInvalid(true);
    } else {
      setValueHelper("");
      setAlert("");
      setIsInvalid(false);
      setExistingUrlHelper("");
    }
  };

  //This deals with the value that is typed in by the user
  const setValue = (value) => dispatch({ type: SET_VALUE, payload: value });

  //This is basically for setting in a text if the text typed in by user is not a valid url
  const setValueHelper = (helperText) =>
    dispatch({ type: SET_VALUE_HELPER, payload: helperText });

  //This is basically for checking if the value typed in is truthy or falsy for applying error styling
  const setIsInvalid = (invalid) =>
    dispatch({ type: SET_IS_INVALID, payload: invalid });

  //This handles error output is user fails to type in a url before hitting the submit button
  const setAlert = (alert) => dispatch({ type: SET_ALERT, payload: alert });

  //This checks if the url typed in by a user already exist
  const findExistingURL = () =>
    state.url.length > 0 &&
    state.url.some((link) => link.destination === state.value);

  //This is for returning a truthy or falsy boolean if the url already exist. It is for handling an error styling
  const setExistingURL = () => dispatch({ type: SET_EXISTING_URL });

  //This handles the error text that is output if a url already exist.
  const setExistingUrlHelper = (urlHelper) =>
    dispatch({ type: EXISTING_URL_HELPER, payload: urlHelper });

  const {
    url,
    loading,
    value,
    valueHelper,
    isInvalid,
    alert,
    existingURL,
    existingUrlHelper,
  } = state;

  return (
    <shortenerContext.Provider
      value={{
        url,
        loading,
        value,
        valueHelper,
        isInvalid,
        alert,
        existingURL,
        existingUrlHelper,
        validateUrl,
        setValue,
        getShortenedURL,
        setValueHelper,
        setIsInvalid,
        setAlert,
        findExistingURL,
        setExistingURL,
        setExistingUrlHelper,
      }}
    >
      {props.children}
    </shortenerContext.Provider>
  );
};

export default ShortenerState;
