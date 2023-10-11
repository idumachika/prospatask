import {NavigationContainer} from "@react-navigation/native";
import {Text} from "react-native";
import RootNavigation from "./RootNavigation";

function Navigation() {
	
	return (
		<NavigationContainer
			fallback={<Text></Text>}>
			<RootNavigation />
		</NavigationContainer>
	);
}

export default Navigation;
