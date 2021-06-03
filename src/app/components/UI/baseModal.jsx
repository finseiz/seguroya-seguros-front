import React from "react";
import { Modal } from "react-bootstrap";

function BaseModal(props) {
  const { open, title, handleClose, actions, children, ...others } = props;
  return (
    <Modal show={open} onHide={handleClose} {...others}>
      {title && (
        <Modal.Header closeButton>
          <Modal.Title>{title}</Modal.Title>
        </Modal.Header>
      )}
      <Modal.Body className="p-4">{children}</Modal.Body>
      {actions && (
        <Modal.Footer>
          {actions.map((action, index) => {
            const { content, ...props } = action;
            return (
              <button
                className={
                  props.className ? props.className : "btn btn-primary"
                }
                key={index}
                {...props}
              >
                {content}
              </button>
            );
          })}
        </Modal.Footer>
      )}
    </Modal>
  );
}

export default BaseModal;
