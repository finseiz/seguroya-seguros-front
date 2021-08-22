import React, { useState } from "react";
import BaseSection from "app/components/UI/baseSection";
import AddBeneficiary from "./AddBeneficiaryModal";
import { useDispatch } from "react-redux";
import { actions } from "app/modules/healthInsurance/redux";
import { useHistory } from "react-router-dom";
import TableProcess from "../../../../../../components/process/table/Table";
import { HealthProcessSelectPlanRoute } from "app/routes/childs/Health/routes";
import { useEffect } from "react";

export const Beneficiaries = ({}) => {
  const [beneficiaries, setBeneficiaries] = useState([]);
  const [openAddModal, setOpenAddModal] = React.useState(false);
  const dispatch = useDispatch();
  const history = useHistory();

  const actionsButton = [
    {
      text: "Continuar",
      className: "btn btn-primary primary-button process__process-button px-5 mx-3",
      onClick: () => {
        const li = beneficiaries.map( (beneficiary, i) => ({ ...beneficiary, id: i }) )
        setBeneficiaries(li);
        dispatch(actions.setSuraProgress(2));
        dispatch(actions.setBeneficiaries(li));
        history.push(HealthProcessSelectPlanRoute);
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

  useEffect(() => {
    dispatch(actions.setSuraProgress(0));
  }, []);

  return (
    <BaseSection
      title="Añadir Asegurados"
      actions={actionsButton}
    >
      <TableProcess
        columns={[
          { title: "Nombre", field: "name" },
          { title: "Parentesco", field: "kinship" },
          { title: "Documento", field: "document" },
          { title: "", field: "tools" }
        ]}
        data={ beneficiaries }
        deleteRow={ deleteRow }
        editRow={ () => {} }
        indexEmptyMessage={1}
      />

      <div className="text-center">
        <button
          className="btn btn-primary process__process-table-btn mt-2"
          onClick={() => setOpenAddModal(true) }
        >
          Añadir asegurados
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
