import { insuranceLogoAbsolutePath } from "app/const";
import { getPoliciesRequest } from "../repository"


export const getUserPolicies = async ( token ) => {

    const response = await getPoliciesRequest(token);
    if ( response.status === 200 ){
        let list = response.body.map( l => {
            l.logo = insuranceLogoAbsolutePath[l.aseguradora]
            return l;
        })
        return list;
    }
    return [];
}