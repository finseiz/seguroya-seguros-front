import React, { Fragment, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { WhatsAppContainer } from "app/components/process/WhatsAppContainer";
import SuraPlan from "app/components/process/plans/SuraPlan";
import { useState } from "react";
import { getPlans } from "../controller";
import { Loading } from "app/components/process/messages/Loading";
import { ErrorMessage } from "app/components/process/messages/Erros";

export const SelectSuraHealthPlan = () => {
  const {
    plans,
    data: { client },
  } = useSelector((state) => state.healthInsurance);
  const dispatch = useDispatch();
  const [request, setRequest] = useState({ loading: false, error: false });

  useEffect(() => {
    if (plans.length === 0) {
      setRequest({ loading: true, error: false });
      getPlans(client, dispatch).then((success) =>
        setRequest({ loading: false, error: !success })
      );
    }
  }, []);

  console.log("PLANS", plans);

  return (
    <div className="container my-5">
      <div className="mx-3">
        <WhatsAppContainer />

        {request.error ? (
          <ErrorMessage />
        ) : request.loading ? (
          <Loading />
        ) : (
          // <div className="row justify-content-between mt-3">
          //   {plans.length &&
          //     plans.map((plan, i) => (
          //       <Fragment key={i}>
          //         <SuraPlan index={i} {...plan} />
          //       </Fragment>
          //     ))}
          // </div>
          <div className="row justify-content-center mt-3">
            {plans.length && (
              <Fragment>
                <SuraPlan {...plans[2]} />
              </Fragment>
            )}
          </div>
        )}
      </div>
    </div>
  );
};
