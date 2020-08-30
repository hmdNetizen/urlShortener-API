import React, { useReducer } from "react";
import axios from "axios";
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

const ShortenerState = (props) => {
  const initialState = {
    url: JSON.parse(localStorage.getItem("links")) || [],
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
  const getShortenedUrl = async (inputUrl) => {
    let exist = findExistingURL();
    let response;
    if (exist) {
      setExistingURL();
      setExistingUrlHelper("Link already exist");
      return;
    } else {
      setLoading();
      try {
        response = await axios.post(
          "https://cors-anywhere.herokuapp.com/https://rel.ink/api/links/",
          {
            url: inputUrl,
          }
        );
      } catch (err) {
        console.error(err);
      }
      setExistingUrlHelper("");
    }

    dispatch({
      type: GET_SHORTENED_URL,
      payload: response.data,
    });
  };

  //set the progress bar to true
  const setLoading = () => dispatch({ type: SET_LOADING });

  const validateUrl = (url) => {
    const regex = /https?:\/\/(www\.)?[-a-zA-Z0-9@:%._\+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_\+.~#?&//=]*)/g;
    const valid = regex.test(url);

    setValue(url);

    if (!valid) {
      setValueHelper("Link is not valid");
      setIsInvalid(true);
    } else {
      setValueHelper("");
      setAlert("");
      setIsInvalid(false);
    }
  };

  const setValue = (value) => dispatch({ type: SET_VALUE, payload: value });

  const setValueHelper = (helperText) =>
    dispatch({ type: SET_VALUE_HELPER, payload: helperText });

  const setIsInvalid = (invalid) =>
    dispatch({ type: SET_IS_INVALID, payload: invalid });

  const setAlert = (alert) => dispatch({ type: SET_ALERT, payload: alert });

  const findExistingURL = () =>
    state.url.length > 0 && state.url.some((link) => link.url === state.value);

  const setExistingURL = () => dispatch({ type: SET_EXISTING_URL });

  const setExistingUrlHelper = (urlHelper) =>
    dispatch({ type: EXISTING_URL_HELPER, payload: urlHelper });

  //   const handleUrlShortener = async (inputUrl) => {
  //     let exist = findExistingUrl();
  //     let response;

  //     if (exist) {
  //       setExistingUrl("Link already exist");
  //     } else {
  //       setLoading(true);
  //       try {
  //         response = await axios.post("https://rel.ink/api/links/", {
  //           url: inputUrl,
  //         });
  //         setUrl([response.data, ...url]);
  //       } catch (err) {
  //         console.error(err);
  //       }
  //       setLoading(false);
  //       setExistingUrl("");
  //     }
  //   };

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
        getShortenedUrl,
        validateUrl,
        setValue,
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
