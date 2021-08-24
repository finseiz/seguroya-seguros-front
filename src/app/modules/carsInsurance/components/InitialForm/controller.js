import { getCirculationZoneByKmRequest, getCountriesRequest } from "./repository"

export const getCountries = async () => {

    try {
        const list = await getCountriesRequest();
        return list;
    } catch (error) {
        // controlar error en el UI
        // return undefined;
    }

    return [];
}

export const getCirculationZone = async ( userSelection ) => {

    if ( userSelection === "ar" ){
        // realizar petición
        return [];
    }else if ( userSelection === "km" ) {
        try {
            const list = await getCirculationZoneByKmRequest();
            return list;    
        } catch (error) {
            
        }
        
    }else{
        return [];
    }
}