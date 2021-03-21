import React from "react";
import { Link } from "react-router-dom";
//images
import childs from "../../images/photos/ic_child_friendly_48px.png";
import pets from "../../images/photos/ic_pets_48px.png";
import smoking from "../../images/photos/ic_smoking_rooms_48px.png";
import forbidden from "../../images/photos/forbidden.png";
import downArrow from "../../images/photos/arrow-ios-downward-outline-2.png";
//components
import PricingCard from "../../components/PricingCard";

const HouseRules = () => {
	return (
		<>
			<section className="container">
				<div className="split">
					<div>
						<h1>Review house rules</h1>
						<h3>3 nights in Dhaka</h3>
						<div className="d-flex justify-content-between">
							<div className="d-flex align-items-center">
								<p style={{ background: "#EAEAEA", padding: "0.5rem" }}>
									APR <br />
									13
								</p>
								<h4>
									Monday check-in <br />
									After 12:00 PM
								</h4>
							</div>
							<div className="d-flex align-items-center">
								<p style={{ background: "#EAEAEA", padding: "0.5rem" }}>
									APR <br />
									17
								</p>
								<h4>
									Thursday checkout <br />
									11:00 AM
								</h4>
							</div>
						</div>
						<h4 className="my-4">Self check-in with building staff</h4>
						<h3 style={{ borderTop: "1px solid #CACACA" }}>Things to keep in mind</h3>
						<h4 className="my-3">
							<img className="border p-3" src={childs} alt="" /> Suitable for children and
							infants
						</h4>
						<h4 className="my-3">
							<img className="border p-3" src={pets} alt="" /> Pets allowed
						</h4>
						<h4 className="my-3">
							<img className="border p-3" src={forbidden} alt="" /> No parties or events
						</h4>
						<h4 className="my-3">
							<img className="border p-3" src={smoking} alt="" /> Smoking allowed
						</h4>
						<h4 style={{ color: "#0377FF", cursor: "pointer" }}>
							Read more <img src={downArrow} alt="" />
						</h4>

						<Link to="/tabs/guestProfile">
							<button>Agree and continue</button>
						</Link>
					</div>

					<div>
						<PricingCard />
					</div>
				</div>
			</section>
		</>
	);
};

export default HouseRules;
