import {createStackNavigator} from "@react-navigation/stack";
import type {HomeStackParameterList} from "./types";
import React from "react";
import Dashboard from "../../screens/Dashboard";
import Ledger from "../../screens/Ledger";
import MainNavigation from "./Main";

const Stack = createStackNavigator<HomeStackParameterList>();

const HomeNavigation = () => {
	
	return (
		<Stack.Navigator>
			<Stack.Screen
				component={MainNavigation} name="dashboard"
				options={{ headerShown: false }}
			/>
			
			<Stack.Screen
				component={Ledger} name="ledger"
				options={{ headerShown: false }}
			/>
			
		</Stack.Navigator>
	);
}

export default HomeNavigation;
