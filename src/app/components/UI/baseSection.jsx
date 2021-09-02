import React from "react";

function BaseSection({ children, title, description, actions, loading=false }) {
  return (

    <div className="container-fluid">

      {/* Process Title */}
      {
        title && (
          <div className="custom-card bg-white mt-4">
            <div className="card-body">

              <p className="process__process-title mb-0 py-2 px-4"> {title} </p>

              {
                description && (
                  <div className="px-4 mt-3">
                    {description}
                  </div>
                )
              }
            </div>
          </div>
        )
      }

      {/* Process body */}
      {
        children && (
          <div className="custom-card bg-white my-4">
            <div className="mx-5 py-5">
              {children}
            </div>
          </div>
        )
      }

      {/* Process actions */}
      {
        actions && (
          <div className="card custom-card my-3 border-0">
            <div className="card-body text-center">

              {
                loading ? 
                (
                  <div class="spinner-border" role="status">
                    <span class="visually-hidden"></span>
                  </div>
                ):
                actions.map((action, index) => {
                  const { content, text, ...props } = action;
                  return (
                    <button
                      className={props.className ? props.className : "btn btn-primary"}
                      key={index}
                      type="button"
                      {...props}
                    >
                      {content ?? (
                        <>
                          <span> {text} </span>
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
