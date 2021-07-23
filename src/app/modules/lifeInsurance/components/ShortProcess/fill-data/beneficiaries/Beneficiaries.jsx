import React, { useState } from "react";
import BaseSection from "app/components/UI/baseSection";
import AddBeneficiary from "./AddBeneficiaryModal";
import { LifeProcessInsurabilityRoute, LifeProcessPersonAndMoreDataRoute, } from "./../../../../../../routes/childs/Life/routes";
import { useDispatch } from "react-redux";
import { actions } from "app/modules/lifeInsurance/redux";
import { useHistory } from "react-router-dom";
import TableProcess from "../../../../../../components/process/table/Table";

export const Beneficiaries = ({}) => {
  const [beneficiaries, setBeneficiaries] = useState([]);
  const [openAddModal, setOpenAddModal] = React.useState(false);
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
        dispatch(actions.setShortProcess(2));
        history.push(LifeProcessPersonAndMoreDataRoute);
      },
    },
  ];

  const handleCloseAddModal = () => setOpenAddModal(false);

  const deleteRow = ( index ) => { 
    const aux = [...beneficiaries];
    aux.splice( index, 1 );
    setBeneficiaries( aux );
  }

  const addData = ( values ) => {
    setBeneficiaries( [...beneficiaries, values] );
  };

  return (
    <BaseSection
      title="Inscribe beneficiarios"
      actions={actionsButton}
    >
      <TableProcess
        columns={[
          { title: "Identificación", field: "identification" },
          { title: "Nombre", field: "fullname" },
          { title: "Parentesco", field: "kinship" },
          { title: "Porcentaje de participación", field: "participation" },
          { title: "", field: "tools" }
        ]}
        data={ beneficiaries }
        deleteRow={ deleteRow }
        editRow={ () => {} }
      />

      <div className="text-center">
        <button
          className="btn btn-primary process__process-table-btn mt-2"
          onClick={() => setOpenAddModal(true) }
        >
          Añadir beneficiario/a
        </button>
      </div>

      <AddBeneficiary
        open={openAddModal}
        handleClose={handleCloseAddModal}
        handleSubmit={ (values) => {
          addData(values);
          handleCloseAddModal();
        }}
      />
    </BaseSection>
  );
}
