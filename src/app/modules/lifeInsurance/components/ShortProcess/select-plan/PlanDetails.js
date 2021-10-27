import React, { useEffect, useMemo, useRef, useState } from 'react'
import { WhatsAppContainer } from 'app/components/process/WhatsAppContainer'
import { toAbsoluteUrl } from 'theme/helpers/AssetsHelpers'
import { useHistory, useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import Qualification from 'app/components/process/Qualification';
import Comments from "./../../../../../components/process/Comments";
import { LifeProcessInsurabilityRoute } from 'app/routes/childs/Life/routes';
import { actions } from 'app/modules/lifeInsurance/redux';
import { useFormik } from 'formik';
import * as Yup from "yup";
import FormikRadioGroup from 'app/modules/_forms/general/FormikRadioGroup';

export const PlanDetails = () => {

    const { policy, plan } = useParams();
    const dispatch = useDispatch();
    const { plans } = useSelector(state => state.lifeInsurance);
    const [selectPlan, setSelectPlan] = useState();
    const history = useHistory();

    const benefits = useMemo(() => [
        "Si mueres dentro de la vigencia de la póliza, Colmena pagará la suma indicada en la carátula de la póliza según el plan escogido. ",
        "En caso de que estés vivo en la fecha de fin de la vigencia del seguro, Colmena pagará la suma indicada en la carátula de la póliza según el plan escogido.",
        "Edad mínina de ingreso: 18 años. Edad máxima de ingresa: 65 anos. ",
        "Las primas se calcularán para períodos mensuales y podrás pagar anual, semestral o trimestral, con un descuento de acuerdo a la periodicidad elegida.",
        "Esta póliza es temporal y estará vigente por el término de diez (10) años contados a partir de la fecha de inicio de vigencia indicado en la carátula de la póliza",
        "La presente póliza no es de renovación automática y solo se podrá renovar a voluntad de las partes contratantes.",
    ], []);

    useEffect(() => {
        const selectedPlan = plans.find(planElement =>
            planElement.redirectValues.policy === parseInt(policy) &&
            planElement.redirectValues.plan === parseInt(plan)
        );
        setSelectPlan(selectedPlan);
    }, []);

    const formik = useFormik({
        initialValues: { selectedPayment: "" },
        validationSchema: Yup.object().shape({ selectedPayment: Yup.string().required("Campo requerido") }),
        onSubmit: ( {selectedPayment} ) => {
            dispatch(actions.setSelectedPlan({...selectPlan, paymentID: selectedPayment}))
            history.push(LifeProcessInsurabilityRoute)
        }
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
                                                selectPlan.descriptionValues.map((description, i) => (
                                                    <div key={i}>
                                                        <p className="mb-1 plans_sal_plan-label-2" > {description.label} </p>
                                                        <p > <b> {description.value} </b> </p>
                                                    </div>
                                                ))
                                            }
                                            <hr />

                                            <form onSubmit={formik.handleSubmit}>

                                                {/** Insurance Price */}
                                                <div className="">
                                                    <p className="mb-1 plans_sal_plan-label-2"> Precios </p>
                                                    
                                                        <FormikRadioGroup
                                                            formik={formik}
                                                            field="selectedPayment"
                                                            
                                                            options={
                                                                selectPlan.payments.map((payment, i) => (
                                                                    { title: (
                                                                        <div key={i}>
                                                                            <p className="mb-1 plans_sal_plan-value-2"> {payment["informacion"]} </p>
                                                                            <p className=""> {`Pago ${payment["nombre"]}`} </p>
                                                                        </div>
                                                                    ), value: payment.nombre }
                                                                ))
                                                            }
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

