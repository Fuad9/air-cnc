// import React from "react";
// import { Elements } from "@stripe/react-stripe-js";
// import { loadStripe } from "@stripe/stripe-js";
// import PaymentForm from "./PaymentForm";

// // Make sure to call `loadStripe` outside of a component’s render to avoid
// // recreating the `Stripe` object on every render.
// const stripePromise = loadStripe(
// 	"pk_test_51HZzG7ArBFgLFbtiRdd2xd1ftOBToblWfu8yNFw9qvtmJeqCp9HIilMWihuB29x3sV7w8HX0Oy0cFIgE0Z11N3eV00xAHj7241"
// );

// const ProcessPayment = ({ handlePayment }) => {
// 	return (
// 		<Elements stripe={stripePromise}>
// 			<PaymentForm handlePayment={handlePayment} />
// 		</Elements>
// 	);
// };

// export default ProcessPayment;
