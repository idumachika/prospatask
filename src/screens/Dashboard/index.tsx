import React, {useState} from "react";
import {
	Image,
	ScrollView,
	StatusBar,
	Text,
	TextStyle,
	TouchableHighlight,
	View,
	ViewStyle,
	FlatList,
	Platform, TouchableOpacity, ImageBackground
} from "react-native";
import {colors, fonts, images} from "../../shared/theme";
import * as Animatable from "react-native-animatable";
import {Layout} from "../../shared/constants/layout";
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

const Dashboard = () => {
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
				elevation: item.id === currentIndex ? 5 : 0,
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
				
				<View style={ROOT_VIEW}>
					<View
						style={TOP_VIEW}
					>
						<TouchableHighlight>
							<View
								style={LEFT_TOP_VIEW}
							>
								<Image source={images.profilePic} />
								
								<View
									style={PROFILE_VIEW}
								>
									<Text style={TITLE}>
										DailyBread Ltd
									</Text>
								</View>
								
								<Image source={images.dropDown} />
							</View>
						</TouchableHighlight>
						
						<TouchableHighlight onPress={() => navigation.navigate('ledger')} style={SUPPORT_VIEW}>
							<View
								style={SUPPORT}
							>
								<Text style={SUPPORT_TEXT}>
									Support
								</Text>
								
								<View
									style={{
										marginLeft: 5
									}}
								>
									<Image
										source={images.information}
									/>
								</View>
							</View>
						</TouchableHighlight>
					</View>
				</View>
				
				<FlatList
					showsHorizontalScrollIndicator={false}
					data={data}
					keyExtractor={(item) => item.id}
					renderItem={renderItem}
					horizontal
					ItemSeparatorComponent={() => <View style={{ width: 10, backgroundColor: colors.white }} />}
					contentContainerStyle={{
						paddingLeft: 10,
						paddingRight: 20,
					}}
				/>
				
				<View
					style={{
						marginTop: 30,
						marginHorizontal: 20,
						flexDirection: 'row',
						justifyContent: 'space-between'
					}}
				>
					<View>
						<Text style={[TITLE, {
							fontSize: 15
						}]}>
							₦22,250,000<Text style={[TITLE, {
							fontSize: 12,
							color: '#8397AB'
						}]}>
							.98
						</Text>
						</Text>
						
						<View
							style={{
								marginTop: 5
							}}
						>
							<Text style={[TITLE, {
								fontSize: 12,
								fontWeight: '400',
								color: '#8397AB'
							}]}>
								Available balance
							</Text>
						</View>
					</View>
					
					<TouchableOpacity
						onPress={() => navigation.navigate('ledger')}
					>
						<Text style={[SUPPORT_TEXT, {
							fontSize: 12,
							fontWeight: '500'
						}]}>
							View accounts
						</Text>
					</TouchableOpacity>
				</View>
				
				<View
					style={{
						marginTop: 30,
						marginHorizontal: 20,
						flexDirection: 'row',
						justifyContent: 'space-between'
					}}
				>
					
					<View
						animation="fadeInUp"
						direction="alternate"
						delay={9000}
						style={[BUTTON_VIEW, {
							backgroundColor: '#FEC9DB',
							marginTop: 15,
						}]}
					>
						<TouchableOpacity
							style={BUTTON}
						>
							<View
								style={[BUTTON, {
									width: '100%',
									height: '100%',
									flexDirection: 'row'
								}]}
							>
								
								<Text style={[BUTTON_TEXT, {
									color: '#FA4A84'
								}]}>
									Transfer funds
								</Text>
							</View>
						</TouchableOpacity>
					</View>
					
					<View
						animation="fadeInUp"
						direction="alternate"
						delay={9000}
						style={[BUTTON_VIEW, {
							backgroundColor: '#F7F9FC',
							marginTop: 15,
						}]}
					>
						<TouchableOpacity
							style={BUTTON}
						>
							<View
								style={[BUTTON, {
									width: '100%',
									height: '100%',
									flexDirection: 'row'
								}]}
							>
								
								<Text style={[BUTTON_TEXT, {
									color: '#1C1335'
								}]}>
									Share account
								</Text>
							</View>
						</TouchableOpacity>
					</View>
				
				</View>
				
				<View
					style={{
						marginTop: 30,
						marginHorizontal: 20,
						flexDirection: 'row',
						justifyContent: 'space-between'
					}}
				>
					<Text style={[BUTTON_TEXT, {
						color: '#1C1335'
					}]}>
						Transactions
					</Text>
					
					<Text style={[SUPPORT_TEXT, {
						fontSize: 12,
						fontWeight: '500'
					}]}>
						View all
					</Text>
				</View>
				
				<View
					style={{
						marginTop: 30,
						marginBottom: 40,
						marginHorizontal: 20,
						flexDirection: 'row',
						backgroundColor: '#F7F9FC',
						padding: 20,
						justifyContent: 'space-between',
						alignItems: 'center',
						borderRadius: 8
					}}
				>
					<View
						style={{
							flexDirection: 'row'
						}}
					>
						<View
							style={{
								marginLeft: 5
							}}
						>
							<Image
								source={images.transfer}
							/>
						</View>
						
						<View
							style={{
								marginLeft: 20
							}}
						>
							<Text style={[BUTTON_TEXT, {
								color: '#1C1335',
								fontWeight: 'bold'
							}]}>
								Transactions
							</Text>
							
							<View
								style={{
									marginTop: 3
								}}
							>
								<Text style={[TITLE, {
									fontSize: 12,
									fontWeight: '400',
									color: '#8F9BB3'
								}]}>
									Today, 8:40AM
								</Text>
							</View>
						</View>
					</View>
					
					<Text style={[BUTTON_TEXT, {
						color: '#1C1335',
						fontWeight: '400',
						fontSize: 12
					}]}>
						- 1.33 USD
					</Text>
				</View>
				
			</View>
			
			
			<View
				style={{
					marginTop: 30,
					marginHorizontal: 20,
					flexDirection: 'row',
					justifyContent: 'space-between'
				}}
			>
				<Text style={[BUTTON_TEXT, {
					color: '#1C1335',
					fontWeight: '700'
				}]}>
					Your points
				</Text>
				
				<Text style={[SUPPORT_TEXT, {
					fontSize: 12,
					fontWeight: '500'
				}]}>
					View all
				</Text>
			</View>
			
			<View
				style={{
					marginTop: 15,
					marginHorizontal: 20,
					flexDirection: 'row',
					backgroundColor: '#fff',
					padding: 20,
					justifyContent: 'space-between',
					borderRadius: 8
				}}
			>
				<View
					style={{
						flexDirection: 'row'
					}}
				>
					<Image
						source={images.cup}
					/>
					
					<View
						style={{
							marginLeft: 20
						}}
					>
						<Text style={[BUTTON_TEXT, {
							color: '#1C1335',
							fontWeight: 'bold'
						}]}>
							625,856
						</Text>
						
						<View
							style={{
								marginTop: 3
							}}
						>
							<Text style={[TITLE, {
								fontSize: 12,
								fontWeight: '400',
								color: '#8F9BB3'
							}]}>
								Points Balance
							</Text>
						</View>
					</View>
				</View>
				
				<View>
					<Image
						source={images.l2}
					/>
				</View>
			</View>
			
			<View
				style={{
					marginTop: 30,
					marginHorizontal: 20,
					flexDirection: 'row',
					justifyContent: 'space-between'
				}}
			>
				<Text style={[BUTTON_TEXT, {
					color: '#1C1335',
					fontWeight: '700'
				}]}>
					Essentials
				</Text>
			</View>
			
			<View
				style={{
					marginBottom: 50,
					marginTop: 20,
					marginLeft: 10,
					flexDirection: 'row'
				}}
			>
				<ImageBackground
					source={images.refer}
					style={{
						height: Layout.window.height / 5,
						width: Layout.window.width / 2.2,
						// resizeMode: 'center',
					}}
					imageStyle={{
						borderRadius: 12
					}}
				/>
				
				<ImageBackground
					source={images.spent}
					style={{
						height: Layout.window.height / 5,
						width: Layout.window.width / 2,
						// resizeMode: 'center',
					}}
					imageStyle={{
						borderRadius: 12
					}}
				/>
			</View>
		
		</ScrollView>
	)
};

export default Dashboard;
