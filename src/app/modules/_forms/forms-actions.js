export const activeRadio = (question, index, values) => values[question.id] === question.options[index].value;

export const activeError = ( question, values ) => values[question.id] === ""

export const onChangeQuestion = (question, index, onChange) => onChange({name: question.id, value: question.options[index].value })

export const onChangeQuestionEvent = (question, index, onChange) => onChange({target: {name: question.id, value: question.options[index].value }});

/**
 * 
 * @param {object} values - Values of the form: { [question1.id]: "", [question2.id]: "", }
 * @returns If all the vales are different of ""
 */
export const canContinue = ( values ) => {
    let continueBool = true;
    Object.keys(values).forEach( ( key ) => {
        if ( values[key] === "" ){
            continueBool = false;
        }
    });
    return continueBool;
}