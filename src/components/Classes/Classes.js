import React, { useState } from "react";
import ClassCard from "../ClassCard/ClassCard";
import classes from "../../fakeData/classes";
import ClassDetails from "../ClassDetails/ClassDetails";

const Classes = () => {
  const data = classes;
  const [classList, setClassList] = useState(data);
  const [details, setDetails] = useState(null);

  const showDetails = (id) => {
    setDetails(classList.find((cls) => cls.id === id));
  };

  return (
    <div className="w-100">
      <div className="m-5 d-flex justify-content-around flex-wrap">
        {!details &&
          classList.map((cls) => (
            <ClassCard
              showDetails={() => showDetails(cls.id)}
              name={cls.name}
              bgImg={cls.bgImg}
              key={cls._id}
            />
          ))}
      </div>
      {!!details && (
        <ClassDetails details={details} hideDetails={() => setDetails(null)} />
      )}
    </div>
  );
};

export default Classes;
