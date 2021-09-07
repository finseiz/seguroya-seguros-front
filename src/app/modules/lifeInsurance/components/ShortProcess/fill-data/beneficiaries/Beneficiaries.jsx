import React, { useState } from "react";
import BaseSection from "app/components/UI/baseSection";
import AddBeneficiary from "./AddBeneficiaryModal";
import { LifeProcessInsurabilityRoute, LifeProcessPersonAndMoreDataRoute, } from "./../../../../../../routes/childs/Life/routes";
import { useDispatch, useSelector } from "react-redux";
import { actions } from "app/modules/lifeInsurance/redux";
import { useHistory } from "react-router-dom";
import TableProcess from "../../../../../../components/process/table/Table";
import { isPecentCorrect } from "../../controller";

export const Beneficiaries = ({ }) => {
  const { selectedPlan: { beneficiaries: globalBeneficiaries } } = useSelector(state => state.lifeInsurance)
  const [beneficiaries, setBeneficiaries] = useState([...globalBeneficiaries]);
  const [modalState, setModalState] = useState({ open: false, initialValues: {} });
  const [showPercentError, setShowPercentError] = useState(false);
  const dispatch = useDispatch();
  const history = useHistory();

  const actionsButton = [
    {
      text: "Atras",
      className: "btn btn-primary primary-button process__process-button px-5 mx-3",
      onClick: () => {
        dispatch(actions.setShortProcess(0));
        history.push(LifeProcessInsurabilityRoute);
      },
    },
    {
      text: "Continuar",
      className: "btn btn-primary primary-button process__process-button px-5 mx-3",
      onClick: () => {
        const beneficiariesPercent = isPecentCorrect(beneficiaries)
        if (beneficiariesPercent) {
          dispatch(actions.setShortProcess(2));
          dispatch(actions.setBeneficiares(beneficiaries));
          history.push(LifeProcessPersonAndMoreDataRoute);
        } else {
          setShowPercentError(true)
        }
      },
    },
  ];

  const handleCloseModal = () => setModalState({ open: false, initialValues: {} });

  const handleEditItemModal = (index) => setModalState({ open: true, initialValues: {...beneficiaries[index], index} });

  const deleteRow = (index) => {
    const aux = [...beneficiaries];
    aux.splice(index, 1);
    setBeneficiaries(aux);
  }

  const addData = (values, index) => {
    // If updating
    if ( index !== undefined ){
      const aux = [...beneficiaries];
      aux[index] = values;
      setBeneficiaries([...aux]);
    // Otherwise (adding)
    }else{
      setBeneficiaries([...beneficiaries, values]);
    }
  };

  return (
    <BaseSection
      title="Inscribe beneficiarios"
      actions={actionsButton}
    >
      {
        showPercentError &&
        (
          <div class="alert alert-danger" role="alert">
            El porcentaje de los beneficiarios debe sumar 100.
          </div>
        )
      }

      <TableProcess
        columns={[
          { title: "Identificación", field: "identification" },
          { title: "Nombre", field: "firstName" },
          { title: "Apellido", field: "surname" },
          { title: "Porcentaje de participación", field: "participation" },
          { title: "", field: "tools" }
        ]}
        data={beneficiaries}
        deleteRow={deleteRow}
        editRow={handleEditItemModal}
      />

      <div className="text-center">
        <button
          className="btn btn-primary process__process-table-btn mt-2"
          onClick={() => setModalState({ open: true, initialValues: {} })}
        >
          Añadir beneficiario/a
        </button>
      </div>

      <AddBeneficiary
        state={modalState}
        handleClose={handleCloseModal}
        handleSubmit={(values, index) => {
          addData(values, index);
          handleCloseModal();
        }}
      />
    </BaseSection>
  );
}