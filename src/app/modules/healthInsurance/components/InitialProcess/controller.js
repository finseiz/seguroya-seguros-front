import { actions } from "../../redux";
import { getCitiesRequest, getDocumentTypesRequest, getOccupationsRequest } from "../../repository"

export const setGeneralDataLists = async ( dispatch ) => {

    let citiesResponse = await getCitiesRequest();
    let documentsResponse = await getDocumentTypesRequest();
    let occupationsResponse = await getOccupationsRequest();

    if ( citiesResponse.status === 200 && documentsResponse.status === 200 && occupationsResponse.status === 200 ){
        dispatch( actions.setGeneralListsValues("occupations", occupationsResponse.body ) )
        createAndSetDepartmentList( citiesResponse.body, dispatch );
        dispatch( actions.setGeneralListsValues("documentTypes", documentsResponse.body ) )
    }

}

const createAndSetDepartmentList = ( cities, dispatch ) => {

    return new Promise ( (resolve, reject) => {

        try {

            let departments = [];

            cities.forEach( ( city ) => {

                const index = departments.findIndex( (department) => department["cddpto"] === city["cddpto"] );
                if ( index > -1 ){
                    departments[index].cities.push(city)
                }else{
                    departments.push( { cddpto: city["cddpto"], name: city["dsdpto"], cities: []  } )
                }

            })

            // Colombia has at least 25 departments. 25 its an aleatory number of departments.
            if ( departments.length > 25 ) {
                resolve( true );
                dispatch( actions.setGeneralListsValues("departments", departments ) )
            }else{
                reject(Error("Deparments list error"))
            }
            
        } catch (error) {
            reject(Error("Anything goes wrong"))
        }

    })

}

/**
 * 
 * @param {array} list Must get DocumentType List 
 * @returns Array for select component
 */
export const getDocumentTypes = ( list ) => {

    if ( list.length > 0 ){
        let selectOptions = [];

        list.forEach( (element) => {
            if ( element.id === "C" || element.id === "E" ){
                selectOptions.push({value: element["id"], title: element["descripcion"]})
            }
        } )

        selectOptions.unshift({value: "", title: "Selecciona"});
        return selectOptions;
    }

    return [];    
}

export const getOccupations = ( list ) => {
    if ( list.length > 0 ){
        let selectOptions = list.map( (element) => ({value: element["id"], title: element["descripcion"]}) )
        selectOptions.unshift({value: "", title: "Selecciona"});
        return selectOptions;
    }
    return [];    
}

export const getDepartments = ( list ) => {

    if ( list.length > 0 ){
        let selectOptions = list.map( (element) => ({value: element["cddpto"], title: element["name"]}) )
        selectOptions.unshift({value: "", title: "Selecciona"});
        return selectOptions;
    }

    return [];    
}

export const getCity = ( departmentList, departmentId ) => {

    if ( departmentList.length > 0 ){

        const listOfCities = departmentList.find( (department) => department["cddpto"] === departmentId )

        if ( listOfCities?.cities?.length > 0 ){
            let selectOptions = listOfCities.cities.map( (element) => ({value: element["id"], title: element["descripcion"]}) )
            selectOptions.unshift({value: "", title: "Selecciona"});
            return selectOptions;
        }
        
    }

    return [];    
}
