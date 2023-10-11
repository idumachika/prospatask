import React, {useState} from "react";
import {
	Image,
	ImageBackground,
	ScrollView,
	StatusBar,
	Text,
	TextStyle,
	TouchableOpacity,
	View,
	ViewStyle
} from "react-native";
import {fonts, images} from "../../shared/theme";
import * as Animatable from "react-native-animatable";
import {useNavigation} from "@react-navigation/native";

const ROOT: ViewStyle = {
	paddingTop: 20,
	// height: Layout.window.height,
	width: '100%',
	backgroundColor: '#F7F9FC',
}

const TOP_VIEW: ViewStyle = {
	flexDirection: 'row',
	justifyContent: 'space-between'
}

const LEFT_TOP_VIEW: ViewStyle = {
	flexDirection: 'row',
	justifyContent: 'space-between',
	alignItems: 'center'
}

const ROOT_VIEW: ViewStyle = {
	marginVertical: 40,
	paddingHorizontal: 20
}

const PROFILE_VIEW: ViewStyle = {
	marginHorizontal: 20
}

const TITLE: TextStyle = {
	fontWeight: '700'
}

const SUPPORT_VIEW: ViewStyle = {
	backgroundColor: '#FEC9DB',
	paddingHorizontal: 7,
	borderRadius: 20,
	alignItems: 'center',
	justifyContent: 'center',
}

const SUPPORT: ViewStyle = {
	flexDirection: 'row',
	alignItems: 'center',
	justifyContent: 'center',
	width: 80,
	padding: 5
}

const BOX_SHADOW: ViewStyle = {
	marginLeft: 10,
	justifyContent: 'center',
	alignItems: 'center',
	shadowOpacity: 0.1,
	shadowOffset: { width: 0, height: 2 },
	shadowRadius: 2,
	borderRadius: 20,
	paddingVertical: 10,
	paddingHorizontal: 25,
	marginVertical: 10,
	elevation: 5,
	shadowColor: '#222B45',
	backgroundColor: 'white',
}

const SUPPORT_TEXT: TextStyle = {
	fontWeight: '400',
	color: '#FA4A84'
}

const BUTTON: ViewStyle = {
	borderRadius: 8,
	justifyContent: 'center',
	alignItems: 'center',
}

const BUTTON_TEXT: TextStyle = {
	fontFamily: fonts.BRFirmaBold,
	fontSize: 15,
	color: '#fff',
	fontWeight: '600',
}

const BUTTON_VIEW: ViewStyle = {
	backgroundColor: '#23064C',
	height: 50,
	width: '45%',
	borderRadius: 8
}

