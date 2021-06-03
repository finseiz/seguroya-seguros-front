import React from "react";
import BaseSection from "app/components/UI/baseSection";
import AddBeneficiary from "./addBeneficiary";

function BeneficiaryEnrollment({ handleSubmit }) {
  const [beneficiariesList, setBeneficiariesList] = React.useState([]);
  const [openAddModal, setOpenAddModal] = React.useState(false);

  const columns = [
    { title: "No.", field: "identification" },
    { title: "Nombres", field: "fullname" },
    { title: "Apellidos", field: "" },
    { title: "Parentesco", field: "kinship" },
    { title: "Porcentaje de participación", field: "participation" },
  ];

  const actionsButton = [
    {
      text: "Continuar",
      className: "btn btn-primary primary-button",
      onClick: () => handleSubmit(beneficiariesList),
    },
  ];

  const handleOpenAddModal = () => setOpenAddModal(true);
  const handleCloseAddModal = () => setOpenAddModal(false);

  const addData = (values) => {
    setBeneficiariesList((prevState) => [...prevState, values]);
  };

  return (
    <BaseSection title="Inscribe beneficiarios" actions={actionsButton}>
      <div className="table-responsive">
        <table className="w-100">
          <thead>
            <tr className="text-left text-uppercase">
              {columns.map((column, index) => (
                <th key={index} style={{ minWidth: "150px" }}>
                  {column.title}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {beneficiariesList.length ? (
              beneficiariesList.map((value, index) => (
                <tr key={index}>
                  {columns.map((column, i) => (
                    <td key={i} className={`${i !== 0 && "pl-0"} py-8`}>
                      <span className="d-block font-size-lg">
                        {value[column.field]}
                      </span>
                    </td>
                  ))}
                </tr>
              ))
            ) : (
              <tr className="text-center">
                <th colSpan={columns.length}>
                  <span>Aún no has añadido beneficiarios a tu plan</span>
                  <span>
                    Puedes añadir a tu cónyugue, hijos/as, hermanos/as u otros.
                    En caso de que no los quieras añadir manualmente, quedarán
                    como beneficiarios los de ley.
                  </span>
                </th>
              </tr>
            )}
            <tr>
              <td colSpan="5" className="text-center pt-3">
                <button
                  className="btn btn-primary"
                  onClick={handleOpenAddModal}
                >
                  Añadir beneficiario/a
                </button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>

      {openAddModal && (
        <AddBeneficiary
          open={openAddModal}
          handleClose={handleCloseAddModal}
          handleSubmit={addData}
        />
      )}
    </BaseSection>
  );
}

export default BeneficiaryEnrollment;
