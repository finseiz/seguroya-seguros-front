import { makeRequest } from "app/const";

const policyPath = "poliza";

const getPoliciesPath = policyPath + "/polizas";


export const getPoliciesRequest = async (token) => {
    const response = await makeRequest({
        path: getPoliciesPath,
        method: "GET",
        headers: { Authorization: `Bearer ${token}`}
    })
    const body = await response.json();
    return {body, status: response.status}
}
