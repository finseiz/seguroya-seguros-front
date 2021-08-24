import { makeRequest, URL } from "app/const"

const baseURL = "sbs/"

const getPlansPath = baseURL + "cotizar"

export const getPlansRequest = async (data) => {
    const response = await makeRequest({
        path: getPlansPath,
        method: "POST",
        body: JSON.stringify(data)
    })
    return response.json()
}
