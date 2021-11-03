import React, { useEffect, useMemo, useState } from 'react'
import { WhatsAppContainer } from 'app/components/process/WhatsAppContainer'
import { toAbsoluteUrl } from 'theme/helpers/AssetsHelpers'
import { useHistory, useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import Qualification from 'app/components/process/Qualification';
import { actions } from 'app/modules/lifeInsurance/redux';
import { useFormik } from 'formik';
import * as Yup from "yup";
import FormikRadioGroup from 'app/modules/_forms/general/FormikRadioGroup';
import { parseCurrency } from 'app/helpers/parse-currency';
import { SuraLifeProcessInsurabilityRoute } from 'app/routes/childs/Life/routes';

export const SuraPlanDetails = () => {

    const { quoteId } = useParams();
    const dispatch = useDispatch();
    const { plans } = useSelector(state => state.lifeInsurance);
    const [selectPlan, setSelectPlan] = useState();
    const history = useHistory();

    const benefits = useMemo(() => [
        "Cobertura por invalidez o desmembración por enfermedad.",
        "Cobertura por invalidez o desmembración por accidente.",
        "Entrega de renta diaria por accidente y hospitalización.",
        "Cobertura de muerte por cualquier causa.",
        "Cobertura de enfermedades graves.",
    ], []);

    useEffect(() => {
        const selectedPlan = plans.find(planElement => planElement.redirectValues === quoteId );
        setSelectPlan(selectedPlan);
    }, []);

    const formik = useFormik({
        initialValues: { selectedPayment: "" },
        validationSchema: Yup.object().shape({ selectedPayment: Yup.string().required("Campo requerido") }),
        onSubmit: ( {selectedPayment} ) => {
            dispatch(actions.setSelectedPlan({
                ...selectPlan, 
                paymentID: selectedPayment
            }))
            history.push(SuraLifeProcessInsurabilityRoute)
        }
    })

    const generatePaymentOptions = ( payments ) => 
        Object.keys(payments).map( type => {
            return ({
                title: (
                    <div>
                        <p className="mb-1 plans_sal_plan-value-2"> { parseCurrency(payments[type]) } </p>
                        <p className=""> {`Pago ${type}`} </p>
                    </div>
                ), value: type
            })
        })
    

    return (
        <div className="container my-5">

            <div className="mx-3">

                <WhatsAppContainer />

                {
                    selectPlan && (
                        <div className=" my-4">

                            <div className="row ">

                                {/** Insurance left */}
                                <div className="col-md-8 p-0">
                                    <div className="bg-white mr-4 custom-card p-5">
                                        {/** Insurance Logo */}
                                        <div>
                                            <img
                                                src={toAbsoluteUrl(`/media/logos/${selectPlan.logoPath}`)}
                                            />
                                        </div>

                                        {/** Insurance Name */}
                                        <div className="plans_sel_plan-name mt-4">
                                            {selectPlan.insuranceName} - Vida
                                        </div>

                                        {/** INsurance benefits */}
                                        <ul className="plan_sel_benefits">
                                            {
                                                benefits.map((benefit, i) => (
                                                    <li className="my-3 plan_sel_benefit-item" key={i}>
                                                        {benefit}
                                                    </li>
                                                ))
                                            }
                                        </ul>

                                        {/* <Comments commentList={commets} /> */}

                                    </div>
                                </div>

                                {/** Insurance Right */}
                                <div className="col-md-4 p-0">
                                <div className = "sticky-top">
                                        <div className="custom-card bg-white p-4"> 
                                            <div className = "text-right">
                                                <img
                                                    className="logo"
                                                    src={toAbsoluteUrl("/media/logos/logo_seguroya_dark.svg")}
                                                />                                                
                                            </div>
                                            {/** Insurance qualification */}
                                            {
                                                selectPlan.qualification &&
                                                (
                                                    <>
                                                        <p className="mb-1 plans_sal_plan-label-2"> Calificación de usuario </p>
                                                        <div className="row">
                                                            <Qualification qualification={selectPlan.qualification} className="mb-4" />
                                                            <p className="plans_plan-qualification my-1 mx-2"> {selectPlan.qualification} </p>
                                                        </div>
                                                    </>
                                                )
                                            }

                                            {/** Insurance Description */}
                                            {
                                                <div>
                                                    <p className="mb-1 plans_sal_plan-label-2" > {selectPlan.descriptionValues[0].label} </p>
                                                    <p > <b> {selectPlan.descriptionValues[0].value} </b> </p>
                                                </div>
                                            }
                                            <hr />

                                            <form onSubmit={formik.handleSubmit}>

                                                {/** Insurance Price */}
                                                <div className="">
                                                    <p className="mb-1 plans_sal_plan-label-2"> Precios </p>
                                                    
                                                        <FormikRadioGroup
                                                            formik={formik}
                                                            field="selectedPayment"
                                                            options={ generatePaymentOptions(selectPlan.data.tarifas.pagos) }
                                                            optionsClass="flex-column"
                                                        />
                                                </div>

                                                {/**Insurance Button */}
                                                <div className="text-center mt-4">
                                                    <button
                                                        type="submit"
                                                        className="btn primary_btn_expand w-100"
                                                    >
                                                        Comprar
                                                    </button>
                                                </div>

                                            </form>
                                        </div>
                                    </div>

                                </div>

                            </div>

                        </div>
                    )
                }

            </div>
        </div>
    )
}

