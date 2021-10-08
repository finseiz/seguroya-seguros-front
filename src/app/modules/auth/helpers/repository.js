import { makeRequest } from "app/const"

const userURL = "usuario/"
const authURL = "auth/"

const userInformationPath = userURL + "info-usuario"

const createAccountPath = authURL + "crear-cuenta"
const loginPath = authURL + "login"

/**
 * @param {object} data { documento, password, tipoDocumento }
 * @returns 
 */
export const createAccountRequest = async (data) => {
    const response = await makeRequest({
        path: createAccountPath, 
        method: "POST",
        body: JSON.stringify(data)
    })
    return response.status
}

export const setUserInformation = async (data, token) => {
    const response = await makeRequest({
        path: userInformationPath, 
        method: "POST",
        body: JSON.stringify(data),
        headers: { Authorization: `Bearer ${token}`}
    })
    return {status: response.status}
}

export const getUserInformationRequest = async (token) => {
    const response = await makeRequest({
        path: userInformationPath, 
        method: "GET",
        headers: { Authorization: `Bearer ${token}`}
    })
    const body = await response.json();
    return {body, status: response.status}
}

/**
 * @param {object} data { documento, password, tipoDocumento }
 * @returns JWT
 */
export const loginRequest = async (data) => {
    const response = await makeRequest({
        path: loginPath, 
        method: "POST",
        body: JSON.stringify(data)
    })
    const body = await response.json();
    return {body, status: response.status}
}

