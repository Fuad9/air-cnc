import React, { useState } from "react";
import { useQuery } from "react-query";
import firebase from "./firebase.config";
//styles
import "./Auth.scss";
import { LinearProgress } from "@material-ui/core";
import { Dropdown, SplitButton } from "react-bootstrap";

const Auth = () => {
	/*fetch countries data ====================== */
	const getCountriesData = async () =>
		await (await fetch("https://restcountries.eu/rest/v2/all")).json();

	const [countries, setCountries] = useState(null);
	const { data, isLoading, error } = useQuery("all", getCountriesData);

	if (isLoading) return <LinearProgress />;
	if (error) return <div>Something went wrong ...</div>;

	const handleCountryChange = (e) => {
		setCountries(e);
	};

	const onSignInSubmit = (e) => {
		e.preventDefault();

		let recaptcha = new firebase.auth.RecaptchaVerifier("recaptcha");
		let phoneNumber = "+8801517813053";

		firebase
			.auth()
			.signInWithPhoneNumber(phoneNumber, recaptcha)
			.then((confirmationResult) => {
				let code = prompt("enter OTP");
				if (code == null) return;

				confirmationResult
					.confirm(code)
					.then((result) => {
						console.log(result.user, "user");
						document.querySelector("label").textContent =
							result.user.phoneNumber + "Number verified";
					})
					.catch((error) => {
						console.log(error);
					});
			});
	};

	return (
		<>
			<section className="container">
				<div className="split auth">
					<div>
						<h3>Login</h3>

						<div className="mx-auto my-5 shadow w-50 p-3">
							<h6>Country/ Region</h6>
							<SplitButton
								key={"down"}
								id={`dropdown-button-drop-${"down"}`}
								drop={"down"}
								variant="primary"
								title={countries || "Select Your Coin"}
							>
								{data?.map((country) => (
									<Dropdown.Item
										onSelect={handleCountryChange}
										eventKey={country.name}
										key={country.name}
									>
										{country.name} - ( {country.currencies[0].code})
									</Dropdown.Item>
								))}
							</SplitButton>
						</div>

						<form onSubmit={onSignInSubmit}>
							<div id="recaptcha-container"></div>
							<input
								type="number"
								className="form-control w-50 m-auto p-3 shadow"
								placeholder="Phone Number"
							/>
							<h6 className="mt-5">
								We’ll call or text you to confirm your number. Standard message and data
								rates apply
							</h6>
							<button type="submit" className="w-50">
								Continue
							</button>
						</form>
					</div>
				</div>
			</section>
		</>
	);
};

export default Auth;
