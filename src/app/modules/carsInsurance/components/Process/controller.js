import { getCarTypId } from "app/helpers/selet-options";
import { actions } from 'app/modules/carsInsurance/redux';
import { createQuoteRequest, getPlansRequest } from "./repository";
import { bolivarPlan } from 'app/helpers/select-plan';
import { CarsProcessDetailsPlanRouteFunc } from "app/routes/childs/Cars/routes";
import { sendOtpRequest, verifyOtpRequest } from "app/modules/_general/repositories/otp";
import { getDocumentaPdf } from "app/modules/_general/repositories/document";
import { parseCurrency } from "app/helpers/parse-currency";

const prepareData = (data) => {
    return {
        apellidosTomador: data.surname + " " + data.secondSurname,
        // ceroKm: data.isNewCar ? "true" : "false",
        ceroKm:  "false",
        ciudadMovilizacion: data.circulationZone,
        fechaNacimientoTomador: data.birthDate,
        generoConductor: data.gender,
        // marcaVehiculo: data.carBrand,
        // modeloVehiculo: data.carModel,
        marcaVehiculo: null,
        modeloVehiculo: null,
        nombresTomador: data.fullname,
        numeroDocumentoTomador: data.identification,
        // opcionPA: data.includeAccessories ? "S" : "N",
        opcionPA:  "N",
        // periodoFact: data.payment,
        periodoFact: "12",
        placaVehiculo: data.licensePlate,
        // sumaAccesorios: data.accesoriesSum,
        sumaAccesorios: 0,
        tipoDocumentoTomador: getCarTypId(data.identificationType),
        // tipoInspeccion: data.inspectionType
        tipoInspeccion: "VIRTUAL"
    } 
}

export const getPlans = async (dataToSend, dispatch) => {

    const body = prepareData(dataToSend);
    const response = await getPlansRequest(body);

    if (response.status === 200) {

        const quoteId = response.body.idConsulta;
        const data = response.body.data;

        const plans = data.map((plan) => {

            const { responseData } = plan;

            return {
                logoPath: "bolivar-logo.svg",
                insuranceName: `Bolivar - ${responseData.opcionAutosDescripcion}`,
                //qualification: 3,
                totalPrice: responseData.totalPrima,
                monthPrice: responseData.pagoMensual,
                descriptionValues: [
                    { label: "Tipo de cobertura", value: "Todo riesgo"},
                    { label: (<p>Valor mensual <br/>Diferido a 10 cuotas mensuales</p>), value: `${parseCurrency(responseData.pagoMensual)}COP`, includeInfo: true},
                ],
                id: responseData.numerodeliquidacion,
                redirect: CarsProcessDetailsPlanRouteFunc,
                data: {...plan}
            };

        });

        dispatch(actions.setPlans(plans))
        dispatch(actions.editDataToSend({quoteId}))
        
    } else {
        throw new Error("No fue posible recuperar los planes")
    }

    return [];

}

const prepareQuoteData = (data, planId) => {
    return {
        celTomador: data.cellphone,
        ciuTomador: data.circulationZone,
        dirTomador: data.address,
        fecNacConductor: data.birthDate,
        idConsulta: data.quoteId,
        mailTomador: data.email,
        nomConductor: data.fullname,
        numLiquidacion: planId,
        placaVeh: data.licensePlate,
        sexoConductor: data.gender
    }
}


export const createQuote = async ( state, planId ) => {

    const data = prepareQuoteData(state, planId);

    const response = await createQuoteRequest(data);

    if (response.status === 200){
        const quoteId = response.body.responseData.numCotizacion
        return quoteId;
    }

    return undefined;
}

export const sendOtp = async ( qouteId ) => {
    await sendOtpRequest({
        idAseguradora: 3, // Seguros Bolivar ID
        numCotizacion: qouteId
    });
}

export const getDocumentPdf = async ( id ) => {
   getDocumentaPdf(id)
   .then((response) => response.blob())
   .then((blob) => {
     // Create blob link to download
     const url = window.URL.createObjectURL(
       new Blob([blob]),
     );
     const link = document.createElement('a');
     link.href = url;
     link.setAttribute(
       'download',
       'Poliza_'+id+'.pdf',
     );
 
     // Append to html link element page
     document.body.appendChild(link);
 
     // Start download
     link.click();
 
     // Clean up and remove the link
     link.parentNode.removeChild(link);
   });
}


export const verifyOtp = async ( quoteId, otp ) => {

    const response = await verifyOtpRequest({
        idAseguradora: 3, // Seguros Bolivar ID
        numCotizacion: quoteId,
        otp
    });

    if ( response.status === 200 ){
        return true;
    }

    return false;

}