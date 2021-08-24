import moment from "moment";
import { getPlansRequest } from "./repository"

const prepareDataToSend = (values) => {
    return {
        celular: values.cellphone,
        email: values.email,
        fechaNacimeinto: moment(values.birthDate).format('YYYY-MM-DD'),
        genero: values.gender,
        infoDocumento: {
            documento: values.identification,
            idPais: parseInt(values.country),
            tipoDocumento: values.identificationType
        },
        nombres: values.fullname,
        placa: values.licensePlate,
        primerApellido: values.surname,
        segundoApellido: values.secondSurname,
        zonaCirculacion: parseInt(values.circulationZone)
    }
}

export const getPlans = async (reduxFormValues) => {

    try {
        const data = prepareDataToSend(reduxFormValues);
        const list = await getPlansRequest(data);
        return list;
    } catch (error) {
        // controlar error en el UI
        // return undefined;
    }

    return [];
}
