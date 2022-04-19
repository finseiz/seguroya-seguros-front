import { WhatsAppContainer } from "app/components/process/WhatsAppContainer";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getPlans, getAllianzPlans } from "../controller";
import { Loading } from "app/components/process/messages/Loading";
import { ErrorMessage } from "app/components/process/messages/Erros";
import CarPlan from "app/components/process/plans/CarPlans";
import AllianzCarPlan from "app/components/process/plans/allianzCarPlans";
import { allianzPlans, bolivarPlans } from "../burnPlans";

export const SelectCarsPlan = () => {
  const { plans, dataToSend } = useSelector((state) => state.carsInsurance);
  const [request, setRequest] = useState({ loading: false, error: false });
  const dispatch = useDispatch();

  // burn info

  //const plans = [...bolivarPlans];
  // console.log(
  //   "🚀 ~ file: SelectCarsPlan.js ~ line 85 ~ SelectCarsPlan ~ unifiedPlans",
  //   plans
  // );

  useEffect(() => {
    console.log("data to send", dataToSend);
    console.log("planes****", plans);

    if (plans.length === 0) {
      setRequest({ loading: false, error: false });
      getPlans(dataToSend, dispatch)
        .then((_) => {
          setRequest({ loading: false, error: false });
        })
        .catch((_) => setRequest({ loading: false, error: true }));

      // getAllianzPlans(dataToSend, dispatch)
      //   .then((_) => {
      //     setRequest({ loading: false, error: false });
      //   })
      //   .catch((_) => setRequest({ loading: false, error: true }));
    }
  }, []);

  return (
    <div className="container my-5">
      <div className="mx-3">
        <WhatsAppContainer />

        {request.error ? (
          <ErrorMessage />
        ) : request.loading ? (
          <Loading />
        ) : (
          <div
            style={{ gap: "1.5rem" }}
            className="row justify-content-between mt-5"
          >
            {plans.length &&
              plans.map((plan, i) => <CarPlan key={i} index={i} {...plan} />)}

            {allianzPlans.length &&
              allianzPlans.map((plan, i) => (
                <AllianzCarPlan key={i} index={i} {...plan} />
              ))}
          </div>
        )}
      </div>
    </div>
  );
};
