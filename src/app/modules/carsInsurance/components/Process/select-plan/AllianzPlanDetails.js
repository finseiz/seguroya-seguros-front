import React, { useEffect, useMemo, useState } from "react";
import { WhatsAppContainer } from "app/components/process/WhatsAppContainer";
import { toAbsoluteUrl } from "theme/helpers/AssetsHelpers";
import { useHistory, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import Qualification from "app/components/process/Qualification";
import { parseCurrency } from "app/helpers/parse-currency";
import Comments from "../../../../../components/process/Comments";
import { actions } from "app/modules/carsInsurance/redux";
import { CarsProcessOtpRoute } from "app/routes/childs/Cars/routes";
import { createQuote, sendOtp, getDocumentPdf } from "../controller";
import { useFormik } from "formik";
import * as Yup from "yup";
import FormikRadioGroup from "app/modules/_forms/general/FormikRadioGroup";

import { allianzPlans } from "../burnPlans";

export const AllianzPlanDetails = () => {
  const { id } = useParams();
  // const dispatch = useDispatch();
  // const { allianzPlans , dataToSend } = useSelector((state) => state.carsInsurance);

  //burnway---
  const concatPlans = [...allianzPlans];
  const plans = concatPlans;
  //endburn---

  const [requestStatus, setRequestStatus] = useState({
    loading: false,
    error: false,
  });

  const history = useHistory();

  const benefits = useMemo(
    () => [
      "Si tienes un accidente contra otro vehículo, un bien material, una o varias personas, tienes una protección del 80%.",
      "Si tienes un accidente y tu carro tiene un daño superior al 75% del valor del vehículo tienes una protección de $2’000.000 y el valor a pagar es $300.000.",
      "Si te roban tu vehículo y se considera perdido totalmente tienes una protección de $2’000.000.",
      "Si tienes un accidente y tu carro tiene un daño inferior al 75% del valor del vehículo (ej. puertas, el parabrisas, etc.), el valor a pagar es $300.000.",
      "Tienes 10 conductores elegidos en el año.",
    ],
    []
  );

  const benefitsPlus = useMemo(
    () => [
      "Conductor Elegido.",
      "Conductor de viaje ",
      "Emergencias y urgencias por accidente de tránsito.",
      "Asistencia de grúa.",
      "Asistencia vial básica (cerrajería, desvarada por gasolina, cambio de llanta).",
      "Consulta médica domiciliaria: Asegurado y cónyuge",
    ],
    []
  );

  const selectPlan = useMemo(
    () => plans.find((plan) => plan.id === parseInt(id)),
    [id, plans]
  );

  const onSubmit = async ({ selectedPayment }) => {
    setRequestStatus({ loading: true, error: false });
    // const response = await createQuote(dataToSend, id);
    if (true) {
      setRequestStatus({ loading: false, error: false });
      // dispatch(
      //   actions.setSelectedPlan({
      //     ...selectPlan,
      //     quoteId: response,
      //     selectedPayment,
      //   })
      // );
      // sendOtp(response);
      history.push(CarsProcessOtpRoute);
      // getDocumentPdf(response);
    } else {
      setRequestStatus({ loading: false, error: true });
    }
  };

  const formik = useFormik({
    initialValues: { selectedPayment: "" },
    validationSchema: Yup.object().shape({
      selectedPayment: Yup.string().required("Campo requerido"),
    }),
    onSubmit,
  });

  useEffect(() => {
    console.log("SELECTED PLAN", selectPlan);
  }, []);

  const radioOption = (name, value) => (
    <div>
      <p className="mb-1 plans_sal_plan-value-2">
        {" "}
        {parseCurrency(parseInt(value))}{" "}
      </p>
      <p className=""> {`Pago ${name}`} </p>
    </div>
  );

  const getPlansPaymentsOptions = () => {
    const payments = selectPlan.payments;

    return payments.map((payment) => ({
      title: radioOption(payment.paymentId.toLowerCase(), payment.premiumValue),
      value: payment.paymentId,
    }));
  };

  const renderCoverages = () => {
    const coverages = selectPlan.coverages;
    if (!coverages) return;

    return coverages.map((coverage) => (
      <div className="coverage-card card p-2" key={coverage.coverageId}>
        <p className="coverage-card-title">{coverage.coverageName}</p>
        <p>
          <strong>Deductible: </strong>
          {parseCurrency(coverage.deductible)}
        </p>
        <p>
          <strong>Valor: </strong>
          {parseCurrency(coverage.insuredValue)}
        </p>
      </div>
    ));
  };

  return (
    <div className="container my-5">
      <div className="mx-3">
        <WhatsAppContainer />

        {selectPlan && (
          <div className="my-4">
            <div className="row">
              {/** Insurance left */}
              <div className="col-md-8 p-0">
                <div className="bg-white mr-4 custom-card p-5">
                  {/** Insurance Logo */}
                  <div>
                    <img
                      src={toAbsoluteUrl(`/media/logos/${selectPlan.logoPath}`)}
                      alt="logotype allianz"
                    />
                  </div>

                  {/** Insurance Name */}
                  <div className="plans_sel_plan-name mt-4">
                    {selectPlan.insuranceName}
                  </div>

                  <div className="mt-4">
                    <strong>Tipo de riesgo: </strong>
                    {selectPlan.detail.riskTypeDesc}
                  </div>

                  <div className="mt-4">
                    <strong>Beneficios: </strong>
                  </div>
                  {/** INsurance benefits */}
                  <ul className="plan_sel_benefits">
                    {benefits.map((benefit, i) => (
                      <li className="my-3 plan_sel_benefit-item" key={i}>
                        {benefit}
                      </li>
                    ))}
                  </ul>

                  <b>
                    {" "}
                    <p> Ventajas exclusivas </p>{" "}
                  </b>

                  {/** INsurance benefits */}
                  <ul className="plan_sel_benefits">
                    {benefitsPlus.map((benefit, i) => (
                      <li className="my-3 plan_sel_benefit-item" key={i}>
                        {benefit}
                      </li>
                    ))}
                  </ul>

                  <div className="plans_sel_plan-name mb-4">Coverturas</div>
                  <section className="coverage-grid">
                    {renderCoverages()}
                  </section>

                  {/* <Comments commentList={commets} /> */}
                </div>
              </div>

              {/** Insurance Right */}
              <div className="col-md-4 p-0">
                <div className="sticky-top">
                  <div className="custom-card bg-white p-4">
                    <div className="text-right">
                      <img
                        className="logo"
                        src={toAbsoluteUrl(
                          "/media/logos/logo_seguroya_dark.svg"
                        )}
                        alt="logotype"
                      />
                    </div>
                    {selectPlan.qualification && (
                      <>
                        {/** Insurance qualification */}
                        <p className="mb-1 plans_sal_plan-label-2">
                          {" "}
                          Calificación de usuario{" "}
                        </p>
                        <div className="row">
                          <Qualification
                            qualification={selectPlan.qualification}
                            className="mb-4"
                          />
                          <p className="plans_plan-qualification my-1 mx-2">
                            {" "}
                            {selectPlan.qualification}{" "}
                          </p>
                        </div>
                      </>
                    )}

                    {/** Insurance Price */}
                    <form onSubmit={formik.handleSubmit}>
                      {/** Insurance Price */}
                      <div>
                        <p className="mb-1 plans_sal_plan-label-2"> Precios </p>

                        <FormikRadioGroup
                          formik={formik}
                          field="selectedPayment"
                          options={getPlansPaymentsOptions()}
                          optionsClass="flex-column"
                        />
                      </div>

                      {/**Insurance Button */}
                      {requestStatus.loading ? (
                        <div className="spinner-border" role="status">
                          <span className="sr-only"></span>
                        </div>
                      ) : (
                        <div className="text-center">
                          <button className="btn primary_btn_expand w-100">
                            Comprar
                          </button>
                        </div>
                      )}
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
