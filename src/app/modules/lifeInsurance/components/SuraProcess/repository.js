import { makeRequest } from "app/const"

const baseURL = "sura/"
const documentTypesPath = baseURL + "tipo-documento"
const occupationsPath = baseURL + "ocupaciones"
const plansPath = baseURL + "cotizar-vida"
const diseasesPath = baseURL + "enfermedades-salud"
const activitiesPath = baseURL + "actividades"
const userInfoPath = baseURL + "info-vida"


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

export const getPlansRequest = async (data) => {
    const response = await makeRequest({
        path: plansPath, 
        method: "POST",
        body: JSON.stringify(data)
    })
    const body = await response.json()
    return {body, status: response.status}
}

export const getDiseasesRequest = async () => {
    const response = await makeRequest({
        path: diseasesPath, 
        method: "GET" 
    })
    const body = await response.json()
    return {body, status: response.status}
}

export const getActivitiesRequest = async () => {
    const response = await makeRequest({
        path: activitiesPath, 
        method: "GET" 
    })
    const body = await response.json()
    return {body, status: response.status}
}

export const postUserInfo = async ( data ) => {    
    const response = await makeRequest({
        path: userInfoPath, 
        method: "POST",
        body: JSON.stringify(data)
    });
    return {status: response.status}
}