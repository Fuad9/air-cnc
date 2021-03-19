import React from "react";
import firebase from "./firebase.config";

const Auth = () => {
	const setUpRecaptcha = () => {
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
			{/* <form onSubmit={onSignInSubmit}>
				<div id="recaptcha-container"></div>
				<input type="number" className="form-control" placeholder="Phone Number" />
			</form> */}
			<button onClick={setUpRecaptcha()}>Continue</button>
		</>
	);
};

export default Auth;
