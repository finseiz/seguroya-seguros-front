import TableProcess from "app/components/process/table/Table";
import BaseSection from "app/components/UI/baseSection";
import { actions } from "app/modules/healthInsurance/redux";
import { HealthProcessDetailsPlanRoute, HealthProcessSelectPlanRoute } from "app/routes/childs/Health/routes";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router";
import AddBeneficiary from "./AddBeneficiaryModal";

export function Beneficiaries({}) {

    const dispatch = useDispatch();
    const { beneficiaries } = useSelector(state => state.healthInsurance);
    const [modalState, setModalState] = useState({ open: false, initialValues: {} });
    const history = useHistory();

    const handleCloseAddModal = () => setModalState({ open: false, initialValues: {} });

    const actionsButton = [
        {
            text: "Atras",
            className: "btn btn-primary primary-button process__process-button px-5 mx-3",
            onClick: () => {
                dispatch(actions.setSuraProgress(1));
                history.push(HealthProcessSelectPlanRoute);
            },
        },
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
                    { title: "Apellido", field: "surname" },
                    { title: "Documento", field: "document" },
                    { title: "", field: "tools" }
                ]}
                data={beneficiaries}
                deleteRow={(index) => dispatch(actions.deleteBeneficiary(index))}
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
                state={modalState}
                handleClose={handleCloseAddModal}
                handleSubmit={(values, document) => {
                    if ( document ) {
                        const index = beneficiaries.findIndex( (ben) => ben.id === document) 
                        dispatch(actions.updateBeneficiary(values, index) );
                    }
                    else dispatch(actions.addBeneficiary(values));
                    handleCloseAddModal();
                }}
            />

        </BaseSection>
    )
}