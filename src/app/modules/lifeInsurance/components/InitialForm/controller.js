import { createSelectOptions } from "app/helpers/selet-options";
import { actions } from "../../redux";
import { getDepartmentsRequest, getListRequest } from "./repository"

const getListsApi = async ( dispatch ) => {
    try {
        const lists = await getListRequest();
        dispatch(actions.setGeneralValues(lists, "lists"));
    } catch (error) {
        return false;
    }
    return true;
}

const getDepartmentsApi = async ( dispatch ) => {
    try {
        const lists = await getDepartmentsRequest();
        dispatch(actions.setGeneralValues(lists, "departments"));
    } catch (error) {
        return false;
    }
    return true;
}

export const getInitialValues = async ( dispatch ) => {

    const listResponse = await getListsApi(dispatch);
    const departmentsResponse = await getDepartmentsApi(dispatch);

    if ( listResponse && departmentsResponse ) return true
    else return false;
}

export const getDocumentTypes = ( lists ) => {
    if ( lists.length ){
        const { map: types } = lists.find( (element) => element.nombre ===  "tipos_doc_tomador" )
        return createSelectOptions(types)
    }
    return [];    
}

export const getOccupations = ( lists ) => {
    if ( lists.length ){
        const { map: types } = lists.find( (element) => element.nombre ===  "ocupaciones_tomador" )
        return createSelectOptions(types)
    }
    return [];    
}

export const getDepartments = ( departments ) => {
    if ( departments["nombre"] ){
        const types = departments.map;
        return createSelectOptions(types)
    }
    return [];
}

export const getCity = ( departments, departmentId ) => {
    if ( departments["nombre"] && parseInt(departmentId) > -1 ){
        const { municipios:types } = departments["map"].find( (element) => element.id ===  parseInt(departmentId) )
        return createSelectOptions(types)
    }
    return [];
}
