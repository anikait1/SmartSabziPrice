import { useState, useEffect } from "react";

const _apiHost = "http://localhost:5000";

const objectToQueryString = (obj) => {
  return Object.keys(obj)
    .map((key) => `${key}=${obj[key]}`)
    .join("&");
};

const useFetch = (initialUrl, initialParams, method = "GET") => {
  const [url, setUrl] = useState(_apiHost + initialUrl);
  const [params, setParams] = useState(initialParams);
  const [options, setOptions] = useState({
    method,
    headers: { "Content-Type": "application/json" },
  });
  const [data, setData] = useState(null);
  const [fetchError, setFetchError] = useState(null);

  useEffect(() => {
    if (initialParams) {
      if (method === "GET") {
        setParams(objectToQueryString(params));
        setUrl(url + "?" + params);
      } else {
        setOptions({ ...options, body: JSON.stringify(params) });
      }
    }

    fetch(url, options)
      .then((response) => response.json())
      .then((result) => setData(result))
      .catch((error) => setFetchError(error));
  }, []);

  return { data, fetchError };
};

export default useFetch;
