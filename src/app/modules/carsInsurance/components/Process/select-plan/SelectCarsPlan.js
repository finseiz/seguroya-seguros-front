import { WhatsAppContainer } from "app/components/process/WhatsAppContainer";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getPlans, getAllianzPlans } from "../controller";
import { Loading } from "app/components/process/messages/Loading";
import { ErrorMessage } from "app/components/process/messages/Erros";
import CarPlan from "app/components/process/plans/CarPlans";
import AllianzCarPlan from "app/components/process/plans/allianzCarPlans";

export const SelectCarsPlan = () => {
  const { plans, allianzPlans, dataToSend } = useSelector(
    (state) => state.carsInsurance
  );

  const [request, setRequest] = useState({
    loading: false,
    error: false,
    insurance: "bolivar",
  });
  const [allianzRequest, setAllianzRequest] = useState({
    loading: false,
    error: false,
    insurance: "allianz",
  });
  const dispatch = useDispatch();

  // burn info
  // const plans = [...bolivarPlans];
  // console.log(
  //   "🚀 ~ file: SelectCarsPlan.js ~ line 85 ~ SelectCarsPlan ~ unifiedPlans",
  //   plans
  // );

  useEffect(() => {
    // BOLIVAR PLANS
    if (plans.length === 0) {
      setRequest({ loading: true, error: false, insurance: "bolivar" });
      getPlans(dataToSend, dispatch)
        .then((_) => {
          setRequest({ loading: false, error: false, insurance: "bolivar" });
        })
        .catch((_) =>
          setRequest({ loading: false, error: true, insurance: "bolivar" })
        );
    }
    // setRequest({ loading: false, error: false });
    // ALLIANZ PLANS
    if (allianzPlans.length === 0) {
      setAllianzRequest({ loading: true, error: false, insurance: "allianz" });
      getAllianzPlans(dataToSend, dispatch)
        .then((_) => {
          setAllianzRequest({
            loading: false,
            error: false,
            insurance: "allianz",
          });
        })
        .catch((_) =>
          setAllianzRequest({
            loading: false,
            error: true,
            insurance: "allianz",
          })
        );
    }
  }, []);

  console.log("set plans??", plans);

  return (
    <div className="container my-5">
      <div className="mx-3">
        <WhatsAppContainer />
        {request.error ? (
          <ErrorMessage insurance={request.insurance} />
        ) : request.loading ? (
          <Loading insurance={request.insurance} />
        ) : (
          <div
            style={{ gap: "1.5rem" }}
            className="row justify-content-between mt-5"
          >
            {plans.length &&
              plans.map((plan, i) => <CarPlan key={i} index={i} {...plan} />)}
          </div>
        )}
      </div>
      <div className="mx-3">
        {allianzRequest.error ? (
          <ErrorMessage insurance={allianzRequest.insurance} />
        ) : allianzRequest.loading ? (
          <Loading insurance={allianzRequest.insurance} />
        ) : (
          <div
            style={{ gap: "1.5rem" }}
            className="row justify-content-between mt-5"
          >
            {allianzPlans.length &&
              allianzPlans.map((plan, i) => (
                <AllianzCarPlan key={plan.packageId} index={i} {...plan} />
              ))}
          </div>
        )}
      </div>
    </div>
  );
};
