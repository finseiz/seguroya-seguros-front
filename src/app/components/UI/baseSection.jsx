import React from "react";
import { CircularProgress } from "@material-ui/core";

function BaseSection({ children, title, description, actions, loading }) {
  return (

    <div className="container-fluid">

      {/* Process Title */}
      {
        title && (
          <div className="custom-card bg-white mt-4">
            <div className="card-body">
              <p className="process__process-title mb-0 py-2 px-4"> {title} </p>
            </div>
            {
              description && (
                <div className="pt-0">
                  <span>{description}</span>
                </div>
              )
            }
          </div>
        )
      }

      {/* Process body */}
      <div className="custom-card bg-white my-4">
        <div className="mx-5 py-5">
          {children}
        </div>
      </div>

      {/* Process actions */}
      {
        actions && (
          <div className="card custom-card mt-3">
            <div className="card-body text-center">

              {
                actions.map((action, index) => {
                  const { content, text, ...props } = action;
                  return (
                    <button
                      className={ props.className ? props.className : "btn btn-primary" }
                      key={index}
                      type="button"
                      {...props}
                    >
                      {content ?? (
                        <>
                          <span> {text} </span>
                          {
                            loading && (
                              <CircularProgress
                                className="ml-2"
                                size={10}
                                color="inherit"
                              />
                            )
                          }
                        </>
                      )}
                    </button>
                  );
                })
              }
            </div>
          </div>
        )
      }
    </div>
  );
}

export default BaseSection;
