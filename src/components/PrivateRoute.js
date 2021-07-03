import React from "react";
import { useSelector } from "react-redux";
import { Redirect, Route } from "react-router-dom";

function PrivateRoute({ children, ...rest }) {
	const users = useSelector((state) => state.users);

	return (
		<Route
			{...rest}
			render={({ location }) =>
				Object.keys(users).length === 0 ? (
					<Redirect
						to={{
							pathname: "/auth",
							state: { from: location },
						}}
					/>
				) : (
					children
				)
			}
		/>
	);
}

export default PrivateRoute;
