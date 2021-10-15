
const epaycoURL = "https://secure.epayco.co/validation/v1/reference/"

export const paymentResponse = async ( paymentRef ) => {

    const path = epaycoURL + paymentRef;

    const response = await fetch(path, { method: "GET" })

    const body = await response.json();
    return {body, status: response.status}
}