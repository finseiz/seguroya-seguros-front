import { makeRequest } from "app/const"

const baseURL = "colmena/"
const listsPath = baseURL + "listas"
const departmentsPath = baseURL + "departamentos";

export const getListRequest = async () => {
    const response = await makeRequest({path: listsPath, method: "GET" })
    return response.json()
}

export const getDepartmentsRequest = async () => {
    const response = await makeRequest({path: departmentsPath, method: "GET" })
    return response.json()
}
