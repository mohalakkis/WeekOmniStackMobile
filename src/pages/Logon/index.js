import React from 'react';
import { View, Text, TouchableOpacity, Image } from 'react-native';
import logoImg from '../../assets/logoTeste.png'
import { useNavigation } from '@react-navigation/native'


import styles from './styles';

export default function Logon() {
	const navigation = useNavigation('incidents');

	function navigationToDetail(incident) {
		navigation.navigate('Incidents', { incident });
	}
	return (

		<View style={styles.container}>
			<View style={styles.header}>
				<Image source={logoImg} />
				<Text style={styles.incidentsProperty}>Como funciona?</Text>
			</View>
			<View style={styles.incidents}>
			<Text style={styles.title}>Bem-vindo.</Text>

			<Text style={styles.incidentsProperty}>escolha uma das opções abaixo</Text>

				<View style={styles.container}>
					<View style={{ background: 'red', marginBottom: -10 }}></View>
					<View style={styles.actions}>
						<TouchableOpacity style={styles.action} onPress={() => { }}>
							<Text style={styles.actionText}>ONG</Text>
						</TouchableOpacity>

						<TouchableOpacity style={styles.action} onPress={navigationToDetail}>
							<Text style={styles.actionText}>Quero doar!</Text>
						</TouchableOpacity>
					</View>
				</View>
			</View>
		</View>
	)
}
