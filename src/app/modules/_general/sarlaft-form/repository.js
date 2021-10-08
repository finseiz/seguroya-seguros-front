import { makeRequest } from "app/const"

const sarlaftURL = "sarlaft/"

const activitiesPath = sarlaftURL + "codigos-ciiu"

export const getActivitiesRequest = async () => {
    const response = await makeRequest({
        path: activitiesPath, 
        method: "GET",
    })
    const body = await response.json();
    return {body, status: response.status}
}

export const postInformation = async (data) => {
    const response = await makeRequest({
        path: sarlaftURL, 
        method: "POST",
        body: JSON.stringify(data),
    })
    return {status: response.status}
}
