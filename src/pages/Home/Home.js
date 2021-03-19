import React, { useState } from "react";
import hotelsData from "../../Data/HotelsData";
import StarRatingComponent from "react-star-rating-component";

//styles
import "./Home.scss";
import GuestCount from "../GuestCount/GuestCount";

const Home = () => {
	return (
		<>
			{
				<div className="row">
					<div className="col-md-4">
						<GuestCount />
					</div>
					<div className="col-md-8 d-flex">
						{hotelsData.map((dt) => (
							<div className="mr-1">
								<img src={dt.imageUrl} alt="" />
								<h6>{dt.name}</h6>
								<h5>{dt.title}</h5>
								<p>${dt.price} per person</p>
								<span className="d-flex">
									<StarRatingComponent
										name="rate1"
										starCount={5}
										starColor={"#40e37c"}
										value={5}
									/>
									<p>{dt.reviews}</p>
								</span>
							</div>
						))}
					</div>
				</div>
			}
		</>
	);
};

export default Home;
