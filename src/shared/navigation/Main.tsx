import {createBottomTabNavigator} from "@react-navigation/bottom-tabs";
import {Image, TextStyle} from "react-native";
import type {MainStackParameterList} from "./types";
import {colors, fonts, images} from "../theme";
import Payments from "../../screens/Payment";
import Business from "../../screens/Business";
import Invoice from "../../screens/Invoice";
import Virtual from "../../screens/Virtual";
import HomeNavigation from "./Homepage";
import Dashboard from "../../screens/Dashboard";

const Tab = createBottomTabNavigator<MainStackParameterList>();

const TAB_STYLE: TextStyle = {
	fontFamily: fonts.BRFirmaMedium,
}

function MainNavigation() {
	
	return (
		<Tab.Navigator
			screenOptions={{
				headerShown: false,
				tabBarStyle: {
					elevation: 0,   // for Android
					shadowOffset: {
						width: 0, height: 0 // for iOS
					},
					borderTopWidth: 0,
					// backgroundColor: isDark ? colors.black : colors.white
				},
				tabBarIndicatorStyle: {
					backgroundColor: 'blue', // Change the background color of the indicator
					height: 3, // Change the height of the indicator
					width: 3, // Change the height of the indicator
				}
			}}
		>
			<Tab.Screen
				component={Dashboard}
				name="main"
				options={{
					tabBarLabel: 'Home',
					tabBarActiveTintColor: colors.primary,
					tabBarInactiveTintColor: colors.second,
					tabBarLabelStyle: TAB_STYLE,
					tabBarIcon: ({ focused }) => {
						return focused
							? <Image style={{ resizeMode: 'center' }} source={images.homeIcon } />
							: <Image source={images.homeIconDark } />
					},
					tabBarIndicatorStyle: {
						backgroundColor: 'blue', // Change the background color of the indicator
						height: 30, // Change the height of the indicator
						width: 3, // Change the height of the indicator
					}
				}}
			
			/>
			
			<Tab.Screen
				component={Payments}
				name="pay"
				options={{
					tabBarLabel: 'Payment',
					tabBarActiveTintColor: colors.primary,
					tabBarInactiveTintColor: colors.second,
					tabBarLabelStyle: TAB_STYLE,
					tabBarIcon: ({ focused }) => {
						return focused
							? <Image source={images.paymentsIcon } />
							: <Image source={images.paymentsIconDark } />
					},
				}}
			
			/>
			
			<Tab.Screen
				component={Business}
				name="send"
				options={{
					tabBarLabel: 'Business',
					tabBarActiveTintColor: colors.primary,
					tabBarInactiveTintColor: colors.second,
					tabBarLabelStyle: TAB_STYLE,
					tabBarIcon: ({ focused }) => {
						return focused
							? <Image source={images.businessIcon } />
							: <Image source={images.businessIconDark } />
					},
				}}
			
			/>
			
			<Tab.Screen
				component={Invoice}
				name="cards"
				options={{
					tabBarLabel: 'Invoice',
					tabBarActiveTintColor: colors.primary,
					tabBarInactiveTintColor: colors.second,
					tabBarLabelStyle: TAB_STYLE,
					tabBarIcon: ({ focused }) => {
						return focused
							? <Image source={images.invoiceIcon } />
							: <Image source={images.invoiceIconDark } />
					},
				}}
			
			/>
			
			<Tab.Screen
				component={Virtual}
				name="more"
				options={{
					tabBarLabel: 'Virtual',
					tabBarActiveTintColor: colors.primary,
					tabBarInactiveTintColor: colors.second,
					tabBarLabelStyle: TAB_STYLE,
					tabBarIcon: ({ focused }) => {
						return focused
							? <Image source={images.virtualIcon } />
							: <Image source={images.virtualIconDark } />
					},
				}}
			
			/>
		
		</Tab.Navigator>
	);
}

export default MainNavigation;
