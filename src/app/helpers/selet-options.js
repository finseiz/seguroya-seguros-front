/**
 * Function usually used for create <select> and <option> elements. Specifically for
 * FormikSelect.
 * @param {array} list of elements
 * @returns Array of [options] required for FormikSelect
 */
export const createSelectOptions = (
  list,
  firstParamId = "id",
  secondParamId = "nombre"
) => {
  const selectOptions = list.map((element) => ({
    value: element[firstParamId],
    title: element[secondParamId],
  }));
  selectOptions.unshift({ value: "", title: "Selecciona" });
  return selectOptions;
};

const CC = "Cedula";
const CE = "Cedula_Extranjeria";

export const CarsIdentificationsTypes = [
  { title: "Selecciona", value: "" },
  { title: "Cédula", value: CC },
  { title: "Cédula de extranjería", value: CE },
  { title: "Pasaporte", value: "PASAPORTE" },
  { title: "Registro civil", value: "REGISTRO_CIVIL" },
  { title: "Tarjeta de identidad", value: "TARJETA_IDENTIDAD" },
  {
    title: "Número de identificación tributario",
    value: "NUMERO_IDENTIFICACION_TRIBUTARIO",
  },
  {
    title: "Número de identificación tributario",
    value: "NUMERO_UNICO_IDENTIFICACION_PERSONAL",
  },
  {
    title: "Sín identificación del exterior",
    value: "SIN_IDENTIFICACION_DEL_EXTERIOR",
  },
];

/**
 * Use in CarInsurance
 * @param {string} id
 * @returns identification type with another format
 */
export const getCarTypId = (id) => {
  if (id === CC) {
    return "CC";
  } else if (id === CE) {
    return "CE";
  } else {
    throw Error("Undefined type");
  }
};
