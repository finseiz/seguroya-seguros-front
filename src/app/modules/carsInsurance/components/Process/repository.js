import { makeRequest } from "app/const"

const baseURL = "segurosbolivar/"

const getPlansPath = baseURL + "liquidacion"

export const getPlansRequest = async (data) => {
    const response = await makeRequest({
        path: getPlansPath,
        method: "POST",
        body: JSON.stringify(data)
    });
    const body = await response.json();
    return { body, status: response.status }
}
