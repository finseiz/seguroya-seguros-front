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