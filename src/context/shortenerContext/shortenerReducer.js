import {
  GET_SHORTENED_URL,
  SET_LOADING,
  SET_VALUE,
  SET_VALUE_HELPER,
  SET_IS_INVALID,
  SET_ALERT,
  SET_EXISTING_URL,
  EXISTING_URL_HELPER,
  SET_HTTP_HELPER,
  IS_HTTP,
} from "./../Types";

export default (state, action) => {
  switch (action.type) {
    case GET_SHORTENED_URL:
      return {
        ...state,
        url: [action.payload, ...state.url],
        loading: false,
        isInvalid: false,
      };
    case SET_LOADING:
      return {
        ...state,
        loading: true,
      };
    case SET_VALUE:
      return {
        ...state,
        value: action.payload,
      };
    case SET_VALUE_HELPER:
      return {
        ...state,
        valueHelper: action.payload,
      };
    case SET_IS_INVALID:
      return {
        ...state,
        isInvalid: action.payload,
      };
    case SET_ALERT:
      return {
        ...state,
        alert: action.payload,
        isInvalid: true,
      };
    case SET_EXISTING_URL:
      return {
        ...state,
        existingURL: true,
      };
    case EXISTING_URL_HELPER:
      return {
        ...state,
        existingUrlHelper: action.payload,
      };
    case SET_HTTP_HELPER:
      return {
        ...state,
        httpHelper: action.payload,
      };

    default:
      return state;
  }
};
