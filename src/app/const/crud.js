import { URL } from ".";

/**
 * 
 * @requires @param {string} path - path petition   
 * @requires @param {string} method - "GET" or "POST"
 * @param {object} headers - Headers()
 * @param  {...any} others 
 * @returns 
 */
export function makeRequest({ path, method, headers, ...others }) {
  const timeout = 4000;
  const controller = new AbortController();
  const id = setTimeout(() => controller.abort(), timeout);
  let config = {
    method,
    headers: headers ? 
      {...headers, 'Content-Type': 'application/json' } : 
      { 'Content-Type': 'application/json' },
    ...others,
  };
  let myRequest = new Request(URL + path, config);
  return fetch(myRequest);
}

/**
 * Use for add query params from an object - communly for added in path
 * Example: 
 * Recived: {name: "David", age: 12}
 * Return: "?name=David&age=12"
 * @requires @param {object} filters  - Object of query params {key: value}
 * @returns String of query params
 */
export function queryParams(filters) {
  let ans = "";
  let first = true;
  for (const filter in filters) {
    if (filters[filter] !== "") {
      var str;
      if (first) [str, first] = ["?", false];
      else str = "&";

      switch (filter) {
        default:
          ans += str + `${filter}=${filters[filter]}`;
          break;
      }
    }
  }
  return ans;
}
