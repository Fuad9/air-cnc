import React, { useEffect, useState } from "react";
import StarRatingComponent from "react-star-rating-component";
import { Dropdown, Button } from "react-bootstrap";
//components
import Dates from "./Dates";
//utilities
import { getFromDatabase } from "../utilities/storageManager";

const PricingCard = () => {
	const [data, setData] = useState({});

	const totalGuests = data.adults + data.childs + data.babies;

	/* Retrieving guests data from the localStorage ================= */
	useEffect(() => {
		const getData = getFromDatabase();
		setData(getData);
	}, []);

	return (
		<>
			<div className="shadow p-3">
				<span className="d-flex">
					<StarRatingComponent name="rate1" starCount={1} starColor={"#40e37c"} value={1} />
					<p>
						<span className="font-bold">4.9</span> (20 reviews)
					</p>
				</span>

				<h6>Dates</h6>
				<Dates />

				<Dropdown className="dropdown-area mt-3">
					<h6>Guests</h6>
					<div>
						<Button variant="light">{totalGuests} Guests</Button>
						<Dropdown.Toggle split variant="light" id="dropdown-split-basic" />
					</div>

					<Dropdown.Menu>
						<Dropdown.Item className="guests-item">{data.adults} Adults</Dropdown.Item>
						<Dropdown.Item className="guests-item">{data.childs} Childs</Dropdown.Item>
						<Dropdown.Item className="guests-item">{data.babies} Babies</Dropdown.Item>
					</Dropdown.Menu>
				</Dropdown>

				<div className="pricing-area">
					<div className="d-flex justify-content-between align-items-center">
						<h6>$34 x 4 nights</h6>
						<h6>$136</h6>
					</div>
					<div className="d-flex justify-content-between align-items-center">
						<h6>Cleaning fee</h6>
						<h6>$10</h6>
					</div>
					<div className="d-flex justify-content-between align-items-center">
						<h6>Service fee</h6>
						<h6>$10</h6>
					</div>
					<div className="d-flex justify-content-between align-items-center">
						<h6>Total </h6>
						<h6>$156</h6>
					</div>
				</div>
			</div>
		</>
	);
};

export default PricingCard;
