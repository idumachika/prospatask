import React from "react";
import {StatusBar, Text, View} from "react-native";

const Virtual = (props: { route: any; }) => {
	
	return (
		<View>
			<StatusBar
				barStyle="dark-content"
				translucent
				animated
				backgroundColor={'transparent'}
			/>
			
			<View
				style={{
					height: '100%',
					width: '100%',
					backgroundColor: '#F7F9FC',
					justifyContent: 'center',
					alignItems: 'center',
				}}
			>
				<Text>
					Coming Soon!!!
				</Text>
			</View>
		</View>
	)
};

export default Virtual;
