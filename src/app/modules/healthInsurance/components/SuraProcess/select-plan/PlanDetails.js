import React, { useEffect, useRef, useState } from 'react'
import { WhatsAppContainer } from 'app/components/process/WhatsAppContainer'
import { toAbsoluteUrl } from 'theme/helpers/AssetsHelpers'
import { useHistory, useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import Qualification from 'app/components/process/Qualification';
import { parseCurrency } from 'app/const/parse-currency';
import Comments from 'app/components/process/Comments';
import { actions } from 'app/modules/healthInsurance/redux';
import { HealthProcessInsurabilityRoute } from 'app/routes/childs/Health/routes';
import { getQuote } from '../controller';
import { useFormik } from 'formik';
import * as Yup from "yup";
import FormikRadioGroup from 'app/modules/_forms/general/FormikRadioGroup';

export const PlanDetails = () => {

    const dispatch = useDispatch();
    const state = useSelector(state => state.healthInsurance);
    const { plans, selectedPlan } = state;
    const history = useHistory();
    
    const [benefits, setBenefits] = useState([]);
    const [commets, setCommets] = useState([]);
    const [request, setRequest] = useState({ loading: false, error: false})
    const [quote, setQuote] = useState({});

    const dataPlan = plans.find( plan => plan.data["solucion"]["codigo"] === selectedPlan.solutionId )

    const formik = useFormik({
        initialValues: { selectedPayment: "" },
        validationSchema: Yup.object().shape({ selectedPayment: Yup.string().required("Campo requerido") }),
        onSubmit: ( {selectedPayment} ) => {
            // dispatch(actions.setSelectedPlan({...selectPlan, paymentID: selectedPayment}))
            // history.push(LifeProcessInsurabilityRoute)
        }
    })

    useEffect(() => {
        //setRequest({ loading: false, error: false });
        setBenefits([
            dataPlan?.data?.solucion.descripcion,
        ]);
        if ( !quote.tarifas )
        getQuote(state, dataPlan)
        .then(( response ) => {
            if ( response.status === 200 ) {
                setRequest({ loading: false, error: false });
                setQuote(response.body)
            }else{
                setRequest({ loading: false, error: true });
            }
        })
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
                        <div className="custom-card bg-white my-4">

                            {
                                request.error ?
                                (
                                    <div> No fue posible realizar la cotización, intenta más tarde </div>
                                ):
                                request.loading ? 
                                (
                                    <div> Estamos cargando los datos de tu plan </div>
                                ):

                                <div className="row plans_sal_container-details">

                                    {/** Insurance left */}
                                    <div className="col-md-auto plan-sal_container-desc">
                                        
                                        {/** Insurance Logo */}
                                        <div>
                                            <img
                                                src={toAbsoluteUrl( `/media/logos/${selectedPlan.logoPath}` )}
                                            />
                                        </div>

                                        {/** Insurance Name */}
                                        <div className="plans_sel_plan-name mt-4">
                                            { selectedPlan.insuranceName } - Salud
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

                                        <Comments commentList={commets} />
                                    </div>

                                    {/** Insurance Right */}
                                    <div className="col">

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

                            }

                        </div>
                    )
                }

            </div>
        </div>
    )
}

