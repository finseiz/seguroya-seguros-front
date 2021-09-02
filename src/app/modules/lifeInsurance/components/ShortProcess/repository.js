import { makeRequest } from "app/const"
import { queryParams } from "app/const/crud"

const baseURL = "colmena/"
const cotization = baseURL + "cotizar"
const sendData = baseURL + "solicitar"

/**
 * Get Colmena Plans
 * @param {string} date YYYY-MM-DD format
 * @returns true if success request
 */
export const getPlansRequest = async ( date ) => {
    const response = await makeRequest({
        path: cotization + queryParams({fecha: date}), 
        method: "GET" 
    })
    return response.json()
}

export const sendDataRequest = async ( data ) => {
    const response = await makeRequest({
        path: sendData,
        method: "POST",
        body: JSON.stringify(data)
    })
    return response.json()
}