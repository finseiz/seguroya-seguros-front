import React from "react";
import { useHistory } from "react-router-dom";
import { toAbsoluteUrl } from "theme/helpers";
import { InsuranceLogo } from "app/const";
import { ActionButton } from "app/components/UI/auxComponents";

const dataInit = {
  documentType: "Cédula de Ciudadanía",
  identification: "123456789",
  firstName: "Jhoan",
  firstLastName: "Lozano",
  birthDepartment: "VALLE DEL CAUCA",
  brithCity: "CALI",
  gender: "Masculino",
  residentDepartment: "VALLE DEL CAUCA",
  residentCity: "CALI",
  address: "cll 12 13 14",
  ocupation: "Empleado",
  cellphone: "3215469878",
  email: "jhlozano99@gmail.com",
  publiclyExposed: false,
  publiclyExposedVinculation: false,
  taxObligations: false,
  usTaxResidentOrPlayer: false,
  taxObligationsOutsideColombia: false,
};

export default function InsuranceDetails({ insurance, selectPlan }) {
  const history = useHistory();

  const handleConfirm = async () => {
    selectPlan();
  };

  return (
    <div className="row m-0 mb-4">
      <div className="card custom-card w-100">
        <div className="card-body">
          <div className="row m-0">
            <div className="col-8">
              <div className="image-wrapper">
                <img
                  src={toAbsoluteUrl(
                    `/media/logos/${InsuranceLogo[insurance.insurance_name]}`
                  )}
                  alt="colmena-logo"
                />
              </div>
            </div>
            <div className="col-4">
              <ActionButton
                className="btn btn-primary primary-button"
                content="Comprar"
                onClick={handleConfirm}
                value={insurance}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
