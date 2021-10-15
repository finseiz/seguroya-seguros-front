
import { makeRequest } from "app/const"
import { queryParams } from "app/const/crud"

const baseURL = "segurosbolivar/"
const sendDocumentPath = baseURL + "pdf"

/**
 * 
 * @param {String} numCotizacion 
 * @returns File
 */
export const getDocumentaPdf = async (numCotizacion) => {
    const response = await makeRequest({
        path: sendDocumentPath + queryParams({numCotizacion: numCotizacion}),
        method: "GET",       
    });
    const body = await response;
    return  body;
}
