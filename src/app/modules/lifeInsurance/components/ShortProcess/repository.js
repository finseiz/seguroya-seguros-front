import { makeRequest } from "app/const"
import { queryParams } from "app/const/crud"

const baseURL = "colmena/"
const cotization = baseURL + "cotizar"
const sendData = baseURL + "solicitar"
const validate = baseURL + "validar-solicitud"

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

/**
 * 
 * @param {object} data 
 * @returns If success, return and object with [idSolicitud]
 */
export const sendDataRequest = async ( data ) => {
    const response = await makeRequest({
        path: sendData,
        method: "POST",
        body: JSON.stringify(data)
    })
    return response.json()
}

/**
 * 
 * @param {object} data 
 * @returns Object with [status] and [body] from request
 */
export const validateRequest = async ( data ) => {
    const response = await makeRequest({
        path: validate,
        method: "POST",
        body: JSON.stringify(data)
    })
    return { status: response.status, body: response.body }
}