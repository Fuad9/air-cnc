import React, { useState } from "react";
import "date-fns";
import Grid from "@material-ui/core/Grid";
import DateFnsUtils from "@date-io/date-fns";
import { MuiPickersUtilsProvider, KeyboardDatePicker } from "@material-ui/pickers";
import { addToDatabase, getFromDatabase, removeFromDatabase } from "../../utilities/storageManager";

//styles
import "./GuestCount.scss";

const GuestCount = () => {
	const [selectedDate, setSelectedDate] = useState(new Date("2014-08-18T21:11:54"));

	const [adultsCount, setAdultsCount] = useState(0);
	const [childsCount, setChildsCount] = useState(0);
	const [babiesCount, setBabiesCount] = useState(0);

	const IncrementAdults = () => {
		setAdultsCount(adultsCount + 1);
	};

	const IncrementChilds = () => {
		setChildsCount(childsCount + 1);
	};

	const IncrementBabies = () => {
		setBabiesCount(babiesCount + 1);
	};

	const DecreaseAdults = () => {
		setAdultsCount(adultsCount - 1);
	};

	const DecreaseChilds = () => {
		setChildsCount(childsCount - 1);
	};

	const DecreaseBabies = () => {
		setBabiesCount(babiesCount - 1);
	};

	const handleDateChange = (date) => {
		setSelectedDate(date);
	};

	// /* Reloading the page after clicking add or remove button ============================*/
	// const reloadPage = () => {
	// 	window.location.reload();
	// };

	/* Saving user data in the localStorage ====================== */
	const handleAddGuests = (key, value) => {
		addToDatabase(key, value);

		// reloadPage();
	};

	const handleAddChilds = (key, value) => {
		addToDatabase(key, value);

		// reloadPage();
	};

	const handleAddBabies = (key, value) => {
		addToDatabase(key, value);

		// reloadPage();
	};

	return (
		<>
			<div className="search-area">
				<span>location</span>
				<br />
				<input type="text" className="search-box" placeholder="Add city, landmark or address" />
			</div>

			<div className="d-flex">
				<MuiPickersUtilsProvider utils={DateFnsUtils}>
					<Grid container justify="space-around">
						<KeyboardDatePicker
							disableToolbar
							variant="inline"
							format="MM/dd/yyyy"
							margin="normal"
							id="date-picker-inline"
							label="Arrival"
							value={selectedDate}
							onChange={handleDateChange}
							KeyboardButtonProps={{
								"aria-label": "change date",
							}}
						/>
					</Grid>
				</MuiPickersUtilsProvider>
				<MuiPickersUtilsProvider utils={DateFnsUtils}>
					<Grid container justify="space-around">
						<KeyboardDatePicker
							disableToolbar
							variant="inline"
							format="MM/dd/yyyy"
							margin="normal"
							id="date-picker-inline"
							label="Departure"
							value={selectedDate}
							onChange={handleDateChange}
							KeyboardButtonProps={{
								"aria-label": "change date",
							}}
						/>
					</Grid>
				</MuiPickersUtilsProvider>
			</div>

			<div className="guest-count">
				<div>
					<p>Guests</p>
					<div className="d-flex">
						<p>
							<span>{adultsCount}</span> Adults
						</p>
						,
						<p>
							<span>{childsCount}</span> Childs
						</p>
						,
						<p>
							<span>{babiesCount}</span> Babies
						</p>
					</div>
				</div>

				<div>
					<p>Adults</p>
					<div className="btn-action">
						<button className="decrement-btn" onClick={DecreaseAdults}>
							-
						</button>
						<span>{adultsCount}</span>
						<button className="increment-btn" onClick={IncrementAdults}>
							+
						</button>
					</div>
				</div>
				<div>
					<p>Childs</p>
					<div className="btn-action">
						<button className="decrement-btn" onClick={DecreaseChilds}>
							-
						</button>
						<span>{childsCount}</span>
						<button className="increment-btn" onClick={IncrementChilds}>
							+
						</button>
					</div>
				</div>
				<div>
					<p>Babies</p>
					<div className="btn-action">
						<button className="decrement-btn" onClick={DecreaseBabies}>
							-
						</button>
						<span>{babiesCount}</span>
						<button className="increment-btn" onClick={IncrementBabies}>
							+
						</button>
					</div>
				</div>
			</div>
			<div className="submit-btn">
				<button
					onClick={() => {
						handleAddGuests("adults", adultsCount);
						handleAddChilds("childs", childsCount);
						handleAddBabies("babies", babiesCount);
					}}
				>
					Apply
				</button>
			</div>
		</>
	);
};

export default GuestCount;
