import React from "react";
import { Link } from "react-router-dom";
//styles
import "./PlaceDetails.scss";
//images
import home from "../../images/photos/home.png";
import checkmark from "../../images/photos/checkmark-square-2.png";
import sparking from "../../images/photos/solid.png";
import men from "../../images/photos/single-01.png";
import building from "../../images/photos/photo-1560347876-aeef00ee58a1.png";
import room from "../../images/photos/photo-1522708323590-d24dbb6b0267.jpeg";
//components
import PricingCard from "../../components/PricingCard";
import NavBar from "../../components/NavBar";

const PlaceDetails = () => {
	return (
		<>
			<NavBar />
			<section className="container">
				<div className="d-flex w-100">
					<img className="w-50" src={building} alt="" />
					<img className="w-50" src={room} alt="" />
				</div>

				<div className="split">
					<div>
						<h1 className="mb-5">Light bright airy stylish apt & safe peaceful stay</h1>
						<h3>Dhaka, Bangladesh</h3>
						<h3>4 guests 2 bedrooms 2 beds 2 baths</h3>

						<h3 className="mt-5">
							<img src={home} alt="" /> Entire Home
						</h3>
						<h3>You’ll have the condominium to yourself.</h3>

						<h3 className="mt-5">
							<img src={checkmark} alt="" /> Self check-in
						</h3>
						<h3>You can check in with the doorman.</h3>

						<h3 className="mt-5">
							<img src={sparking} alt="" /> Sparkling clean
						</h3>
						<h3>10 recent guests said this place was sparkling clean.</h3>

						<h3 className="mt-5">
							<img src={men} alt="" /> Rowdra is a Superhost
						</h3>
						<h3>
							Superhosts are experienced, highly rated hosts who are committed to providing
							great stays for guests.
						</h3>
					</div>

					<div className="guest-count-card shadow">
						<h3>
							<span className="font-bold">$34/</span> night
						</h3>

						<PricingCard />

						<div className="reserve">
							<Link to="/tabs/houseRules">
								<button>Reserve</button>
							</Link>
						</div>
					</div>
				</div>
			</section>
		</>
	);
};

export default PlaceDetails;
