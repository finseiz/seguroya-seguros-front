
const clasicBenefits = [
    "Habitación individual con cama de acompañante en caso de ser hospitalizado.",
    "Acceso ilimitado a la unidad de cuidados intensivos.",
    "Honorarios por visitas médicas hospitalarias.",
    "Honorarios quirúrgicos y de anestesiólogo.",
    "Gastos intrahospitalarios.",
    "Gastos de prótesis, cardiodesfibrilador, marcapasos y estimulador de médula espinal.",
    "Trasplantes y donación de órganos.",
    "Maternidad, complicaciones y atención del parto.",
    "Medicamentos y exámenes pre y pos hospitalarios o quirúrgicos.",
    "Enfermera especial post hospitalaria o post cirugía por solicitud del especialista hasta 20 días por evento.",
    "Cirugías ambulatorias y tratamiento de fracturas, luxaciones, esguinces, quemaduras, mordeduras y suturas por heridas.",
    "Tratamiento médico ambulatorio y hospitalario por cáncer o leucemia.",
    "Medicamentos secundarios a las sesiones de quimio, radioterapia u hormonoterapia.",
    "Hemodiálisis y diálisis peritoneal.",
    "Tratamiento médico ambulatorio y hospitalario por VIH o Sida.",
    "Exámenes de imagenología o radiológicos.",
    "Laboratorio clínico y patológico.",
    "Infiltraciones ortopédicas de corticoides, intratimpánicas y dermatológicas exceptuando las queloides o aquellas que se consideren estéticas.",
    "Terapias ilimitadas físicas, respiratorias, cardiacas, entre otras.",
    "Nebulizaciones.",
    "Plan de atención médica domiciliaria.",
    "En el exterior cuentas con la asistencia en viajes, en caso que requieras atención como consecuencia de una emergencia médica por enfermedad o accidente. Aplica únicamente para pólizas familiares. ",
    "Podrás acceder a cualquiera de las instituciones del directorio por una urgencia por enfermedad pagando únicamente el copago, por ejemplo en caso de un dolor de cabeza, cuadro respiratorio o dolor abdominal agudo. Si la institución no está dentro del directorio, te reembolsamos hasta el valor que hayas contratado en visita médica más el copago respectivo.",
    "Podrás ser atendido por un médico general o especialista de nuestro directorio o por uno que no haga parte de él. Nosotros te haremos el reembolso del dinero que pagues, hasta el valor que hayas contratado en el plan limitado si tienes saldo disponible, o hasta el valor contratado en el plan ilimitado menos el respectivo copago.",
]

const evolutionBenefits = [
    "Habitación individual con cama para acompañante.",
    "Unidad de Cuidados Intensivos (UCI)",
    "Gastos médicos intrahospitalarios",
    "Visitas médicas hospitalarias.",
    "Cirujano y anestesiólogo.",
    "Enfermera (o) profesional o auxiliar de enfermería.",
    "Prótesis e insumos.",
    "Maternidad",
    "Amparo al bebé gestante.",
    "La donación de órganos.",
    "Exámenes de imagenología o radiológicos con copago.",
    "Exámenes de laboratorio clínico Ilimitado con copago.",
    "Tratamientos odontológicos por accidente",
    "Cáncer",
    "Leucemia",
    "VIH-SIDA",
    "Enfermedades Renales (sin periodo de carencia",
    "Cirugías ambulatorias programadas, cancelando el valor del copago indicado en la carátula.",
    "Tratamientos de fracturas, luxaciones, esguinces, quemaduras, mordeduras y suturas.",
    "Órtesis, relacionados directamente con accidentes atendidos por urgencias durante los 30 días posteriores al evento. (No genera copago).",
    "Infiltraciones ortopédicas de corticoides, intra – timpánicas y dermatológicas exceptuando las queloides o aquellas que se consideren estéticas.",
]


const globalBenefits = [
    " * Coberturas en Colombia  ",
    "Habitación individual con o sin sala, con cama de acompañante en caso de ser hospitalizado. ",
    "Acceso ilimitado a la unidad de cuidados intensivos. ",
    "Honorarios por visitas médicas hospitalarias. ",
    "Honorarios quirúrgicos y de anestesiólogo. ",
    "Gastos intrahospitalarios. ",
    "Gastos de prótesis, cardiodesfibrilador, marcapasos y estimulador de médula espinal. ",
    "Tarsplantes y donación de órganos. ",
    "Maternidad, complicaciones y atención del parto. ",
    "Medicamentos y exámenes de laboratorio pre y pos hospitalarios o quirúrgicos. ",
    "Enfermera especial post hospitalaria o post cirugía por solicitud del especialista hasta 20 días por evento. ",
    "Cirugías ambulatorias y tratamiento de fracturas, luxaciones, esguinces, quemaduras, mordeduras y suturas por heridas. ",
    "Medicamentos secundarios a las sesiones de quimio, radioterapia u hormonoterapia ",
    "Tratamiento médico ambulatorio y hospitalario por cáncer o leucemia.  ",
    "Hemodiálisis y diálisis peritoneal. ",
    "Tratamiento médico ambulatorio y hospitalario por VIH o Sida. ",
    "Exámenes de imagenología o radiológicos. ",
    "Laboratorio clínico y patológico. ",
    "Infiltraciones ortopédicas de corticoides, intratimpánicas y dermatológicas exceptuando las queloides o aquellas que se consideren estéticas. ",
    "Terapias ilimitadas físicas, respiratorias, cardiacas, entre otras. ",
    "Nebulizaciones. ",
    "Plan de atención médica domiciliaria en casa. ",
    "Gastos funerarios. ",
    " * Coberturas en el extranjero ",
    "Habitación semiprivada. ",
    "Unidad de cuidados intensivos. ",
    "Gastos intrahospitalarios. ",
    "Exámenes de imagenología o radiológicos. ",
    "Tratamiento médico ambulatorio u hospitalario por cáncer o leucemia. ",
    "Hemodiálisis y diálisis peritoneal. ",
    "Cirugías ambulatorias por fracturas, luxaciones y esguinces. ",
    " * Coberturas opcionales ",
    "Podrás tener acceso a estas coberturas por medio del pago de un dinero adicional a tu cuota: ",
    "Consulta externa ",
    "Urgencias por enfermedad  ",
    "Emergencia médica domiciliaria ",
    "Incapacidad diaria ",
]



/**
 * 
 * @param {string} planName 
 * @returns 
 */
export const getBenefits = ( planName ) => {

    if ( planName.includes("CLÁSICO") ){
        return clasicBenefits;
    }else if ( planName.includes("EVOLUCIONA")){
        return evolutionBenefits;
    }else{
        return globalBenefits;
    }

}