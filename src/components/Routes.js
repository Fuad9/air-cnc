import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Auth from "../pages/Auth/Auth";
import Home from "../pages/Home/Home";
import Hotels from "../pages/Hotels/Hotels";
import PlaceDetails from "../pages/PlaceDetails/PlaceDetails";
import Tabs from "./Tabs";

const Routes = () => {
	return (
		<Router>
			<Switch>
				<Route exact path="/" component={Home} />
				<Route path="/home" component={Home} />
				<Route path="/placeDetails" component={PlaceDetails} />
				<Route path="/hotels" component={Hotels} />
				<Route path="/tabs" component={Tabs} />
				<Route path="/auth" component={Auth} />
			</Switch>
		</Router>
	);
};

export default Routes;
