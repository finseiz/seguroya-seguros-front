import { makeRequest } from "app/const"
import { queryParams } from "app/const/crud"

const baseURL = "sura/"
const citiesPath = baseURL + "ciudades"
const documentTypesPath = baseURL + "tipo-documento"
const occupationsPath = baseURL + "ocupaciones"
const plansPath = baseURL + "soluciones-salud"

export const getCitiesRequest = async () => {
    const response = await makeRequest({path: citiesPath, method: "GET" });
    const body = await response.json()
    return {body, status: response.status}
}

export const getDocumentTypesRequest = async () => {
    const response = await makeRequest({path: documentTypesPath, method: "GET" })
    const body = await response.json()
    return {body, status: response.status}
}

export const getOccupationsRequest = async () => {
    const response = await makeRequest({path: occupationsPath, method: "GET" })
    const body = await response.json()
    return {body, status: response.status}
}

export const getPlansRequest = async ( departmentId, cityId ) => {
    const response = await makeRequest({
        path: plansPath + queryParams({
            idDepartamento: departmentId,
            idCiudad: cityId
        }), 
        method: "GET" 
    });
    const body = await response.json()
    return {body, status: response.status}
}
