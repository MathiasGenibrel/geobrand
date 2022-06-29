import { useEffect, useReducer } from "react";

/**
 * Send one request to the passed URL, and return json response
 * @param {string} url - url to send request
 * @param {string} method - method use to fetch (GET, POST, PUT, DELETE)
 * @param {number} responseStatusCode - expected status code (200, 201, 203, ...)
 * @param {Object} body - json object, contain all data to send with (POST OR PUT method)
 * @returns response of request
 */
const fetcher = async (url, method, responseStatusCode, body) => {
  const requestOption = {
    method: method,
    headers: {
      "Content-Type": "application/json",
    },
  };

  if (method.toUpperCase() !== "GET" && !body)
    requestOption.body = JSON.stringify(body);

  const response = await fetch(url, requestOption);

  if (response.status !== responseStatusCode) throw response.json();

  return response.json();
};

/**
 * Update reducer value
 * @param {Object} state - Previous state
 * @param {Object} action - New value to dispatch in state
 * @returns new value for state
 */
const responseReducer = (state, action) => {
  switch (action.type) {
    // Update body, param, requestURL value
    case "CITY_SUBMIT":
      return {
        ...state,
        body: action.body,
        params: action.params,
        requestURL: `${state.baseURL}?${paramsStringify(action.params)}`,
      };

    // Fetch data to API, and save the response
    case "FECTH_DATA":
      return {
        ...state,
        response: action.response,
      };

    default:
      break;
  }
};

/**
 * Transform object contains all query params into an string
 * @param {Object<string, string|number|boolean>} params - all query params need to request
 * @returns {string} return a string "first=John&last=Doe&age=25"
 */
const paramsStringify = (params) => {
  let stringParam = "";
  for (const key in params) {
    if (!stringParam.length) stringParam += `${key}=${params[key]}`;
    else stringParam += `&${key}=${params[key]}`;
  }

  return stringParam;
};

/**
 * Call api, and return response and callback function for call to the same url with différent body
 * @param {string} method to use for call api
 * @param {string} baseURL to call api
 * @param {string} params all params of query
 * @param {number} responseStatusCode - status code (200, 201, 202, ...)
 * @callback submitHandler - on submit send an request to the url passed in params
 * @returns {[*, callbackFunction]} - response and submitHandler (callback Function)
 */
export const useFetch = (method = "GET", baseURL, responseStatusCode = 200) => {
  // Create Reducer
  const [fetchData, fetchDispatch] = useReducer(responseReducer, {
    method,
    baseURL,
    requestURL: "",
    params: "",
    body: {},
    response: null,
    responseStatusCode,
  });

  // Create callback function to update params of fetcher
  const submitHandler = ({ body = null, params }) => {
    fetchDispatch({
      type: "CITY_SUBMIT",
      params,
      body,
    });
  };

  // Use this side effect which fires on every {requestURL, method, responseStatusCode, body} = fetchData update, to call a URL and store the response in the reducer
  useEffect(() => {
    if (fetchData.requestURL && fetchData.method) {
      // Create Asynchronous function, to await response and save it
      const getResponse = async () => {
        const response = await fetcher(
          fetchData.requestURL,
          fetchData.method,
          fetchData.responseStatusCode,
          fetchData.body
        );

        // Store response in Reducer
        fetchDispatch({
          type: "FECTH_DATA",
          response,
        });
      };

      // Call Asynchronous function
      getResponse();
    }
  }, [
    fetchData.requestURL,
    fetchData.method,
    fetchData.responseStatusCode,
    fetchData.body,
  ]);

  return [fetchData.response, submitHandler];
};
