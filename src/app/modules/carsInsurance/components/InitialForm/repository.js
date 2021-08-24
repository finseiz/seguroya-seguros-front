import { makeRequest, URL } from "app/const"

const baseURL = "sbs/"
const getCountriesPath = baseURL + "paises"
const getCirculationZoneByKmPath = baseURL + "departamentos"

export const getCountriesRequest = async () => {
    const response = await makeRequest({path: getCountriesPath, method: "GET" })
    return response.json()
}

export const getCirculationZoneByKmRequest = async () => { 
    const response = await makeRequest({path: getCirculationZoneByKmPath, method: "GET"} )
    return response.json()
}