const Ledger = () => {
	const navigation = useNavigation()
	const [currentIndex, setCurrentIndex] = useState(0)
	
	const data = [
		{
			id: 0,
			text: 'Accounts'
		},
		{
			id: 1,
			text: 'Loans'
		},
		{
			id: 2,
			text: 'Cards'
		},
		{
			id: 3,
			text: 'Savings'
		},
		{
			id: 4,
			text: 'Cash'
		},
	];
	
	const renderItem = ({ item }) => (
		<TouchableOpacity
			onPress={() => setCurrentIndex(item.id)}
			style={[BOX_SHADOW, {
				elevation: (item.id === currentIndex)  ? 0 : 0,
				backgroundColor: (item.id === currentIndex)  ? 'white' : 'transparent'
			}]}
		>
			<Text style={{ color: '#222B45' }}>{item.text}</Text>
		</TouchableOpacity>
	);
	
	return (
		<ScrollView style={ROOT}>
			<StatusBar
				barStyle="dark-content"
				animated
				backgroundColor={'#ffffff'}
				translucent
			/>
			
			<View
				style={{
					marginVertical: 10,
					backgroundColor: 'white',
					borderBottomLeftRadius: 35,
					borderBottomRightRadius: 35,
					paddingBottom: 20
				}}
			>
			
				<View
					style={{
						margin: 20,
						flexDirection: 'row',
						justifyContent: 'space-between',
						alignItems: 'center'
					}}
				>
					<TouchableOpacity
						style={{
							height: 50,
							width: 50,
							justifyContent: 'center'
						}}
						onPress={() => navigation.goBack()}
					>
						<Image source={images.back} />
					</TouchableOpacity>
					
					<View
						style={{
							alignItems: 'center'
						}}
					>
						<Text
							style={{
								fontWeight: '600',
								fontSize: 18,
								color: '#04093F'
							}}
						>
							Current Account
						</Text>
						
						<Text
							style={{
								fontWeight: '600',
								fontSize: 12,
								color: '#8397AB'
							}}
						>
							7274640071
						</Text>
					</View>
					
					<Text
						style={{
							fontWeight: '600',
							fontSize: 12,
							color: '#FA4A84'
						}}
					>
						Options
					</Text>
				</View>
				
				<View
					style={{
						alignItems: 'center'
					}}
				>
					<View
						style={{
							alignItems: 'center'
						}}
					>
						<View
							style={{
								flexDirection: 'row',
								alignItems: 'center',
								justifyContent: 'center'
							}}
						>
							<Text
								style={{
									fontWeight: '600',
									fontSize: 18,
									color: '#04093F'
								}}
							>
								₦5,000,000.00
							</Text>
							
							<View
								style={{
									marginLeft: 5
								}}
							>
								<Image source={images.info} />
							</View>
						</View>
						
						<Text
							style={{
								fontWeight: '400',
								fontSize: 12,
								color: '#04093F'
							}}
						>
							Ledger balance
						</Text>
					</View>
					
					<View
						style={{
							alignItems: 'center',
							marginTop: 20
						}}
					>
						<Text
							style={{
								fontWeight: '600',
								fontSize: 14,
								color: '#CDD5DD'
							}}
						>
							₦750,798.00
						</Text>
						
						<Text
							style={{
								fontWeight: '400',
								fontSize: 12,
								color: '#04093F'
							}}
						>
							Available balance
						</Text>
					</View>
					
					<View
						style={{
							marginVertical: 30
						}}
					>
						<Image source={images.indicators} />
					</View>
					
					<View
						style={{
							marginTop: 10,
							flexDirection: 'row',
							justifyContent: 'space-between',
							alignItems: 'center',
							width: '50%'
						}}
					>
						
						<View
							style={{
								alignItems: 'center'
							}}
						>
							<Image source={images.transferMenu} />
							
							<View
								style={{
									marginTop: 5
								}}
							>
								<Text
									style={{
										fontWeight: '500',
										fontSize: 10,
										color: '#8397AB'
									}}
								>
									Transfer
								</Text>
							</View>
						</View>
						
						<View
							style={{
								alignItems: 'center'
							}}
						>
							<Image source={images.bookMenu} />
							
							<View
								style={{
									marginTop: 5
								}}
							>
								<Text
									style={{
										fontWeight: '500',
										fontSize: 10,
										color: '#8397AB'
									}}
								>
									Bookkeeper
								</Text>
							</View>
						</View>
						
						<View
							style={{
								alignItems: 'center'
							}}
						>
							<Image source={images.upgradeMenu} />
							
							<View
								style={{
									marginTop: 5
								}}
							>
								<Text
									style={{
										fontWeight: '500',
										fontSize: 10,
										color: '#8397AB'
									}}
								>
									Upgrade
								</Text>
							</View>
						</View>
						
					</View>
					
					
				</View>
				
				<View
					style={{
						marginTop: 40,
						marginHorizontal: 20,
						marginBottom: 20
					}}
				>
					<View
						style={{
							flexDirection: 'row',
							justifyContent: 'space-between'
						}}
					>
						<Text
							style={{
								fontWeight: '500',
								fontSize: 10,
								color: '#04093F'
							}}
						>
							Money in
						</Text>
						
						<Text
							style={{
								fontWeight: '500',
								fontSize: 10,
								color: '#04093F'
							}}
						>
							₦20,000
						</Text>
					</View>
					
					<ImageBackground
						source={images.divider}
						style={{
							height: 6,
							width: '100%',
							marginVertical: 10,
						}}
					>
						<Animatable.View
							animation={'slideInLeft'}
						>
							<Image source={images.moneyIn} />
						</Animatable.View>
					</ImageBackground>
					
					<View
						style={{
							flexDirection: 'row',
							justifyContent: 'space-between',
							marginTop: 10
						}}
					>
						<Text
							style={{
								fontWeight: '500',
								fontSize: 10,
								color: '#04093F'
							}}
						>
							Money in
						</Text>
						
						<Text
							style={{
								fontWeight: '500',
								fontSize: 10,
								color: '#04093F'
							}}
						>
							₦20,000
						</Text>
					</View>
					
					<ImageBackground
						source={images.divider}
						style={{
							height: 6,
							width: '100%',
							marginVertical: 10,
						}}
					>
						<Animatable.View
							animation={'slideInLeft'}
						>
							<Image source={images.moneyOut} />
						</Animatable.View>
					</ImageBackground>
					
					<View
						style={{
							flexDirection: 'row',
							justifyContent: 'space-between',
							marginTop: 10
						}}
					>
						<Text
							style={{
								fontWeight: '500',
								fontSize: 10,
								color: '#04093F'
							}}
						>
							Wallet balance
						</Text>
						
						<Text
							style={{
								fontWeight: '500',
								fontSize: 10,
								color: '#04093F'
							}}
						>
							₦20,000
						</Text>
					</View>
					
					<ImageBackground
						source={images.divider}
						style={{
							height: 6,
							width: '100%',
							marginVertical: 10,
						}}
					>
						<Animatable.View
							animation={'slideInLeft'}
						>
							<Image source={images.walletBalance} />
						</Animatable.View>
					</ImageBackground>
					
				</View>
				
			</View>
			
			<View
				style={{
					marginTop: 30,
					marginBottom: 70,
					marginHorizontal: 20,
				}}
			>
				<Text
					style={{
						fontWeight: '500',
						fontSize: 15,
						color: '#82849F'
					}}
				>
					11th December 2021
				</Text>
				
				<View
					style={{
						flexDirection: 'row',
						justifyContent: 'space-between',
						marginTop: 20
					}}
				>
					<View
						style={{
							flexDirection: 'row'
						}}
					>
						<Image source={images.dots} />
						
						<View
							style={{
								marginLeft: 10
							}}
						>
							<Text
								style={{
									fontWeight: '600',
									fontSize: 12,
									color: '#04093F'
								}}
							>
								Transfer from Prospa
							</Text>
							
							<Text
								style={{
									fontWeight: '500',
									fontSize: 10,
									color: '#82849F',
									marginTop: 5
								}}
							>
								8:40 AM
							</Text>
						</View>
					</View>
					
					<Text
						style={{
							fontWeight: '600',
							fontSize: 10,
							color: '#82849F'
						}}
					>
						₦200,000.00
					</Text>
				</View>
				
				
				<Text
					style={{
						fontWeight: '500',
						fontSize: 15,
						color: '#82849F',
						marginTop: 20
					}}
				>
					10th December 2021
				</Text>
				
				<View
					style={{
						flexDirection: 'row',
						justifyContent: 'space-between',
						marginTop: 20
					}}
				>
					<View
						style={{
							flexDirection: 'row'
						}}
					>
						<Image source={images.dots} />
						
						<View
							style={{
								marginLeft: 10
							}}
						>
							<Text
								style={{
									fontWeight: '600',
									fontSize: 12,
									color: '#04093F',
								}}
							>
								Transfer from Prospa
							</Text>
							
							<Text
								style={{
									fontWeight: '500',
									fontSize: 10,
									color: '#82849F',
									marginTop: 5
								}}
							>
								8:40 AM
							</Text>
						</View>
					</View>
					
					<Text
						style={{
							fontWeight: '600',
							fontSize: 10,
							color: '#82849F'
						}}
					>
						₦200,000.00
					</Text>
				</View>
				
				<View
					style={{
						flexDirection: 'row',
						justifyContent: 'space-between',
						marginTop: 20
					}}
				>
					<View
						style={{
							flexDirection: 'row'
						}}
					>
						<Image source={images.dots} />
						
						<View
							style={{
								marginLeft: 10
							}}
						>
							<Text
								style={{
									fontWeight: '600',
									fontSize: 12,
									color: '#04093F',
								}}
							>
								Mobile Recharge | +234806...
							</Text>
							
							<Text
								style={{
									fontWeight: '500',
									fontSize: 10,
									color: '#82849F',
									marginTop: 5
								}}
							>
								8:40 AM
							</Text>
						</View>
					</View>
					
					<Text
						style={{
							fontWeight: '600',
							fontSize: 10,
							color: '#82849F'
						}}
					>
						₦200,000.00
					</Text>
				</View>
			</View>
		
		</ScrollView>
	)
};

export default Ledger;
