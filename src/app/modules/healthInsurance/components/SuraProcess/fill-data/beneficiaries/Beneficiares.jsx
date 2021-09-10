import TableProcess from "app/components/process/table/Table";
import BaseSection from "app/components/UI/baseSection";
import { actions } from "app/modules/healthInsurance/redux";
import { HealthProcessDetailsPlanRoute } from "app/routes/childs/Health/routes";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router";
import AddBeneficiary from "./AddBeneficiaryModal";

export function Beneficiaries({}) {

    const dispatch = useDispatch();
    const [modalState, setModalState] = useState({ open: false, initialValues: {} });
    const { beneficiaries } = useSelector(state => state.healthInsurance);
    const history = useHistory();

    const handleCloseAddModal = () => setModalState({ open: false, initialValues: {} });

    const actionsButton = [
        {
            text: "Continuar",
            className: "btn btn-primary primary-button process__process-button px-5 mx-3",
            onClick: () => {
                dispatch(actions.setSuraProgress(2));
                history.push(HealthProcessDetailsPlanRoute);
            },
        },
    ];

    return (

        <BaseSection
            title="Perfilamiento"
            actions={actionsButton}
        >

            <TableProcess
                columns={[
                    { title: "Nombre", field: "firstName" },
                    { title: "Apellido", field: "lastname" },
                    { title: "Documento", field: "document" },
                    { title: "", field: "tools" }
                ]}
                data={beneficiaries}
                deleteRow={(index) => dispatch(actions.deleteBeneficiary(index))}
                // ver lo del index aqui abajo
                editRow={(index) => setModalState({ open: true, initialValues: beneficiaries[index] })}
                indexEmptyMessage={1}
            />

            <div className="text-center">
                <button
                    type="button"
                    className="btn btn-primary process__process-table-btn mt-2"
                    onClick={() => setModalState({ open: true, initialValues: {} })}
                >
                    Añadir asegurados
                </button>
            </div>

            <AddBeneficiary
                open={modalState.open}
                handleClose={handleCloseAddModal}
                handleSubmit={(values) => {
                    dispatch(actions.addBeneficiary(values));
                    handleCloseAddModal();
                }}
            />

        </BaseSection>
    )
}