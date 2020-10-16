import { useState, useEffect } from "react";

const objectToQueryString = (obj) => {
  return Object.keys(obj)
    .map((key) => `${key}=${obj[key]}`)
    .join("&");
};

const useFetch = (initialUrl, params, method = "GET") => {
  const [_apiHost, setApiHost] = useState("http://localhost:5000");
  const [url, setUrl] = useState(_apiHost + initialUrl);
  const [options, setOptions] = useState({
    method,
    headers: {
      "Content-Type": "application/json",
    },
  });
  const [data, setData] = useState(null);
  const [loadingError, setLoadingError] = useState(null);

  if (params) {
    if (method === "GET") {
      setUrl(url + "?" + objectToQueryString(params));
    } else {
      setOptions({ ...options, body: JSON.stringify(params) });
    }
  }

  useEffect(() => {
    fetch(url, options)
      .then((response) => response.json())
      .then((result) => {
        setData(result);
      })
      .catch((error) => {
        setLoadingError(error);
      });
  }, []);

  return [data, loadingError];
};

export default useFetch;
