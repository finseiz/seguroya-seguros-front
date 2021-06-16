import React from "react";
import { CircularProgress } from "@material-ui/core";

function BaseSection({ children, title, description, actions, loading }) {
  return (
    <div className="container-fluid">
      {title && (
        <div className="card custom-card">
          <div className="card-body font-weight-bold">{title}</div>
          <div className="card-body pt-0">
            <span>{description}</span>
          </div>
        </div>
      )}
      <div className="card custom-card mt-3">
        <div className="card-body">{children}</div>
      </div>
      {actions && (
        <div className="card custom-card mt-3">
          <div className="card-body text-center">
            {actions.map((action, index) => {
              const { content, text, ...props } = action;
              return (
                <button
                  className={
                    props.className ? props.className : "btn btn-primary"
                  }
                  key={index}
                  {...props}
                >
                  {content ?? (
                    <>
                      <span>{text}</span>
                      {loading && (
                        <CircularProgress
                          className="ml-2"
                          size={10}
                          color="inherit"
                        />
                      )}
                    </>
                  )}
                </button>
              );
            })}
          </div>
        </div>
      )}
    </div>
  );
}

export default BaseSection;
