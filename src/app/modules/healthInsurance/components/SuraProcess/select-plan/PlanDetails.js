import React, { useEffect, useMemo, useRef, useState } from 'react'
import { WhatsAppContainer } from 'app/components/process/WhatsAppContainer'
import { toAbsoluteUrl } from 'theme/helpers/AssetsHelpers'
import { useHistory } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import Qualification from 'app/components/process/Qualification';
import { parseCurrency } from 'app/helpers/parse-currency';
import { actions } from 'app/modules/healthInsurance/redux';
import { HealthProcessInsurabilityRoute } from 'app/routes/childs/Health/routes';
import { findPlan, getQuote } from '../controller';
import { useFormik } from 'formik';
import * as Yup from "yup";
import FormikRadioGroup from 'app/modules/_forms/general/FormikRadioGroup';
import { getBenefits } from './PlanBenefist';
import { Loading } from 'app/components/process/messages/Loading';
import { ErrorMessage } from 'app/components/process/messages/Erros';



export const PlanDetails = () => {

    const dispatch = useDispatch();
    const state = useSelector(state => state.healthInsurance);
    const { plans, selectedPlan } = state;
    const history = useHistory();
    
    const [request, setRequest] = useState({ loading: false, error: false})
    const [quote, setQuote] = useState({});

    const benefits = useMemo(() => {
        const plan = findPlan(plans, selectedPlan.solutionId)
        return getBenefits(plan["data"]["solucion"]["nombre"]);
    }, [])

    const dataPlan = plans.find( plan => plan.data["solucion"]["codigo"] === selectedPlan.solutionId )

    const formik = useFormik({
        initialValues: { selectedPayment: "" },
        validationSchema: Yup.object().shape({ selectedPayment: Yup.string().required("Campo requerido") }),
        onSubmit: ( {selectedPayment} ) => {
             dispatch(actions.setSelectedPlan({ 
                quoteId: quote["infoPoliza"]["numeroCotizacion"],
                payment: quote["tarifas"]["listaPrimas"].find( element => element.tipo === selectedPayment )
            }));
             history.push(HealthProcessInsurabilityRoute)
        } 
    })
 
    useEffect(() => {
        if ( !quote.tarifas ){
            setRequest({ loading: true, error: false });
            getQuote(state, dataPlan)
            .then(( response ) => {
                if ( response.status === 200 ) {
                    setRequest({ loading: false, error: false });
                    setQuote(response.body)
                }else{
                    setRequest({ loading: false, error: true });
                }
            })
        }
        
    }, []);

    const radioOption = ( i, payment ) => (
        <div key={i}>
            <p className="mb-1 plans_sal_plan-value-2"> {
                parseCurrency(parseInt(payment["valorTotal"]))
            } </p>
            <p className=""> {`Pago ${payment["tipo"]}`} </p>
        </div>
    )

    return (
        <div className="container my-5">
            <div className="mx-3">

                <WhatsAppContainer />

                {
                    selectedPlan && (
                        <div className="my-4">

                            {
                                request.error ?
                                (
                                    <ErrorMessage />  
                                ):
                                request.loading ? 
                                (                                    
                                     <Loading /> 
                                ):

                                <div className="row ">

                                    {/** Insurance left */}
                                    <div className="col-md-8 p-0">
                                        <div className="bg-white mr-4 custom-card p-5">
                                            {/** Insurance Logo */}
                                            <div>
                                                <img
                                                    src={toAbsoluteUrl( `/media/logos/${selectedPlan.logoPath}` )}
                                                />
                                            </div>

                                            {/** Insurance Name */}
                                            <div className="plans_sel_plan-name mt-4">
                                                Sura - Salud
                                            </div>

                                            {/** INsurance benefits */}
                                            <ul className="plan_sel_benefits">
                                                {
                                                    benefits.map( (benefit, i) => (
                                                        <li className="my-3 plan_sel_benefit-item" key={i}>
                                                            { benefit }
                                                        </li>
                                                    ) )
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
                                                    selectedPlan.qualification && 
                                                    (
                                                        <>
                                                            <p className="mb-1 plans_sal_plan-label-2"> Calificación de usuario </p>
                                                            <div className="row">
                                                                <Qualification qualification={selectedPlan.qualification} className="mb-4" />
                                                                <p className="plans_plan-qualification my-1 mx-2"> { selectedPlan.qualification } </p>
                                                            </div>
                                                        </>
                                                    )
                                                }

                                                <form onSubmit={formik.handleSubmit}>

                                                    {/** Insurance Price */}
                                                    <div>
                                                        <p className="mb-1 plans_sal_plan-label-2"> Precios </p>
                                                        
                                                            <FormikRadioGroup
                                                                formik={formik}
                                                                field="selectedPayment"
                                                                options={ quote.tarifas ? 
                                                                    quote["tarifas"]["listaPrimas"].map((payment, i) => (
                                                                        { 
                                                                            title: radioOption(i, payment), 
                                                                            value: payment.tipo 
                                                                        }
                                                                    )): []
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
                            }

                        </div>
                    )
                }

            </div>
        </div>
    )
}

  