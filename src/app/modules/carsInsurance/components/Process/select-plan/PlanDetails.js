import React, { useMemo, useState } from 'react'
import { WhatsAppContainer } from 'app/components/process/WhatsAppContainer'
import { toAbsoluteUrl } from 'theme/helpers/AssetsHelpers'
import { useHistory, useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import Qualification from 'app/components/process/Qualification';
import { parseCurrency } from 'app/helpers/parse-currency';
import Comments from "./../../../../../components/process/Comments";
import { actions } from 'app/modules/carsInsurance/redux';
import { CarsProcessOtpRoute } from 'app/routes/childs/Cars/routes';
import { createQuote, sendOtp } from '../controller';
import { useFormik } from 'formik';
import * as Yup from "yup";
import FormikRadioGroup from 'app/modules/_forms/general/FormikRadioGroup';

export const PlanDetails = () => {

    const { id } = useParams();
    const dispatch = useDispatch();
    const { plans, dataToSend } = useSelector(state => state.carsInsurance);
    const [requestStatus, setRequestStatus] = useState({ loading: false, error: false });

    const history = useHistory();

    const benefits = useMemo(() => [
        "Cobertura de responsabilidad civil extracontractual: si tienes algún accidente con otro vehículo y causas lesiones en otra persona o daños a un bien material, tendrás un valor asegurado de $4.000.000.000. CUBIERTO AL 100%",
        "Cobertura por pérdida total por hurto o por accidente. CUBIERTO AL 100%",
        "Cobertura por pérdida parcial por daños y por hurto. Deducible UNICO de $800.000 pesos",
        "Asistencias técnicas como conductor elegido, grúa, carro taller y pequeños accesorios.",
    ], [])

    const benefitsPlus = useMemo(() => [
        "La oficina móvil reacciona en caso de accidente sin heridos ni fallecidos para agilizar los temas del seguro.",
        "Conductor profesional para cuando necesites realizar una diligencias en tu carro y no puedas hacerlo.",
        "Valet parking exclusivo.",
        "Posibilidad de hacer diligencias que tu no puedes realizar.",
        "Programa de reposición especial, en caso de perdida total.",
        "Descuentos con proveedores para comprar vehiculo nuevos.",

    ], [])

    const selectPlan = useMemo(() => plans.find(plan => plan.id === parseInt(id)), [])

    const onSubmit = async ({ selectedPayment }) => {
        setRequestStatus({ loading: true, error: false })
        const response = await createQuote(dataToSend, id)
        if (response) {
            setRequestStatus({ loading: false, error: false })
            dispatch(actions.setSelectedPlan({...selectPlan, quoteId: response, selectedPayment}))
            sendOtp(response);
            history.push(CarsProcessOtpRoute);
        } else {
            setRequestStatus({ loading: false, error: true })
        }
    }

    const formik = useFormik({
        initialValues: { selectedPayment: "" },
        validationSchema: Yup.object().shape({ selectedPayment: Yup.string().required("Campo requerido") }),
        onSubmit
    })

    const radioOption = ( name, value ) => (
        <div>
            <p className="mb-1 plans_sal_plan-value-2"> {
                parseCurrency(parseInt(value))
            } </p>
            <p className=""> {`Pago ${name}`} </p>
        </div>
    )

    return (
        <div className="container my-5">

            <div className="mx-3">

                <WhatsAppContainer />

                {
                    selectPlan && (
                        <div className="my-4">

                            <div className="row">

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
                                            {selectPlan.insuranceName}
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

                                        <b> <p> Valores agregados </p> </b>

                                        {/** INsurance benefits */}
                                        <ul className="plan_sel_benefits">
                                            {
                                                benefitsPlus.map((benefit, i) => (
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
                                            {
                                        selectPlan.qualification &&
                                        (
                                            <>
                                                {/** Insurance qualification */}
                                                <p className="mb-1 plans_sal_plan-label-2"> Calificación de usuario </p>
                                                <div className="row">
                                                    <Qualification qualification={selectPlan.qualification} className="mb-4" />
                                                    <p className="plans_plan-qualification my-1 mx-2"> {selectPlan.qualification} </p>
                                                </div>
                                            </>
                                        )
                                    }


                                    {/** Insurance Price */}
                                    <form onSubmit={formik.handleSubmit}>

                                        {/** Insurance Price */}
                                        <div>
                                            <p className="mb-1 plans_sal_plan-label-2"> Precios </p>
                                            
                                                <FormikRadioGroup
                                                    formik={formik}
                                                    field="selectedPayment"
                                                    options={[
                                                        { title: radioOption('Anual', selectPlan.totalPrice), value: 'totalPrice'},
                                                        { title: radioOption('Mensual', selectPlan.monthPrice), value: 'monthPrice'}
                                                    ]}
                                                    optionsClass="flex-column"
                                                />
                                        </div>                                    

                                        {/**Insurance Button */}
                                        {
                                            requestStatus.loading ?
                                            (
                                                <div className="spinner-border" role="status">
                                                    <span className="sr-only"></span>
                                                </div>

                                            ) :
                                            (

                                                <div className="text-center">
                                                    <button
                                                        className="btn primary_btn_expand w-100"
                                                    >
                                                        Comprar
                                                    </button>
                                                </div>
                                            )
                                        }
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
