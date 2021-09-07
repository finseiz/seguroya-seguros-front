import React, { useEffect, useRef, useState } from 'react'
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
    let history = useHistory();

    const [benefits, setBenefits] = useState([]);
    const [commets, setCommets] = useState([]);

    useEffect(() => {
        const selectedPlan = plans.find(planElement =>
            planElement.redirectValues.policy === parseInt(policy) &&
            planElement.redirectValues.plan === parseInt(plan)
        );
        setSelectPlan(selectedPlan);
        setBenefits([
            "Si tienes un accidente contra otro vehículo, un bien material, una o varias personas, tienes unaprotección del 80%.",
            "Si tienes un accidente y tu carro tiene un daño superior al 75% del valor del vehículo tienes una protección de $2’000.000 y el valor a pagar es $300.000.",
            "Si te roban tu vehículo y se considera perdido totalmente tienes una protección de $2’000.000.",
            "Si tienes un accidente y tu carro tiene un daño inferior al 75% del valor del vehículo (ej. puertas, el parabrisas, etc.), el valor a pagar es $300.000.",
            "Tienes 10 conductores elegidos en el año."
        ]);
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
                        <div className="custom-card bg-white my-4">

                            <div className="row plans_sal_container-details">

                                {/** Insurance left */}
                                <div className="col-md-auto plan-sal_container-desc">

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

                                    <Comments commentList={commets} />
                                </div>

                                {/** Insurance Right */}
                                <div className="col">

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
                    )
                }



            </div>
        </div>
    )
}

