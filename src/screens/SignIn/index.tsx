import React from "react";
import {useNavigation} from "@react-navigation/native";
import {
	Image,
	ImageBackground,
	ImageStyle,
	StatusBar,
	Text,
	TextStyle,
	TouchableOpacity,
	View,
	ViewStyle
} from "react-native";
import {fonts, images} from "../../shared/theme";
import {Layout} from "../../shared/constants/layout";
import * as Animatable from 'react-native-animatable';

const IMAGE_BACKGROUND: ImageStyle = {
	height: Layout.window.height / 2.5,
	width: '100%',
	resizeMode: 'stretch',
}

const IMAGE_BORDER: ImageStyle = {
	borderBottomRightRadius: 100,
	borderBottomLeftRadius: 20,
}

const LOGO: ImageStyle = {
	resizeMode: 'contain'
}

const PHONE_VIEW: ViewStyle = {
	justifyContent: 'flex-start',
	marginRight: 80
}

const PHONE_IMAGE: ImageStyle = {
	height: Layout.window.height / 3,
	width: '100%',
	resizeMode: 'contain',
	top: Layout.window.height / 19,
}

const CHECK_MARK: ImageStyle = {
	height: 20,
	width: 20,
	resizeMode: 'contain'
}

const ROW: ViewStyle = {
	marginTop: 20,
	flexDirection: 'row',
	width: '60%',
}

const TOP_VIEW: ViewStyle = {
	marginTop: 40,
	marginLeft: 20
}

const TOP_VIEW_ROW: ViewStyle = {
	flexDirection: 'row',
	justifyContent: 'space-between',
	alignItems: 'center',
	marginRight: 20
}

const TEXT_BASE_VIEW: ViewStyle = {
	marginVertical: Layout.window.height / 10,
	width:  '100%',
	// margin: 20,
	justifyContent: 'center',
	alignItems: 'center',
}

const TEXT_VIEW: ViewStyle = {
	marginLeft: 20
}

const TEXT: TextStyle = {
	fontFamily: fonts.BRFirmaBold,
	fontSize: 15
}

const BUTTON_VIEW: ViewStyle = {
	backgroundColor: '#23064C',
	height: 50,
	width: '90%',
	borderRadius: 8
}

const BUTTON: ViewStyle = {
	borderRadius: 8,
	justifyContent: 'center',
	alignItems: 'center',
}

const BUTTON_TEXT: TextStyle = {
	fontFamily: fonts.BRFirmaBold,
	fontSize: 15,
	marginLeft: 15,
	color: '#fff'
}

const SignIn = () => {
	const navigation = useNavigation()
	
	const navigateToMain = () => {
		// @ts-ignore
		navigation.navigate('dashboard')
	}
	
	return (
		<View
			style={{
				backgroundColor: '#fff'
			}}
		>
			<ImageBackground
				source={images.prospaBackground}
				style={IMAGE_BACKGROUND}
				imageStyle={IMAGE_BORDER}
			>
				<StatusBar
					barStyle="light-content"
					translucent
					animated
					backgroundColor={'transparent'}
				/>
				
				<Animatable.View
					animation="slideInDown"
					direction="alternate"
					delay={3000}
					style={TOP_VIEW}
				>
					<View
						style={TOP_VIEW_ROW}
					>
						<Image
							source={images.logo}
							style={LOGO}
						/>
						
						<TouchableOpacity
							onPress={navigateToMain}
						>
							<Text style={BUTTON_TEXT}>
								Sign in
							</Text>
						</TouchableOpacity>
					</View>
				</Animatable.View>
				
				<Animatable.View
					animation="lightSpeedIn"
					direction="alternate"
					delay={3000}
					style={PHONE_VIEW}
				>
					<Image
						source={images.phoneImage}
						style={PHONE_IMAGE}
					/>
				</Animatable.View>
			</ImageBackground>
			
			<View
				style={TEXT_BASE_VIEW}
			>
				<Animatable.View
					animation="fadeIn"
					direction="alternate"
					delay={5000}
					style={ROW}
				>
					<Image
						source={images.checkMark}
						style={CHECK_MARK}
					/>
					
					<View
						style={TEXT_VIEW}
					>
						<Text style={TEXT}>
							Business banking account
						</Text>
					</View>
				</Animatable.View>
				
				<Animatable.View
					animation="fadeIn"
					direction="alternate"
					delay={6000}
					style={ROW}
				>
					<Image
						source={images.checkMark}
						style={CHECK_MARK}
					/>
					
					<View
						style={TEXT_VIEW}
					>
						<Text style={TEXT}>
							Up to ₦1M in loans
						</Text>
					</View>
				</Animatable.View>
				
				<Animatable.View
					animation="fadeIn"
					direction="alternate"
					delay={7000}
					style={ROW}
				>
					<Image
						source={images.checkMark}
						style={CHECK_MARK}
					/>
					
					<View
						style={TEXT_VIEW}
					>
						<Text style={TEXT}>
							Send invoices
						</Text>
					</View>
				</Animatable.View>
				
				<Animatable.View
					animation="fadeIn"
					direction="alternate"
					delay={8000}
					style={ROW}
				>
					<Image
						source={images.checkMark}
						style={CHECK_MARK}
					/>
					
					<View
						style={TEXT_VIEW}
					>
						<Text style={TEXT}>
							POS for offline sales and more
						</Text>
					</View>
				</Animatable.View>
				
				<Animatable.View
					animation="fadeInDown"
					direction="alternate"
					delay={9000}
					style={[BUTTON_VIEW, {
						marginTop: Layout.window.height / 25,
					}]}
				>
					<TouchableOpacity
						style={BUTTON}
						onPress={navigateToMain}
					>
						<View
							style={[BUTTON, {
								width: '100%',
								height: '100%',
								flexDirection: 'row'
							}]}
						>
							<Image
								source={images.googleIcon}
								style={CHECK_MARK}
							/>
							
							<Text style={BUTTON_TEXT}>
								Sign up with Google
							</Text>
						</View>
					</TouchableOpacity>
				</Animatable.View>
				
				<Animatable.View
					animation="fadeInUp"
					direction="alternate"
					delay={9000}
					style={[BUTTON_VIEW, {
						backgroundColor: '#141414',
						marginTop: 15,
					}]}
				>
					<TouchableOpacity
						style={BUTTON}
						onPress={navigateToMain}
					>
						<View
							style={[BUTTON, {
								width: '100%',
								height: '100%',
								flexDirection: 'row'
							}]}
						>
							<Image
								source={images.appleIcon}
								style={CHECK_MARK}
							/>
							
							<Text style={BUTTON_TEXT}>
								Sign up with Google
							</Text>
						</View>
					</TouchableOpacity>
				</Animatable.View>
				
				<Animatable.View
					animation="fadeInLeftBig"
					direction="alternate"
					delay={9000}
					style={[BUTTON_VIEW, {
						backgroundColor: 'transparent',
						marginTop: 15,
					}]}
				>
					<TouchableOpacity
						style={BUTTON}
						onPress={navigateToMain}
					>
						<View
							style={[BUTTON, {
								width: '100%',
								height: '100%',
								flexDirection: 'row'
							}]}
						>
							<Text style={[BUTTON_TEXT, { color: '#04093F', fontFamily: fonts.BRFirmaBold }]}>
								Continue with email
							</Text>
						</View>
					</TouchableOpacity>
				</Animatable.View>
			</View>
		</View>
	)
};

export default SignIn;
