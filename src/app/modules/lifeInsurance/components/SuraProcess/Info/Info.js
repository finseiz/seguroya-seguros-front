import BaseSection from 'app/components/UI/baseSection'
import FormikRadioGroup from 'app/modules/_forms/general/FormikRadioGroup';
import FormikSelect from 'app/modules/_forms/general/FormikSelect';
import { SuraLifeBeneficiariesRoute } from 'app/routes/childs/Life/routes';
import { useFormik } from 'formik';
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router';
import { getInfoList, getOccupations } from '../controller';
import * as Yup from "yup";
import { actions } from 'app/modules/lifeInsurance/redux';

export const InfoSura = () => {

    const { clientData } = useSelector(state => state.lifeInsurance)

    // Sura occupations
    const [occupations, setOccupations] = useState([]);
    const history = useHistory();
    const dispatch = useDispatch();
    const formik = useFormik({
        initialValues: {
            motoDriver: "",
            occupation: "",
            identification: ""
        },
        validationSchema: Yup.object().shape({
            motoDriver: Yup.string().required("Campo requerido"),
            occupation: Yup.string().required("Campo requerido"),
            identification: Yup.object().required("Campo requerido"),
        }),
        onSubmit: (values) => {
            dispatch(actions.addClientData(values))
            history.push(SuraLifeBeneficiariesRoute);
        }
    });

    const setClientIdentification = (documentTypes) => {
        const findType = clientData.documentType === "0" ? "C" : "E";
        const value = documentTypes.find(documentType => documentType.id === findType)
        formik.setFieldValue('identification', {number: clientData.document, type: value});
    }

    useEffect(() => {
        getInfoList()
        .then(info => {
            if ( info ){
                setOccupations(info.occupations);
                setClientIdentification(info.documentTypes);
                dispatch(actions.setGeneralValues(info.documentTypes, 'documentTypes'));
                dispatch(actions.setGeneralValues(info.occupations, 'suraOccupations'));
            }
        })
    }, [])

    const actionsButton = [
        {
          text: "Atras",
          className: "btn btn-primary primary-button process__process-button px-5 mx-3",
          onClick: () => history.goBack(),
        },
        {
          text: "Continuar",
          className: "btn btn-primary primary-button process__process-button px-5 mx-3",
          type: "submit",
        },
      ];

    return (
        <form
            onSubmit={formik.handleSubmit}
        >
            <BaseSection
                title="Información adicional"
                actions={actionsButton}
            >
                <div className="container">

                    <div>
                        <FormikRadioGroup
                            formik={formik}
                            field={"motoDriver"}
                            label="¿Usted maneja moto?"
                            questionClass="text-left"
                            options={[
                                { title: "Si", value: "S" },
                                { title: "No", value: "N" },
                            ]}
                        />
                    </div>

                    <div className="mt-4">
                        <FormikSelect
                            field="occupation"
                            formik={formik}
                            label="Ocupación especifica"
                            options={getOccupations(occupations)}
                        />
                    </div>


                </div>
            </BaseSection>
        </form>
    )
}
