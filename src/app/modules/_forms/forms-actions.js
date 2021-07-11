export const activeRadio = (question, index, values) => values[question.id] === question.options[index].value;

export const onChangeQuestion = (question, index, onChange) => onChange({name: question.id, value: question.options[index].value })

export const onChangeQuestionEvent = (question, index, onChange) => onChange({target: {name: question.id, value: question.options[index].value }})