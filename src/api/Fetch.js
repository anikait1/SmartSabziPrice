const _apiHost = "http://localhost:5000";

// iterate over a params object to convert it to a query string
function objectToQueryString(obj) {
  return Object.keys(obj)
    .map((key) => `${key}=${obj[key]}`)
    .join("&");
}

// add error handling
function request(url, params, method = "GET") {
  const options = {
    method,
    headers: {
      "Content-Type": "application/json",
    },
  };

  if (params) {
    if (method === "GET") {
      url += "?" + objectToQueryString(params);
    } else {
      options.body = JSON.stringify(params);
    }
  }

  return fetch(_apiHost + url, options);
}

export default request;
