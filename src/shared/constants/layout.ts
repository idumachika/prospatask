import { Dimensions } from "react-native"

export const Layout = {
	window: {
		width: Dimensions.get("window").width,
		height: Dimensions.get("window").height
	},
	isSmallDevice: Dimensions.get("window").width < 375,
	tabBarHeight: 65
}