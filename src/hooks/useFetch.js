import { useState } from "react";

const fetcher = async (url, method, responseStatusCode, body) => {
  const requestOption = {
    method: method,
    headers: {
      "Content-Type": "application/json",
    },
    body: body,
  };

  const response = await fetch(url, requestOption);

  if (response.status !== responseStatusCode) throw response.json();

  return response.json();
};

/**
 * Call api, and return response and callback function for call to the same url with différent body
 * @param {string} url to call api
 * @param {string} method to use for call api
 * @param {number} responseStatusCode - status code (200, 201, 202, ...)
 * @callback submitHandler - on submit send an request to the url passed in params
 * @returns {[*, callbackFunction]} - response and submitHandler (callback Function)
 */
export const useFetch = (url, method, responseStatusCode = 200) => {
  const [currentBody, setCurrentBody] = useState({
    name: "Villemolaque",
    postalCode: 66300,
  });
  const [response, setResponse] = useState(null);

  const submitHandler = async (body) => {
    if (JSON.stringify(currentBody) === JSON.stringify(body)) return;
    setCurrentBody(body);
    if (method.toUpperCase() === "GET")
      return setResponse(
        await fetcher(
          `${url}?nom=${currentBody.name}&fields=nom,codesPostaux,centre&format=json&geometry=centre`,
          method,
          responseStatusCode
        )
      );
    setResponse(await fetcher(url, method, responseStatusCode, currentBody));
  };

  return [response, submitHandler];
};
