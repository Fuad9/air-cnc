import React from "react";
import GoogleMapReact from "google-map-react";
require("dotenv").config();

const Maps = () => {
	const geoLocation = {
		center: {
			lat: 23.8103,
			lng: 90.4125,
		},
		zoom: 11,
	};

	return (
		<>
			<GoogleMapReact
				bootstrapURLKeys={{
					key: `${process.env.REACT_APP_BASE_URL}`,
				}}
				center={geoLocation.center}
				defaultZoom={geoLocation.zoom}
			></GoogleMapReact>
		</>
	);
};

export default Maps;
