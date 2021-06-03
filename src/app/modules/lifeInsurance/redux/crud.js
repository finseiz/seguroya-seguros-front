import { makeRequest, getQueryParams } from "app/const";

const PATH_COLMENA = "/colmena";

export function getColmenaPlans(params) {
  return new Promise((resolve, reject) => {
    makeRequest({
      path: PATH_COLMENA + getQueryParams(params),
      method: "GET",
    })
      .then((response) => {
        if (!response.ok) throw new Error(response.status);
        resolve(response);
      })
      .catch((err) => reject(err.message));
  });
}
