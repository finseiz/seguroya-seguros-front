import React from "react";
import PropTypes from "prop-types";
import { toAbsoluteUrl } from "theme/helpers/AssetsHelpers";

const Field = ({ name, form, formik, onEdit, combined }) => {
  const fieldValue = () => {
    if (!form && combined) {
      const fields = combined.split(",");
      return (
        <div>
          <p className="overview__label mb-1"> {name} </p>
          <span>
            {`${formik.values[fields[0]]} ${formik.values[fields[1]]}` ||
              "No aplica"}
          </span>
        </div>
      );
    } else {
      return (
        <div>
          <p className="overview__label mb-1"> {name} </p>
          <span>{formik.values[form] || "No aplica"}</span>
        </div>
      );
    }
  };

  return (
    <div className="container px-4">
      <div className="d-flex flex-row justify-content-between mb-4">
        {fieldValue()}

        <div>
          <button title="editar" type="button" className="btn" onClick={onEdit}>
            <img
              src={toAbsoluteUrl("/media/icons/edit-Icon.svg")}
              alt="edit-icon"
            />
          </button>
        </div>
      </div>
    </div>
  );
};

Field.propTypes = {
  name: PropTypes.string.isRequired,
};

export default Field;
