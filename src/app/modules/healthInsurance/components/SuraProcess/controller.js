import { actions } from "../../redux";
import { getPlansRequest, getQuoteRequest } from "../../repository";
import { sendOtpRequest, verifyOtpRequest } from "app/modules/_general/repositories/otp";

export const getPlans = async (clienteData, dispatch) => {

    try {

        const { residenceDep, residenceCity } = clienteData;

        const plans = await getPlansRequest(residenceDep, residenceCity);
        if (plans.status === 200) {

            const plansToSet = []
            plans.body.map(plan => {
                const planValue = {
                    logoPath: "sura-logo.png",
                    insuranceName: "Sura",
                    data: plan
                }
                plansToSet.push(planValue);
            })

            dispatch(actions.setPlans(plansToSet));
            return true;

        } else {
            return false;
        }

    } catch (error) {
        return false;
    }
}

export const getDocumentTypes = (list) => {
    if (list.length > 0) {
        let selectOptions = list.map((element) => ({ value: element["id"], title: element["descripcion"] }))
        selectOptions.unshift({ value: "", title: "Selecciona" });
        return selectOptions;
    }
    return [];
}

export const getKinship = (plans, selectedPlan) => {

    try {

        const plan = plans.find((plan) => plan.data["solucion"]["codigo"] === selectedPlan.solutionId);
        const list = plan.data["infoSolucion"]["parentescos"];

        let selectOptions = list.map((element) => ({ value: element["codigo"], title: element["nombre"] }))
        selectOptions.unshift({ value: "", title: "Selecciona" });
        return selectOptions;

    } catch (error) {

    }
}

export const findPlan = (plans, id) => plans.find((plan) => plan.data["solucion"]["codigo"] === id );



export const getQuote = async (state, selectedPlan) => {
    const body = createBody(state, selectedPlan);
    const response = await getQuoteRequest(body)
    return response;
}

const createBody = (state, selectedPlan) => {

    const { 
        beneficiaries, 
        generalLists:{ documentTypes, occupations }, 
        data:{client} 
    } = state;

    return {
        asegurados: beneficiaries.map((ben) => (
            {
                fechaNacimiento: ben.birthDate,
                identificacion: {
                    numero: ben.document,
                    tipo: documentTypes.find( type => type["id"] === ben.documentType )
                },
                parentesco: selectedPlan.data["infoSolucion"]["parentescos"].find( kinship => kinship["codigo"] === ben.kinship ),
                primerApellido: ben.surname.toUpperCase(),
                primerNombre: ben.firstName.toUpperCase(),
                segundoApellido: ben.secondSurname.toUpperCase(),
                segundoNombre: ben.middleName?.toUpperCase(),
                sexo: ben.gender
            }
        )),
        celular: client.phone,
        correoElectronico: client.email,
        departamento: client.residenceDep,
        direccion: client.address,
        fechaNacimiento: client.birthDate,
        identificacion: {
            numero: client.document,
            tipo: documentTypes.find( type => type["id"] === client.documentType )
        },
        municipio: client.residenceCity,
        ocupacion: occupations.find( occupation => occupation["id"] === client.occupation ),
        planSalud: selectedPlan.data["infoSolucion"]["plan"],
        primerApellido: client.surname.toUpperCase(),
        primerNombre: client.firstName.toUpperCase(),
        segundoApellido: client.secondSurname.toUpperCase(),
        segundoNombre: client.middleName?.toUpperCase(),
        sexo: client.gender,
        solucionSalud: selectedPlan.data["solucion"],
        telefono: "8000000"
    }

}

export const sendOtp = async ( qouteId ) => {
    await sendOtpRequest({
        idAseguradora: 2, // Seguros Sura
        numCotizacion: qouteId
    });
}

export const verifyOtp = async ( quoteId, otp ) => {
    const response = await verifyOtpRequest({
        idAseguradora: 2, // Seguros Sura
        numCotizacion: quoteId,
        otp
    });
    if ( response.status === 200 ){
        return true;
    }

    return false;

}