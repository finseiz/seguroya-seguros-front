import TableProcess from "app/components/process/table/Table";
import BaseSection from "app/components/UI/baseSection";
import { actions } from "app/modules/lifeInsurance/redux";
import { SuraLifeSelectPlanRoute } from "app/routes/childs/Life/routes";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router";
import { isPecentCorrect } from "../controller";
import AddBeneficiary from "./AddBeneficiaryModal";

export function Beneficiaries({ }) {

    const dispatch = useDispatch();
    const { selectedPlan: { beneficiaries } } = useSelector(state => state.lifeInsurance);
    const [modalState, setModalState] = useState({ open: false, initialValues: {} });
    const [showPercentError, setShowPercentError] = useState(false);
    const history = useHistory();

    const handleCloseAddModal = () => setModalState({ open: false, initialValues: {} });

    useEffect(() => {
        dispatch(actions.setShortProcess(1));
    }, [])

    const actionsButton = [
        {
            text: "Atras",
            className: "btn btn-primary primary-button process__process-button px-5 mx-3",
            onClick: () => {
                dispatch(actions.setShortProcess(0));
                history.goBack();
            },
        },
        {
            text: "Continuar",
            className: "btn btn-primary primary-button process__process-button px-5 mx-3",
            onClick: () => {                
                const beneficiariesPercent = isPecentCorrect(beneficiaries)
                if (beneficiariesPercent) {
                    dispatch(actions.setShortProcess(2));
                    history.push(SuraLifeSelectPlanRoute);
                } else {
                    setShowPercentError(true)
                }

            },
        },
    ];

    return (

        <BaseSection
            title="Inscripción de beneficiarios"
            actions={actionsButton}
        >

            {
                showPercentError &&
                (
                    <div className="alert alert-danger" role="alert">
                        El porcentaje de los beneficiarios debe sumar 100.
                    </div>
                )
            }

            <TableProcess
                columns={[
                    { title: "Nombre", field: "firstName" },
                    { title: "Apellido", field: "surname" },
                    { title: "Documento", field: "document" },
                    { title: "Participación", field: "participation" },
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
                    Añadir beneficiario
                </button>
            </div>

            <AddBeneficiary
                state={modalState}
                handleClose={handleCloseAddModal}
                handleSubmit={(values, document) => {
                    if (document) {
                        const index = beneficiaries.findIndex((ben) => ben.id === document)
                        dispatch(actions.updateBeneficiary(values, index));
                    }
                    else dispatch(actions.addBeneficiary(values));
                    handleCloseAddModal();
                }}
            />

        </BaseSection>
    )
}