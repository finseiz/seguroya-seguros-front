import React, { useEffect, useMemo, useState } from 'react'
import { WhatsAppContainer } from 'app/components/process/WhatsAppContainer'
import { toAbsoluteUrl } from 'theme/helpers/AssetsHelpers'
import { useHistory, useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import Qualification from 'app/components/process/Qualification';
import { parseCurrency } from 'app/helpers/parse-currency';
import Comments from "./../../../../../components/process/Comments";
import { actions } from 'app/modules/carsInsurance/redux';
import { CarsKmProcessDataAutorizationRoute } from 'app/routes/childs/Cars/routes';
import { sendOtp } from "../controller";

export const KmPlanDetails = () => {

    const { id } = useParams();
    const dispatch = useDispatch();
    const { plans } = useSelector(state => state.carsInsurance);
    const [selectPlan, setSelectPlan] = useState();
    let history = useHistory();

    const benefits1 = useMemo(() => [
        "Cobertura de responsabilidad civil extracontractual: si tienes algún accidente con otro vehículo y causas lesiones en otra persona o daños a un bien material, tendrás un valor asegurado de $4.000.000.000. CUBIERTO AL 100%",
        "Cobertura por pérdida total por hurto o por accidente, CUBIERTO AL 100%",
        "Cobertura por pérdida parcial por daños y por hurto. Deducible de 1 SMMLV o 10%",
        "Asistencias técnicas como conductor elegido, grúa, carro taller y pequeños accesorios."
    ], [])
    const benefits2 = useMemo(() => [
        "Detalles de tu póliza y recargas de KM. ",
        "Alerta de impacto: en caso de siniestro.",
        "Localización del vehículo en caso de hurto.",
        "Mecánico a bordo: diagnóstico mecánico del vehículo -el dispositivo detecta fallas mecánicas relacionadas con sistema electrónico, inyectores, control de emisiones, combustible y aire, encendido, transmisión entre otros",
        "Asistencia inmediata en caso de accidente.",
        "Botón de pánico 24/7.",

    ], [])

    useEffect(() => {
        setSelectPlan(plans[id]);
    }, []);

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
                                                benefits1.map((benefit, i) => (
                                                    <li className="my-3 plan_sel_benefit-item" key={i}>
                                                        {benefit}
                                                    </li>
                                                ))
                                            }
                                        </ul>

                                        <p> <b>Valor agregado del producto</b> </p>
                                        <p> <b>Todo lo puedes manejar desde la APP de la compañía SBS:</b> </p>

                                        <ul className="plan_sel_benefits">
                                            {
                                                benefits2.map((benefit, i) => (
                                                    <li className="my-3 plan_sel_benefit-item" key={i}>
                                                        {benefit}
                                                    </li>
                                                ))
                                            }
                                        </ul>

                                    </div>

                                    {/* <Comments commentList={commets} /> */}
                                </div>

                                {/** Insurance Right */}
                                <div className="col-md-4 p-0">

                                    <div className="custom-card bg-white p-4">

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

                                        {
                                            selectPlan.descriptionValues.map((description) => (
                                                <div>
                                                    <p className="mb-1 plans_sal_plan-label-2" > {description.label} </p>
                                                    <p > <b> {description.value} </b> </p>
                                                </div>
                                            ))
                                        }

                                        {/** Insurance Price */}
                                        <div>
                                            <p className="mb-1 plans_sal_plan-label-2"> Precio final</p>
                                            <p className="mb-1 plans_sal_plan-value-2"> {parseCurrency(selectPlan.anualPrice)} </p>
                                        </div>
                                            
                                        {/**Insurance Button */}
                                        <div className="text-center">
                                            <button
                                                type="button"
                                                className="btn primary_btn_expand w-100"
                                                onClick={() => {
                                                    dispatch(actions.setSelectedPlan(plans[id]))
                                                    sendOtp(selectPlan.carId);
                                                    history.push(CarsKmProcessDataAutorizationRoute)
                                                }}
                                            >
                                                Comprar
                                            </button>
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

