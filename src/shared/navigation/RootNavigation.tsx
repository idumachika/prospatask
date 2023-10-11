import {createStackNavigator} from "@react-navigation/stack";
import type {RootStackParameterList} from "./types";
import React from "react";
import SignIn from "../../screens/SignIn";
import MainNavigation from "./Main";
import HomeNavigation from "./Homepage";

const Stack = createStackNavigator<RootStackParameterList>();

const RootNavigation = () => {
	
	return (
		<Stack.Navigator>
			<Stack.Screen
				component={SignIn} name="signIn"
				options={{ headerShown: false }}
			/>
			
			<Stack.Screen
				options={{
					headerShown: false
				}}
				component={HomeNavigation}
				name="dashboard"
			/>
		</Stack.Navigator>
	);
}

export default RootNavigation;
