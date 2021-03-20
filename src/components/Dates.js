import React, { useState } from "react";
import { enGB } from "date-fns/locale";
import { DatePicker } from "react-nice-dates";
import "react-nice-dates/build/style.css";
import calendar from "../images/photos/calendar-outline.png";
//styles
import "./Dates.scss";

const CurrentDate = () => {
	const [date, setDate] = useState(new Date());

	const handleChange = (e) => {
		setDate(e);
	};

	return (
		<div style={{ display: "flex" }}>
			<div className="date-picker">
				<div className="input-date shadow">
					<DatePicker
						date={date}
						onDateChange={(e) => handleChange(e)}
						locale={enGB}
						format="dd/MM/yyyy"
					>
						{({ inputProps, focused }) => (
							<>
								<label htmlFor="input">Arrival</label>
								<br />
								<input
									className={"input" + (focused ? " -focused" : "")}
									style={{ width: "100%" }}
									{...inputProps}
								/>
							</>
						)}
					</DatePicker>
					<img src={calendar} alt="" />
				</div>
				<i class="bx bx-right-arrow-alt"></i>
				<div className="input-date shadow">
					<DatePicker
						date={date}
						onDateChange={(e) => handleChange(e)}
						locale={enGB}
						format="dd/MM/yyyy"
					>
						{({ inputProps, focused }) => (
							<>
								<label htmlFor="input">Departure</label>
								<br />
								<input
									className={"input" + (focused ? " -focused" : "")}
									style={{ width: "100%" }}
									{...inputProps}
								/>
							</>
						)}
					</DatePicker>
					<img src={calendar} alt="" />
				</div>
			</div>
		</div>
	);
};

export default CurrentDate;
