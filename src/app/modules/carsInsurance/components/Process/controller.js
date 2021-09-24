import { getCarTypId } from "app/helpers/selet-options";
import { getPlansRequest } from "./repository";


const prepareData = (data) => {
    return {
        apellidosTomador: data.surname + " " + data.secondSurname,
        ceroKm: data.isNewCar ? "true" : "false" ,
        ciudadMovilizacion: data.circulationZone,
        fechaNacimientoTomador: data.birthDate,
        generoConductor: data.gender,
        marcaVehiculo: data.carBrand,
        modeloVehiculo: data.carModel,
        nombresTomador: data.fullname,
        numeroDocumentoTomador: data.identification,
        opcionPA: data.includeAccessories ? "S" : "N",
        periodoFact: data.payment,
        placaVehiculo: data.licensePlate,
        sumaAccesorios: data.accesoriesSum,
        tipoDocumentoTomador: getCarTypId(data.identificationType)
    }
}

export const getPlans = async (dataToSend) => {

    const body = prepareData(dataToSend);
    const response = await getPlansRequest(body);
    
    if ( response.status === 200 ){

    } else {
        throw new Error("No fue posible recuperar los planes")
    }

    return [];


}