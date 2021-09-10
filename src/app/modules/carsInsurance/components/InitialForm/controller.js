import { getCirculationZoneByKmRequest, getCountriesRequest } from "./repository"

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
        // realizar petición
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