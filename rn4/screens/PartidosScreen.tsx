import React, { useEffect, useState } from 'react';
import { View, FlatList, StyleSheet, ActivityIndicator, Text, Alert } from 'react-native';
import PartidoCard from '../components/PartidoCard';
import { getPartidos } from '../services/partidosService';
import { Partido } from '../types/partido';

const PartidosScreen = () => {
  // Define el estado para los partidos, la carga y errores
  const [partidos, setPartidos] = useState<Partido[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchPartidos = async () => {
      try {
        const data = await getPartidos();
        setPartidos(data);
      } catch (err) {
        // Manejo de errores
        setError('Error al cargar los partidos. Intenta nuevamente.');
        Alert.alert('Error', 'No se pudieron cargar los partidos.');
      } finally {
        setLoading(false);
      }
    };

    fetchPartidos();
  }, []);

  // Si se está cargando, mostrar el indicador de carga
  if (loading) {
    return (
      <View style={styles.loaderContainer}>
        <ActivityIndicator size="large" color="#6200EE" />
        <Text>Cargando partidos...</Text>
      </View>
    );
  }

  // Si hay un error, mostrar el mensaje de error
  if (error) {
    return (
      <View style={styles.errorContainer}>
        <Text style={styles.errorText}>{error}</Text>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <FlatList
        data={partidos}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <PartidoCard
            equipo1={item.equipo1}
            equipo2={item.equipo2}
            fecha={item.fecha}
            lugar={item.lugar}
            resultado={item.resultado}
          />
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
  },
  loaderContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  errorContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  errorText: {
    color: 'red',
    fontSize: 16,
  },
});

export default PartidosScreen;