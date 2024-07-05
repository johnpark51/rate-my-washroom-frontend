import { useState } from "react";
import "./MapComponent.scss";
import {
	APIProvider,
	Map
} from "@vis.gl/react-google-maps";
import Marker from "../Marker/Marker";

export default function MapComponent({washrooms, zoom}) {
	const markerData = washrooms.map((washroom) => {
		let latFloat = parseFloat(washroom.lat)
		let lngFloat = parseFloat(washroom.lng)
		return {
			address: washroom.address,
			lat: latFloat,
			lng: lngFloat,
		};
	});

	const torontoPosition = { lat: 43.6532, lng: -79.3832 };

	if (!washrooms) {
		return <p>Loading...</p>
	}

	return (
		<APIProvider apiKey={"AIzaSyBFDj6opA7KGa4RfLButOzAcaqbCqJ1JmA"}>
			<div className="map-div">
				<Map defaultZoom={zoom} defaultCenter={torontoPosition} mapId={"8e6688f3b9182873"}>
				{markerData.map((position) => {
					return <Marker position={position}/>
				})}
				</Map>
			</div>
		</APIProvider>
	);
}
