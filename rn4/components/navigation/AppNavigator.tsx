import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import EquiposScreen from '../../screens/EquiposScreen';
import JugadoresScreen from '../../screens/JugadoresScreen';
import PartidosScreen from '../../screens/PartidosScreen';
import EstadisticasScreen from '../../screens/EstadisticasScreen';
import LoginScreen from '../../screens/LoginScreen';

const Stack = createStackNavigator();

const AppNavigator = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Login">
        <Stack.Screen name="Login" component={LoginScreen} options={{ title: 'Login' }} />
        <Stack.Screen name="Equipos" component={EquiposScreen} options={{ title: 'Equipos' }} />
        <Stack.Screen name="Jugadores" component={JugadoresScreen} options={{ title: 'Jugadores' }} />
        <Stack.Screen name="Partidos" component={PartidosScreen} options={{ title: 'Partidos' }} />
        <Stack.Screen name="Estadisticas" component={EstadisticasScreen} options={{ title: 'Estadísticas' }} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default AppNavigator;