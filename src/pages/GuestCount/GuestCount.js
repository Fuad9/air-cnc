import React, { useState } from "react";
//utilities
import { addToDatabase } from "../../utilities/storageManager";
//components
import StartingDate from "../../components/StartingDate";
import EndingDate from "../../components/EndingDate";
//styles
import "./GuestCount.scss";
//images
import minus from "../../images/photos/minus-outline.png";
import plus from "../../images/photos/plus-outline.png";
import search from "../../images/photos/search-outline.png";
import { Link } from "react-router-dom";
import calendar from "../../images/photos/calendar-outline.png";

const GuestCount = () => {
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

	/* Saving user data in the localStorage ====================== */
	const handleAddGuests = (key, value) => {
		addToDatabase(key, value);
	};

	const handleAddChilds = (key, value) => {
		addToDatabase(key, value);
	};

	const handleAddBabies = (key, value) => {
		addToDatabase(key, value);
	};

	return (
		<>
			<h3>Where do you want to go</h3>
			<div className="search-area mt-5">
				<h4 className="text-uppercase">location</h4>
				<input
					type="text"
					className="shadow w-100 p-4"
					placeholder="Add city, landmark or address"
				/>
			</div>

			<div className="my-5">
				<div className="date-picker">
					<div className="shadow input-date">
						<StartingDate />
						<img src={calendar} alt="" />
					</div>
					<div className="shadow input-date">
						<EndingDate />
						<img src={calendar} alt="" />
					</div>
				</div>
			</div>

			<div className="guest-count shadow p-5">
				<h4>Guests</h4>
				<span className="d-flex">
					<h4>
						<span>{adultsCount}</span> Adults
					</h4>
					,
					<h4>
						<span>{childsCount}</span> Childs
					</h4>
					,
					<h4>
						<span>{babiesCount}</span> Babies
					</h4>
				</span>

				<div>
					<h4>Adults</h4>
					<div className="btn-action">
						<img onClick={DecreaseAdults} src={minus} alt="" />
						<span>{adultsCount}</span>
						<img onClick={IncrementAdults} src={plus} alt="" />
					</div>
				</div>

				<div>
					<h4>Childs</h4>
					<div className="btn-action">
						<img onClick={DecreaseChilds} src={minus} alt="" />
						<span>{childsCount}</span>
						<img onClick={IncrementChilds} src={plus} alt="" />
					</div>
				</div>

				<div>
					<h4>Babies</h4>
					<div className="btn-action">
						<img onClick={DecreaseBabies} src={minus} alt="" />
						<span>{babiesCount}</span>
						<img onClick={IncrementBabies} src={plus} alt="" />
					</div>
				</div>

				<div className="submit-btn">
					<Link to="/placeDetails">
						<button
							onClick={() => {
								handleAddGuests("adults", adultsCount);
								handleAddChilds("childs", childsCount);
								handleAddBabies("babies", babiesCount);
							}}
						>
							Apply
						</button>
					</Link>
				</div>
			</div>

			<Link to="/hotels">
				<button className="w-100">
					<img src={search} alt="" />
					Search
				</button>
			</Link>
		</>
	);
};

export default GuestCount;
