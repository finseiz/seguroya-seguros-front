import * as Yup from "yup";
//import mapValues from 'lodash/mapValues';

export const initialValues = {
    disease: [],
    otherDisease: "",
    activities: [],
    othersSports: "",
    familiarDisease: [],
}

export const insurabilitySchema = Yup.object().shape({
    activities: Yup.array(),
    disease: Yup.array(),
    otherDisease: Yup.string(),
    familiarDisease: Yup.array(),
    othersSports: Yup.string(),
})