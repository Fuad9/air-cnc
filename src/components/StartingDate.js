import React, { useState } from "react";
import DatesPicker from "./DatesPicker";

const StartingDate = () => {
  const [arrivalDate, setArrivalDate] = useState(new Date());

  const dateHandler = (date, type) => {
    if (type === "arrival") {
      setArrivalDate(date);
    }
  };

  return (
    <div>
      <h4>Arrival</h4>
      <DatesPicker
        data={arrivalDate}
        dateHandler={dateHandler}
        type="arrival"
      />
    </div>
  );
};

export default StartingDate;
