import TableProcess from "app/components/process/table/Table";
import { actions } from "app/modules/healthInsurance/redux";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import AddBeneficiary from "./AddBeneficiaryModal";

export function Step3() {

    const dispatch = useDispatch();
    const [openAddModal, setOpenAddModal] = useState(false);
    const { beneficiaries } = useSelector(state => state.healthInsurance)

    const handleCloseAddModal = () => setOpenAddModal(false);

    return (
        <div className="card-body text-center">
            <TableProcess
                columns={[
                    { title: "Nombre", field: "name" },
                    { title: "Parentesco", field: "kinship" },
                    { title: "Documento", field: "document" },
                    { title: "", field: "tools" }
                ]}
                data={beneficiaries}
                deleteRow={(index) => dispatch(actions.deleteBeneficiary(index))}
                editRow={() => { }}
                indexEmptyMessage={1}
            />

            <div className="text-center">
                <button
                    type="button"
                    className="btn btn-primary process__process-table-btn mt-2"
                    onClick={() => setOpenAddModal(true)}
                >
                    Añadir asegurados
                </button>
            </div>

            <AddBeneficiary
                open={openAddModal}
                handleClose={handleCloseAddModal}
                handleSubmit={(values) => {
                    dispatch(actions.addBeneficiary(values));
                    handleCloseAddModal();
                }}
            />

        </div>
    )
}