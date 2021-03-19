import React, { useState } from "react";
import { enGB } from "date-fns/locale";
import { DatePicker } from "react-nice-dates";
import "react-nice-dates/build/style.css";

const CurrentDate = ({ data, dateHandler, type }) => {
	const [date, setDate] = useState(data);

	const handleChange = (e, type) => {
		setDate(e);
		dateHandler(e, type);
	};

	return (
		<div style={{ display: "flex" }}>
			<DatePicker
				date={date}
				onDateChange={(e) => handleChange(e, type)}
				locale={enGB}
				format="dd/MM/yyyy"
			>
				{({ inputProps, focused }) => (
					<input
						className={"input" + (focused ? " -focused" : "")}
						style={{ width: 150 }}
						{...inputProps}
					/>
				)}
			</DatePicker>
		</div>
	);
};

export default CurrentDate;
