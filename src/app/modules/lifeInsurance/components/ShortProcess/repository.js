import { makeRequest } from "app/const"
import { queryParams } from "app/const/crud"

const baseURL = "colmena/"
const cotization = baseURL + "cotizar"

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