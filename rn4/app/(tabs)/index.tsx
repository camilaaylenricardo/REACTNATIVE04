import React from 'react';
import { Image, StyleSheet, Platform, TouchableOpacity } from 'react-native';

import { HelloWave } from '@/components/HelloWave';
import ParallaxScrollView from '@/components/ParallaxScrollView';
import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';
import { StackNavigationProp } from '@react-navigation/stack';
import { RootStackParamList } from '../../types/navigation'; // Asegúrate de definir los tipos de navegación
import PartidosScreen from '@/screens/PartidosScreen';

type HomeScreenNavigationProp = StackNavigationProp<RootStackParamList, 'Home'>;

interface Props {
  navigation: HomeScreenNavigationProp;
}

export default function HomeScreen({ navigation }: Props) {
  return (
    <ParallaxScrollView
      headerBackgroundColor={{ light: '#A1CEDC', dark: '#1D3D47' }}
      headerImage={
        <Image
          source={require('@/assets/images/partial-react-logo.png')}
          style={styles.reactLogo}
        />
      }
    >
      <ThemedView style={styles.titleContainer}>
        <ThemedText type="title">¡Bienvenido!</ThemedText>
        <HelloWave />
      </ThemedView>

      {/* Botón para navegar a la pantalla de inicio de sesión */}
      <ThemedView style={styles.stepContainer}>
        <ThemedText type="subtitle">Iniciar Sesión</ThemedText>
        <TouchableOpacity
          style={styles.button}
          onPress={() => navigation.navigate('Login')} // Navegar a la pantalla de Login
        >
          <ThemedText style={styles.buttonText}>Ir a Iniciar Sesión</ThemedText>
        </TouchableOpacity>
      </ThemedView>

      {/* Componente de partidos */}
      <ThemedView style={styles.stepContainer}>
        <ThemedText type="subtitle">Partidos</ThemedText>
        <PartidosScreen />
      </ThemedView>

      {/* Sección de instrucciones */}
      <ThemedView style={styles.stepContainer}>
        <ThemedText type="subtitle">Paso 1: Prueba</ThemedText>
        <ThemedText>
          Edita <ThemedText type="defaultSemiBold">app/(tabs)/index.tsx</ThemedText> para ver cambios.
          Presiona{' '}
          <ThemedText type="defaultSemiBold">
            {Platform.select({ ios: 'cmd + d', android: 'cmd + m' })}
          </ThemedText>{' '}
          para abrir las herramientas de desarrollo.
        </ThemedText>
      </ThemedView>

      <ThemedView style={styles.stepContainer}>
        <ThemedText type="subtitle">Paso 2: Explora</ThemedText>
        <ThemedText>
          Toca la pestaña Explorar para aprender más sobre lo que incluye esta aplicación de inicio.
        </ThemedText>
      </ThemedView>

      <ThemedView style={styles.stepContainer}>
        <ThemedText type="subtitle">Paso 3: Obtén un nuevo comienzo</ThemedText>
        <ThemedText>
          Cuando estés listo, ejecuta{' '}
          <ThemedText type="defaultSemiBold">npm run reset-project</ThemedText> para obtener un nuevo{' '}
          <ThemedText type="defaultSemiBold">directorio de aplicación</ThemedText>. Esto moverá la actual{' '}
          <ThemedText type="defaultSemiBold">app</ThemedText> a{' '}
          <ThemedText type="defaultSemiBold">app-example</ThemedText>.
        </ThemedText>
      </ThemedView>
    </ParallaxScrollView>
  );
}

const styles = StyleSheet.create({
  titleContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
  },
  stepContainer: {
    gap: 8,
    marginBottom: 16,
    paddingHorizontal: 16, // Agregado para mejorar el espaciado
  },
  reactLogo: {
    height: 178,
    width: 290,
    bottom: 0,
    left: 0,
    position: 'absolute',
  },
  button: {
    backgroundColor: '#6200EE',
    borderRadius: 5,
    paddingVertical: 10,
    alignItems: 'center',
    marginTop: 10,
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
});