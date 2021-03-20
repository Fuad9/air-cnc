import React from "react";
import PricingCard from "../../components/PricingCard";
import men from "../../images/photos/asset-3.png";

const GuestProfile = () => {
	return (
		<>
			<section className="container">
				<div className="split">
					<div>
						<h3 className="my-4">Traveling for work?</h3>
						<div className="d-flex justify-content-between align-items-center">
							<span>
								<h4>Say hello to your host</h4>
								<h4>Let Rowdra know a little about yourself and why you’re coming.</h4>
							</span>
							<span>
								<img src={men} alt="" />
								<h4>Rowdra</h4>
							</span>
						</div>
						<textarea className="mt-4" name="" id="" cols="60" rows="10"></textarea> <br />
						<button>Continue</button>
					</div>

					<div>
						<PricingCard />
					</div>
				</div>
			</section>
		</>
	);
};

export default GuestProfile;
