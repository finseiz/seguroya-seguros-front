import { getBolivarCitiesRequest, getCirculationZoneByKmRequest, getCountriesRequest } from "./repository"

export const getCountries = async () => {

    try {
        const list = await getCountriesRequest();
        list.unshift({ nombre: "Colombia", id: "0" })
        list.unshift({ nombre: "Selecciona", id: "" })
        return list;
    } catch (error) {
        // controlar error en el UI
        // return undefined;
    }

    return [];
}

export const getCirculationZone = async ( userSelection ) => {

    if ( userSelection === "ar" ){
        const response = await getBolivarCitiesRequest();
        if ( response.status === 200){
            const list = response.body["catalogoDato"];
            return list;
        }
        return [];
    }else if ( userSelection === "km" ) {
        try {
            const list = await getCirculationZoneByKmRequest();
            list.unshift({ nombre: "Selecciona", id: "" })
            return list;    
        } catch (error) {
            return [];    
        }
        
    }else{
        return [];
    }
}