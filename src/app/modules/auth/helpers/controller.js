import { createSelectOptions } from "app/helpers/selet-options";
import { citiesRequest, departmentsRequest } from "app/modules/_general/repositories/locations";
import { actions } from "../_redux/authRedux";
import { createAccountRequest, getUserInformationRequest, loginRequest, setUserInformation } from "./repository"

export const createAuthData = (data) => ({
    "documento": data.document,
    "password": data.password,
    "tipoDocumento": data.documentType
});

const createUserData = (data) => ({
    "acpetoTC": data.tAndC,
    "apellidos": data.surname,
    "celular": data.phone,
    "correo": data.email,
    "direccion": data.address,
    "documento": data.document,
    "fechaNacimiento": data.birthDate,
    "genero": data.gender,
    "nombres": data.name,
    "tipoDocumento": data.documentType,
    "ciudad": data.city,
    //"telefono": data.phone,
})

export const signupUser = async ( data, dispatch ) => {

    const authData = createAuthData(data);
    const userData = createUserData(data);

    const status = await createAccountRequest(authData);

    if ( status === 201 ) {
        const { token, error } = await login( authData, dispatch );
        if ( token ){
            await setUserInformation(userData, token);
            return "";
        }else{
            return error + " Sin embargo, la cuenta fue creada. Por favor inicia sesión.";
        }
    }else{
        return "No fue posible crear la cuenta"
    }
}

export const login = async ( data, dispatch ) => {

    const { status, body } = await loginRequest(data);

    if  ( status === 200 ){
        dispatch( actions.login( body.token ) )
        return { error: undefined, token: body.token };
    }else{
        return { error: "Error al iniciar sesión", token: undefined };
    }  

}

export const getDepartments = async ( ) => {
    const response = await departmentsRequest();
    if (response.status === 200) {
        return createSelectOptions(response.body)
    }
    return [];
}

export const getCities = async ( department ) => {
    const response = await citiesRequest(department);
    if (response.status === 200) {
        return createSelectOptions(response.body)
    }
    return [];
}

export const getUserInformation = async ( token, dispatch ) => {
    const response = await getUserInformationRequest(token);
    dispatch( actions.setUser( response.body ) )
}