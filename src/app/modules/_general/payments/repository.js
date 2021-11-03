import { makeRequest } from "app/const"

const epaycoURL = "https://secure.epayco.co/validation/v1/reference/"

const baseURL = "poliza/"
const sendCotizationPath = baseURL + "registrar-compra"

export const paymentResponse = async ( paymentRef ) => {

    const path = epaycoURL + paymentRef;

    const response = await fetch(path, { method: "GET" })

    const body = await response.json();
    return {body, status: response.status}
} 
/**
 * 
 * @returns File
 */
 export const setPayCotization = async () => {
  var data =  JSON.parse(localStorage.getItem('data'))
  data['numComprobante'] = (window.location.href).split('=')[1];
  const response = await makeRequest({
      path: sendCotizationPath ,
      method: "POST",     
      body: JSON.stringify(data)  
  });
  const body = await response;
  return  body;
}




