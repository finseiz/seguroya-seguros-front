/**
 * Function usually used for create <select> and <option> elements. Specifically for
 * FormikSelect.
 * @param {array} list of elements
 * @returns Array of [options] required for FormikSelect
 */
export const createSelectOptions = (list) => {
    const selectOptions = list.map( (element) => ({value: element["id"], title: element["nombre"]}) )
    selectOptions.unshift({value: "", title: "Selecciona"});
    return selectOptions;
}

const CC = "Cedula";
const CE = "Cedula_Extranjeria";

export const CarsIdentificationsTypes = [
    { title: "Selecciona", value: "" },
    { title: "Cédula", value: CC },
    { title: "Cédula de extranjería", value: CE },
]

/**
 * Use in CarInsurance 
 * @param {string} id 
 * @returns identification type with another format
 */
export const getCarTypId = (id) => {
    if ( id === CC ) {
        return "CC"
    } else if ( id === CE ) {
        return "CE"
    } else {
        throw Error("Undefined type")
    }
}