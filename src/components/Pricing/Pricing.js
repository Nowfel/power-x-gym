import React, { useState, useEffect } from "react";
import MembershipForm from "../MembershipForm/MembershipForm";
import PlanCard from "../PlanCard/PlanCard";
import plans from "../../fakeData/plans";

const Pricing = () => {
  const data = plans;
  const [price, setPrice] = useState(0);
  const [showPaypal, setShowPaypal] = useState(false);
  const [memberDetails, setMemberDetails] = useState({});
  const [planList, setPlanList] = useState(data);

  const formComplete = (details) => {
    setMemberDetails(details);
    setShowPaypal(true);
  };

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
      {!showPaypal && !!price && <MembershipForm formComplete={formComplete} />}
    </div>
  );
};

export default Pricing;
