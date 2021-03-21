import React from "react";
import { Redirect, Route } from "react-router";

function PrivateRoute({ children, ...rest }) {
	let auth;

	return (
		<Route
			{...rest}
			render={({ location }) =>
				auth ? (
					children
				) : (
					<Redirect
						to={{
							pathname: "/auth",
							state: { from: location },
						}}
					/>
				)
			}
		/>
	);
}

export default PrivateRoute;
