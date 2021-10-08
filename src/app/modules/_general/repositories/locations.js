import { makeRequest } from "app/const"

const locationURL = "ubicacion/"

const departmentsPath = locationURL + "departamentos"
const citiesPath = (id) =>  `${locationURL}${id}/municipios`

export const departmentsRequest = async () => {
    const response = await makeRequest({
        path: departmentsPath, 
        method: "GET",
    })
    const body = await response.json();
    return {body, status: response.status}
}

export const citiesRequest = async ( department ) => {
    const response = await makeRequest({
        path: citiesPath(department), 
        method: "GET",
    })
    const body = await response.json();
    return {body, status: response.status}
}