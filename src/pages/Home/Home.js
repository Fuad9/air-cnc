import React from "react";
import experiencesData from "../../Data/experiencesData";
import homesData from "../../Data/HomesData";
import StarRatingComponent from "react-star-rating-component";
//styles
import "./Home.scss";
import GuestCount from "../GuestCount/GuestCount";
import NavBar from "../../components/NavBar";

const Home = () => {
	return (
		<>
			<NavBar />
			<section className="container">
				<div className="split">
					<div className="">
						<GuestCount />
					</div>

					<div>
						<h2>Experiences</h2>
						<div className="d-flex">
							{experiencesData.map((dt) => (
								<div className="img-container">
									<div className="imga">
										<div className="">
											<img src={dt.imageUrl} alt="" />
										</div>
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
								</div>
							))}
						</div>

						<h2>Homes</h2>
						<div className="d-flex">
							{homesData.map((dt) => (
								<div className="imga-container">
									<div className="imga">
										<div className="">
											<img src={dt.imageUrl} alt="" />
										</div>
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
								</div>
							))}
						</div>
					</div>
				</div>
			</section>
		</>
	);
};

export default Home;
