import { makeRequest } from "app/const"

const baseURL = "sbs/"

const getPlansPath = baseURL + "cotizar"

export const getPlansRequest = async (data) => {
    
    const response = await makeRequest({
        path: getPlansPath,
        method: "POST",
        body: JSON.stringify(data)
    });
    if ( response.status === 200) 
        return response.json()
    else
        throw new Error("Request failed: " + response.status);
    
}
