import React, { useState } from "react";
import PlanCard from "../PlanCard/PlanCard";
import plans from "../../fakeData/plans";

const Pricing = () => {
  const data = plans;
  const [price, setPrice] = useState(0);
  const [planList, setPlanList] = useState(data);

  return (
    <div>
      <div className="m-5 d-flex justify-content-around flex-wrap">
        {!price &&
          planList.map((plan) => (
            <PlanCard
              handlePlan={setPrice}
              heading={plan.heading}
              bgImg={plan.bgImg}
              price={plan.price}
              features={plan.features}
              key={plan._id}
            />
          ))}
      </div>
    </div>
  );
};

export default Pricing;
