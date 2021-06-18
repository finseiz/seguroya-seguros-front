import { makeRequest, getQueryParams } from "app/const";

const PATH_BOLIVAR = "/segurosbolivar";

const PATH_LIST_CITIES = PATH_BOLIVAR + "/listaCiudades";

export function getBolivarCities(params) {
  return new Promise((resolve, reject) => {
    makeRequest({
      path: PATH_LIST_CITIES + getQueryParams(params),
      method: "GET",
    })
      .then((response) => {
        if (!response.ok) throw new Error(response.status);
        return response.json();
      })
      .then((response) => resolve(response))
      .catch((err) => reject(err.message));
  });
}
