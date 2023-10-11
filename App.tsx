import React, {useEffect, useState} from "react";
import {Asset} from "expo-asset";
import * as Font from "expo-font";
import Navigation from "./src/shared/navigation";

function App() {
	const [isLoadingComplete, setLoadingComplete] = useState(false)
	
	useEffect(() => {
		loadResourcesAsync();
	})
	
	const loadResourcesAsync = async () => {
		await Promise.all([
			Asset.loadAsync([
				require("./src/assets/images/PhoneImage.png"),
				require("./src/assets/images/ProspaBackground.png"),
			]),
			Font.loadAsync({
				"BR-Firma-Medium": require("./src/assets/fonts/BRFirmaMedium.otf"),
				"BR-Firma-SemiBold": require("./src/assets/fonts/BRFirmaBold.otf"),
			}),
		]);
		setLoadingComplete(true)
	};
	
	if (!isLoadingComplete) return null;
	
	return (
		<Navigation />
	)
}

export default App
