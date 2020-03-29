import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

const AppStack = createStackNavigator();

import Incidents from './pages/Incidents';
import Detall from './pages/Detall';
import Logon from './pages/Logon';


export default function Routes() {
	return (
		<NavigationContainer>

			<AppStack.Navigator screenOptions={{ headerShown: false }} >
				<AppStack.Screen name="Logon" component={Logon} />
				<AppStack.Screen name="Incidents" component={Incidents} />
				<AppStack.Screen name="Detall" component={Detall} />
			</AppStack.Navigator>

		</NavigationContainer>
	);
}
