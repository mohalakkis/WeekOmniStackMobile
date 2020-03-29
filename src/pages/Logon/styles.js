import { StyleSheet } from 'react-native';
import Constats from 'expo-constants';
import { Header } from 'react-native/Libraries/NewAppScreen';

export default StyleSheet.create({
	container: {
		flex: 1,
		paddingHorizontal: 24,
		paddingTop: Constats.statusBarHeight + 20,
	},
	header: {
		flexDirection: 'row',
		justifyContent: 'space-between',
		alignItems: 'center',
},
	actions: {
		marginTop: 16,
		flexDirection: 'row',
		justifyContent: 'space-between',
		alignItems: 'center',
	},
	action: {

		backgroundColor: '#e02041',
		borderRadius: 8,
		height: 50,
		width: '48%',
		justifyContent: 'center',
		alignItems: 'center',

	},
	actionText: {
		color: '#fff',
		fontSize: 15,
		fontWeight: 'bold',
	},
	incidents: {
		padding: 24,
		borderRadius: 8,
		backgroundColor: '#fff',
		marginTop: 48,
	},
	incidentsProperty: {
		fontSize: 14,
		color: '#41414d',
		fontWeight: 'bold',
},
title: {
	fontWeight: 'bold',
	fontSize: 20,
	color: '#13131a',
	lineHeight: 30,
},
imageFacaObe: {
	alignItems: 'center',
	justifyContent: 'center',
}

});