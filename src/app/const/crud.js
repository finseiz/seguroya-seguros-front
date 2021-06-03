import { URL } from ".";

/**
 *
 * @param {string} path
 */
export function makeRequest({ path, method, headers, ...others }) {
  const timeout = 4000;
  const controller = new AbortController();
  const id = setTimeout(() => controller.abort(), timeout);
  let config = {
    method,
    headers: headers ?? new Headers(),
    ...others,
  };
  let myRequest = new Request(URL + path, config);
  return fetch(myRequest);
}

export function getQueryParams(filters) {
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
