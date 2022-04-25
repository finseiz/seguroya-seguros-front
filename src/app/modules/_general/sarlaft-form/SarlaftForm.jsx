import React, { useEffect, useMemo, useState } from "react";
import { useFormik } from "formik";

import BaseSection from "app/components/UI/baseSection";
import { sarlaftInitialValues, sarlaftSchema } from "./formik";
import FormikInput from "app/modules/_forms/general/FormikInput";
import FormikSelect from "app/modules/_forms/general/FormikSelect";
import FormikRadioGroup from "app/modules/_forms/general/FormikRadioGroup";
import { PositiveOrNegativeOption } from "app/helpers/radio-options";
import { toAbsoluteUrl } from "theme/helpers/AssetsHelpers";
import { useHistory } from "react-router-dom";
import { useDispatch } from "react-redux";
import {
  getActivities,
  getActivityTypes,
  getCiiuActivities,
  getCities,
  getDepartments,
  getDocumentTypes,
  getInternationalOperationTypes,
  getSectors,
  sendData,
} from "./controller";
import PropTypes from "prop-types";

/**
 *
 * @param {string} redirectRoute - Next path if form submit successfully
 * @param {function} onLoad - Function that is excecuted on the creations of the componente
 * @param {bool} redirectRoute - This variable allows to
 * @returns
 */
