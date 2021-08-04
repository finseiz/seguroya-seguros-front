import React, { useEffect, useState } from "react";
import { useFormik } from "formik";

import BaseSection from "app/components/UI/baseSection";
import { sarlaftInitialValues } from "./formik";
import FormikInput from "app/modules/_forms/general/FormikInput";
import FormikSelect from "app/modules/_forms/general/FormikSelect";
import FormikRadioGroup from "app/modules/_forms/general/FormikRadioGroup";
import { requestType } from "app/helpers/sarlaft-const";
import { PositiveOrNegativeOption } from "app/helpers/radio-options";
import { toAbsoluteUrl } from "theme/helpers/AssetsHelpers";
import { useHistory } from "react-router-dom";

export const SarlaftForm = ({ redirectRoute, onLoad }) => {

  const [citiesAndDep, setCitiesAndDep] = useState([
    { title: "Cali, Valle", value: "cali" },
    { title: "Bogotá, Cundinamarca", value: "bog" },
  ]);

  const [departements, setDepartements] = useState([
    { title: "Valle", value: "cali" },
    { title: "Cundinamarca", value: "bog" },
    { title: "Cauca", value: "bog" },
    { title: "Tolima", value: "bog" },
  ]);

  const [docTypes, setDocTypes] = useState([
    { title: "Cédula", value: "CC" },
    { title: "Tarjeta de identidad", value: "TI" },
    { title: "Pasaporte", value: "PA" },
  ]);

  const [cities, setCities] = useState([
    { title: "Popayán", value: "CC" },
    { title: "Caloto", value: "CC" },
    { title: "Paispamba", value: "CC" },
  ]);

  const history = useHistory();

  useEffect(() => {
    if (onLoad) onLoad();
  }, [])

  const formik = useFormik({
    initialValues: sarlaftInitialValues,
    //validationSchema: schema,
    onSubmit: (values, actions) => {
      history.push(redirectRoute);
    },
  });

  const actionsButton = [
    {
      text: "Continuar",
      className: "btn btn-primary primary-button",
      type: "submit",
    },
  ];

  const simpleField = (field, label, type = "text") => {
    return (
      <div className="col px-0 py-2">
        <div className="mr-2">
          <FormikInput formik={formik} field={field} label={label} type={type} labelClass="text-dark" />
        </div>
      </div>
    )
  }

  const select = (field, label, options) => {
    return (
      <div className="col px-0 py-2">
        <div className="mr-2">
          <FormikSelect formik={formik} field={field} label={label} labelClass="text-dark"
            options={options}
          />
        </div>
      </div>
    )
  }

  const ties = (field, title) => {
    return (
      <div className="row align-items-center mt-2">
        <div className="col-md-auto pl-0 pr-5">
          {title}
        </div>

        <div className="col">
          <FormikRadioGroup
            formik={formik}
            field={field}
            options={[
              { title: "Familiar", value: "F" },
              { title: "Comercial", value: "C" },
              { title: "Laboral", value: "L" },
              { title: "Otra", value: "Ot" },
            ]}
          />
        </div>
      </div>
    )
  }

  return (
    <form onSubmit={formik.handleSubmit}>
      <BaseSection
        title="Formulario SARLAFT - Sistema de Administración del Riesgo de Lavado de Activos y de la Financiación del Terrorismo"
        description={(
          <div>
            <p>
              Razón por la cual hay que llenar este formulario en unas muy breves palabras. Ipsum dolor sit amet, consectetur adipiscing elit, sed eiusmod tempor incidunt ut labore et dolore magna aliqua.
            </p>
            <p> Tomará aproximadamente: <b>5 minutos.</b> </p>
          </div>
        )}
        loading={formik.isSubmitting}
      >

        <p className="sarlaft-section-title"> 1. Datos de vinculación </p>
        <div className="row row-cols-3">

          {simpleField("date", "Fecha Diligenciamiento", "date")}

          {select("city", "Lugar de expedición", citiesAndDep)}

          {simpleField("office", "Sucursal")}

          {select("requestType", "Tipo de Solicitud", requestType)}

        </div>

        <p className="sarlaft-section-subtitle text-left mt-3"> Clase de vinculación </p>
        <FormikRadioGroup
          formik={formik}
          field="vinculationType"
          options={[
            { title: "Tomador", value: "T" },
            { title: "Asegurado", value: "A" },
            { title: "Beneficiario", value: "B" },
            { title: "Afianzado", value: "Af" },
            { title: "Proveedor", value: "Pr" },
            { title: "Intermediario", value: "In" },
            { title: "Otra", value: "O" },
          ]}
        />

        <p className="sarlaft-section-subtitle text-left mt-4"> Indique los vínculos existentes entre tomador-asegurado </p>
        {ties("tie_1", "Tomador - Asegurado")}
        {ties("tie_2", "Beneficiario - Tomador")}
        {ties("tie_3", "Asegurado - Beneficiario")}


      </BaseSection>

      <BaseSection>
        <p className="sarlaft-section-title"> 2. Información básica </p>
        <div className="row row-cols-3">

          {simpleField("fullname", "Nombre completo")}
          {simpleField("firstLastName", "Primer apellido")}
          {simpleField("secondLastName", "Segundo Apellido")}

          {select("documentType", "Tipo de documento", docTypes)}
          {simpleField("document", "Número de documento")}
          {simpleField("expeditionDate", "Fecha de expedición", "date")}

          {select("expeditionCity", "Lugar de expedición", citiesAndDep)}
          {simpleField("birthdate", "Fecha de nacimiento", "date")}
          {select("birthCity", "Lugar de nacimiento", citiesAndDep)}

          {simpleField("nationality", "Nacionalidad 1")}
          {simpleField("secondNationality", "Nacionalidad 2 (Opcional)")}
          {simpleField("email", "Correo electrónico")}

          {simpleField("address", "Dirección (residencia)")}
          {select("department", "Departamento", departements)}
          {select("city", "Ciudad", cities)}

          {simpleField("phone", "Teléfono", "phone")}
          {simpleField("cellphone", "Celular", "phone")}

        </div>
        <hr />
        <div className="row row-cols-3 mt-4">

          {simpleField("mainActivity", "Actividad principal")}
          {select("sector", "Sector", cities)}
          {simpleField("ciu", "CIU (cód)")}

          {select("activityType", "Tipo de actividad", cities)}
          {simpleField("occupation", "Ocupación")}
          {simpleField("position", "Cargo")}

          {simpleField("companyName", "Empresa donde trabaja")}
          {simpleField("companyAddress", "Dirección (oficina)")}
          {select("companyDepartment", "Departamento", departements)}

          {select("companyCity", "Ciudad", cities)}
          {simpleField("companyPhone", "Teléfono", "phone")}
          {simpleField("optionalActivity", "Actividad secundaria")}

          {simpleField("companyCiu", "CIU (cód)")}

        </div>

        <hr />
        {simpleField("productOrService", "¿Qué tipo de producto y/o servicio comercializa?")}
        <div className="row row-cols-2 mt-4">

          {simpleField("income", "Ingresos mensuales (pesos)", "number")}
          {simpleField("expenses", "Egresos mensuales (pesos)", "number")}

          {simpleField("assets", "Activos (pesos)", "number")}
          {simpleField("passives", "Pasivos (pesos)", "number")}

          {simpleField("heritage", "Patrimonio (activos - pasivos, pesos)", "number")}
          {simpleField("otherIncome", "Otros ingresos (pesos)", "number")}

          {simpleField("otherIncomeDesc", "Concepto otros ingresos mensuales", "number")}

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
              question={"¿Existe algún vínculo entre usted y una persona considerada públicamente expuesta?"}
              questionClass="sarlaft-radio-label"
              radioLabelClass="sarlaft-radio-option"
              marginTop="0"
              options={PositiveOrNegativeOption}
              className="mt-3"
            />

            <FormikRadioGroup
              formik={formik}
              field={"publicResources"}
              question={"¿Por su cargo o actividad, administra recursos públicos?"}
              questionClass="sarlaft-radio-label"
              radioLabelClass="sarlaft-radio-option"
              marginTop="0"
              options={PositiveOrNegativeOption}
              className="mt-3"
            />

            <FormikRadioGroup
              formik={formik}
              field={"otherCountyObligations"}
              question={"¿Es usted SUJETO DE OBLIGACIONES TRIBUTARIAS EN OTRO PAÍS O GRUPO DE PAISES?"}
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
                    Persona Públicamente Expuesta (PPE): i) las personas expuestas políticamente-conforme al Decreto 1674 de 2016-, ii) los representantes legales de organizaciones internacionales y iii) las personas que gozan de reconocimiento público. Se entiende por persona políticamente expuesta (Decreto 1674 / 2016) los individuos que desempeñan o han desempeñado funciones públicas destacadas como jefes de Estado, políticos de alta jerarquía, funcionarios gubernamentales, judiciales o militares de alta jerarquía, altos ejecutivos (directores y gerentes) de empresas sociales, industriales y comerciales del estado y de sociedades de economía mixta, unidades administrativas especiales, y funcionarios importantes de partidos políticos.
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </BaseSection>

      <BaseSection>
        <p className="sarlaft-section-title"> 3. Declaración de origen de fondos/riqueza </p>
        <p>Declaro expresamente que:</p>

        <p className="m-0"><b>1.</b> Tanto mi actividad, profesión u oficio es lícita y la ejerzo dentro del marco legal y los recursos que poseo no provienen de actividades ilícitas de las contempladas en el Código Penal Colombiano.</p>
        <p className="m-0"><b>2.</b> La información que he suministrado en la solicitud y en este documento es veraz y verificable y me comprometo a actualizarla anualmente. </p>
        <p className="m-0"><b>3.</b> Los recursos que se deriven del desarrollo de este contrato no se destinaran a la financiación del terrorismo, grupos terroristas o actividades terroristas.</p>
        <p className="m-0"><b>4.</b> Los recursos que poseo provienen de las siguientes fuentes (detalle ocupacion, oficio, actividad o negocio):</p>

        {simpleField("sourceFunds", "Origen de fondos")}
      </BaseSection>

      <BaseSection
        actions={actionsButton}
      >
        <p className="sarlaft-section-title"> 4. Actividades en operaciones internacionales </p>

        <FormikRadioGroup
          formik={formik}
          field={"carryOutInternationalTransactions"}
          question={"¿Realiza transacciones en moneda extranjera?"}
          questionClass="sarlaft-radio-label"
          radioLabelClass="sarlaft-radio-option"
          marginTop="0"
          options={PositiveOrNegativeOption}
          className="mt-3"
        />

        {simpleField("currency", "En caso afirmativo, ¿cuál?")}

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

      </BaseSection>
    </form>
  );
}