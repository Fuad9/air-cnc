import React, { useState } from "react";
import DatesPicker from "./DatesPicker";

const EndingDate = () => {
	const getDate = () => {
		var date = new Date();
		date.setDate(date.getDate() + 4);
		return date;
	};

	const [departureDate, setDepartureDate] = useState(getDate());

	const dateHandler = (date, type) => {
		if (type === "departure") {
			setDepartureDate(date);
		}
	};

	return (
		<div>
			<h4 className="text-secondary">Departure</h4>
			<DatesPicker data={departureDate} dateHandler={dateHandler} type="departure" />
		</div>
	);
};

export default EndingDate;