export const SarlaftForm = ({
  redirectRoute,
  onLoad,
  updateForm = false,
  canSkip = false,
}) => {
  console.log("REDIRECTI ROUTE", redirectRoute);
  const [requestStatus, setRequestStatus] = useState({
    loading: false,
    error: false,
  });

  const formik = useFormik({
    initialValues: sarlaftInitialValues(updateForm),
    validationSchema: sarlaftSchema,
    onSubmit: (values) => {
      setRequestStatus({ loading: true, error: false });
      sendData(values).then((data) => {
        if (data) {
          setRequestStatus({ loading: false, error: false });
          history.push(redirectRoute);
        } else {
          setRequestStatus({ loading: false, error: true });
        }
      });
    },
  });

  const history = useHistory();
  const dispatch = useDispatch();

  const [departments, setDepartments] = useState([]);

  const [cities, setCities] = useState([]);
  const [diligenceCities, setDiligenceCities] = useState([]);
  const [companyCities, setCompanyCities] = useState([]);

  const [ciiuActivities, setCiiuActivities] = useState([]);

  const sectors = useMemo(getSectors, []);
  const activities = useMemo(getActivities, []);
  const activityType = useMemo(getActivityTypes, []);
  const docTypes = useMemo(getDocumentTypes, []);
  const internationalOperations = useMemo(getInternationalOperationTypes, []);
  const vinculationTypes = useMemo(() => {
    if (!updateForm) return [{ title: "Vinculación", value: "VINCULACION" }];
    else
      return [
        { title: "Selecciona", value: "" },
        { title: "Actualización", value: "ACTUALIZACION" },
        { title: "Renovación", value: "RENOVACION" },
        { title: "Vinculación", value: "VINCULACION" },
      ];
  }, []);

  useEffect(() => {
    getDepartments().then((data) => setDepartments(data));
    getCiiuActivities().then((data) => setCiiuActivities(data));
  }, []);

  useEffect(() => {
    formik.setFieldValue("cityRes", "");
    if (formik.values.departmentRes !== "") {
      getCities(formik.values.departmentRes)
        .then((data) => setCities(data))
        .catch(() => setCities([]));
    } else {
      setCities([]);
    }
  }, [formik.values.departmentRes]);

  useEffect(() => {
    formik.setFieldValue("city", "");
    if (formik.values.department !== "") {
      getCities(formik.values.department)
        .then((data) => setDiligenceCities(data))
        .catch(() => setDiligenceCities([]));
    } else {
      setDiligenceCities([]);
    }
  }, [formik.values.department]);

  useEffect(() => {
    formik.setFieldValue("companyCity", "");
    if (formik.values.companyDepartment !== "") {
      getCities(formik.values.companyDepartment)
        .then((data) => setCompanyCities(data))
        .catch(() => setCompanyCities([]));
    } else {
      setCompanyCities([]);
    }
  }, [formik.values.companyDepartment]);

  useEffect(() => {
    if (onLoad) onLoad();
  }, [dispatch]);

  const actionsButton = [
    {
      text: "Enviar",
      className: "btn btn-primary primary-button",
      type: "submit",
    },
    canSkip === true
      ? {
          text: "Omitir",
          className: "btn btn-primary primary-button mx-2",
          type: "button",
          onClick: () => history.push(redirectRoute),
        }
      : undefined,
  ];

  const simpleField = (field, label, type = "text") => {
    return (
      <div className="col px-0 py-2">
        <div className="mr-2">
          <FormikInput
            formik={formik}
            field={field}
            label={label}
            type={type}
            labelClass="text-dark"
          />
        </div>
      </div>
    );
  };

  const select = (field, label, options) => {
    return (
      <div className="col px-0 py-2">
        <div className="mr-2">
          <FormikSelect
            formik={formik}
            field={field}
            label={label}
            labelClass="text-dark"
            options={options}
          />
        </div>
      </div>
    );
  };

  const ties = (field, title) => {
    return (
      <div className="row align-items-center mt-2">
        <div className="col-md-auto pl-0 pr-5">{title}</div>

        <div className="col">
          <FormikRadioGroup
            formik={formik}
            field={field}
            options={[
              { title: "Familiar", value: "FAMILIAR" },
              { title: "Comercial", value: "COMERCIAL" },
              { title: "Laboral", value: "LABORAL" },
              { title: "Otra", value: "OTRA" },
            ]}
          />
        </div>
      </div>
    );
  };

  return (
    <form onSubmit={formik.handleSubmit}>
      <BaseSection
        title="Formulario SARLAFT - Sistema de Administración del Riesgo de Lavado de Activos y de la Financiación del Terrorismo"
        description={
          <div>
            <p>
              Razón por la cual hay que llenar este formulario en unas muy
              breves palabras. Ipsum dolor sit amet, consectetur adipiscing
              elit, sed eiusmod tempor incidunt ut labore et dolore magna
              aliqua.
            </p>
            <p>
              {" "}
              Tomará aproximadamente: <b>5 minutos.</b>{" "}
            </p>
          </div>
        }
        loading={formik.isSubmitting}
      >
        <p className="sarlaft-section-title"> 1. Datos de vinculación </p>
        <div className="row row-cols-3">
          {simpleField("date", "Fecha Diligenciamiento", "date")}
          {select("requestType", "Tipo de Solicitud", [
            { title: "Vinculación", value: "VINCULACION" },
          ])}
        </div>

        <p className="sarlaft-section-subtitle text-left mt-3">
          {" "}
          Clase de vinculación{" "}
        </p>
        <FormikRadioGroup
          formik={formik}
          field="vinculationType"
          options={[
            { title: "Tomador", value: "TOMADOR" },
            { title: "Asegurado", value: "ASEGURADO" },
            { title: "Beneficiario", value: "BENEFICIARIO" },
            { title: "Afianzado", value: "AFIANZADO" },
            { title: "Proveedor", value: "PROVEEDOR" },
            { title: "Intermediario", value: "INTERMEDIARIO" },
            { title: "Otra", value: "OTRO" },
          ]}
        />
        {formik.values.vinculationType === "OTRO" &&
          simpleField("otherVinculationType", "¿Cúal?")}

        <p className="sarlaft-section-subtitle text-left mt-4">
          {" "}
          Indique los vínculos existentes entre tomador-asegurado{" "}
        </p>
        {ties("tie_1", "Tomador - Asegurado")}
        {formik.values.tie_1 === "OTRA" && simpleField("otherTie1", "¿Cúal?")}
        {ties("tie_2", "Beneficiario - Tomador")}
        {formik.values.tie_2 === "OTRA" && simpleField("otherTie2", "¿Cúal?")}
        {ties("tie_3", "Asegurado - Beneficiario")}
        {formik.values.tie_3 === "OTRA" && simpleField("otherTie3", "¿Cúal?")}
      </BaseSection>

      <BaseSection>
        <p className="sarlaft-section-title"> 2. Información básica </p>
        <div className="row row-cols-3">
          {simpleField("fullname", "Nombre completo")}
          {simpleField("surname", "Primer apellido")}
          {simpleField("secondSurname", "Segundo Apellido")}

          {select("documentType", "Tipo de documento", docTypes)}
          {simpleField("document", "Número de documento")}
          {simpleField("expeditionDate", "Fecha de expedición", "date")}

          {simpleField("expeditionCity", "Lugar de expedición")}
          {simpleField("birthdate", "Fecha de nacimiento", "date")}
          {simpleField("birthCity", "Lugar de nacimiento")}

          {simpleField("nationality", "Nacionalidad 1")}
          {simpleField("secondNationality", "Nacionalidad 2 (Opcional)")}
          {simpleField("email", "Correo electrónico")}

          {select("departmentRes", "Departamento de residencia", departments)}
          {select("cityRes", "Ciudad de residencia", cities)}
          {simpleField("address", "Dirección de residencia")}

          {select("department", "Departamento diligencia", departments)}
          {select("city", "Ciudad diligencia", diligenceCities)}
          {simpleField("phone", "Teléfono", "number")}

          {simpleField("cellphone", "Celular", "number")}
        </div>
        <hr />
        <div className="row row-cols-3 mt-4">
          {select("mainActivity", "Actividad principal", activities)}
          {select("sector", "Sector", sectors)}
          {select("ciiu", "CIU (cód)", ciiuActivities)}

          {select("activityType", "Tipo de actividad", activityType)}
          {formik.values.activityType === "OTRO" &&
            simpleField("otherActivityType", "¿Cúal?")}
          {simpleField("occupation", "Ocupación")}
          {simpleField("position", "Cargo")}

          {simpleField("companyName", "Empresa donde trabaja")}
          {simpleField("companyAddress", "Dirección (oficina)")}
          {select("companyDepartment", "Departamento", departments)}

          {select("companyCity", "Ciudad", companyCities)}
          {simpleField("companyPhone", "Teléfono", "phone")}
          {select("optionalActivity", "Actividad secundaria", activities)}

          {select("secondeCiiu", "CIU (cód)", ciiuActivities)}
        </div>

        <hr />
        {simpleField(
          "productOrService",
          "¿Qué tipo de producto y/o servicio comercializa?"
        )}
        <div className="row row-cols-2 mt-4">
          {simpleField("income", "Ingresos mensuales (pesos)", "number")}
          {simpleField("expenses", "Egresos mensuales (pesos)", "number")}

          {simpleField("assets", "Activos (pesos)", "number")}
          {simpleField("passives", "Pasivos (pesos)", "number")}

          {simpleField(
            "heritage",
            "Patrimonio (activos - pasivos, pesos)",
            "number"
          )}
          {simpleField("otherIncome", "Otros ingresos (pesos)", "number")}

          {simpleField("otherIncomeDesc", "Concepto otros ingresos mensuales")}
        </div>
        <div className="row mt-4">
          <div className="col">
            <FormikRadioGroup
              formik={formik}
              field={"publicExposed"}
              question={"¿Es usted una persona públicamente expuesta?"}
              questionClass="sarlaft-radio-label"
              radioLabelClass="sarlaft-radio-option"
              marginTop="0"
              options={PositiveOrNegativeOption}
              className="mt-3"
            />

            <FormikRadioGroup
              formik={formik}
              field={"tiesPublicExposed"}
              question={
                "¿Existe algún vínculo entre usted y una persona considerada públicamente expuesta?"
              }
              questionClass="sarlaft-radio-label"
              radioLabelClass="sarlaft-radio-option"
              marginTop="0"
              options={PositiveOrNegativeOption}
              className="mt-3"
            />

            <FormikRadioGroup
              formik={formik}
              field={"publicResources"}
              question={
                "¿Por su cargo o actividad, administra recursos públicos?"
              }
              questionClass="sarlaft-radio-label"
              radioLabelClass="sarlaft-radio-option"
              marginTop="0"
              options={PositiveOrNegativeOption}
              className="mt-3"
            />

            <FormikRadioGroup
              formik={formik}
              field={"otherCountyObligations"}
              question={
                "¿Es usted SUJETO DE OBLIGACIONES TRIBUTARIAS EN OTRO PAÍS O GRUPO DE PAISES?"
              }
              questionClass="sarlaft-radio-label"
              radioLabelClass="sarlaft-radio-option"
              marginTop="0"
              options={PositiveOrNegativeOption}
              className="mt-3"
            />
          </div>

          <div className="col">
            <div className="row">
              <div className="col-auto">
                <img
                  src={toAbsoluteUrl("/media/icons/excla.svg")}
                  alt="exclamación-icon"
                />
              </div>

              <div className="col">
                <div className="process__others-container">
                  <div className="p-3">
                    Persona Públicamente Expuesta (PPE): i) las personas
                    expuestas políticamente-conforme al Decreto 1674 de 2016-,
                    ii) los representantes legales de organizaciones
                    internacionales y iii) las personas que gozan de
                    reconocimiento público. Se entiende por persona
                    políticamente expuesta (Decreto 1674 / 2016) los individuos
                    que desempeñan o han desempeñado funciones públicas
                    destacadas como jefes de Estado, políticos de alta
                    jerarquía, funcionarios gubernamentales, judiciales o
                    militares de alta jerarquía, altos ejecutivos (directores y
                    gerentes) de empresas sociales, industriales y comerciales
                    del estado y de sociedades de economía mixta, unidades
                    administrativas especiales, y funcionarios importantes de
                    partidos políticos.
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </BaseSection>

      <BaseSection>
        <p className="sarlaft-section-title">
          {" "}
          3. Declaración de origen de fondos/riqueza{" "}
        </p>
        <p>Declaro expresamente que:</p>

        <p className="m-0">
          <b>1.</b> Tanto mi actividad, profesión u oficio es lícita y la ejerzo
          dentro del marco legal y los recursos que poseo no provienen de
          actividades ilícitas de las contempladas en el Código Penal
          Colombiano.
        </p>
        <p className="m-0">
          <b>2.</b> La información que he suministrado en la solicitud y en este
          documento es veraz y verificable y me comprometo a actualizarla
          anualmente.{" "}
        </p>
        <p className="m-0">
          <b>3.</b> Los recursos que se deriven del desarrollo de este contrato
          no se destinaran a la financiación del terrorismo, grupos terroristas
          o actividades terroristas.
        </p>
        <p className="m-0">
          <b>4.</b> Los recursos que poseo provienen de las siguientes fuentes
          (detalle ocupacion, oficio, actividad o negocio):
        </p>

        {simpleField("sourceFunds", "Origen de fondos")}
      </BaseSection>

      <BaseSection actions={actionsButton} loading={requestStatus.loading}>
        <p className="sarlaft-section-title">
          {" "}
          4. Actividades en operaciones internacionales{" "}
        </p>

        {select(
          "typeOfInternationalTransactions",
          "¿Que tipo de transacciones realiza en moneda estrajera?",
          internationalOperations
        )}

        {formik.values.typeOfInternationalTransactions === "OTRO" &&
          simpleField("otherTypeOfIntTransaction", "¿Cúal?")}

        <FormikRadioGroup
          formik={formik}
          field={"internationalFinancialProduct"}
          question={"¿Posee productos financieros en el exterior?"}
          questionClass="sarlaft-radio-label"
          radioLabelClass="sarlaft-radio-option"
          marginTop="0"
          options={PositiveOrNegativeOption}
          className="mt-3"
        />

        <FormikRadioGroup
          formik={formik}
          field={"internationalAccounts"}
          question={"¿Posee cuentas en moneda extranjera?"}
          questionClass="sarlaft-radio-label"
          radioLabelClass="sarlaft-radio-option"
          marginTop="0"
          options={PositiveOrNegativeOption}
          className="mt-3"
        />

        {requestStatus.error && (
          <div className="alert alert-danger mt-4" role="alert">
            Ha ocurrido un error enviando la información
          </div>
        )}
      </BaseSection>
    </form>
  );
};

SarlaftForm.propTypes = {
  redirectRoute: PropTypes.string.isRequired,
  onLoad: PropTypes.func,
  updateForm: PropTypes.bool,
};
