import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const EstadisticasScreen = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Estadísticas del Torneo</Text>
      {/* Aquí puedes añadir estadísticas, como máximos goleadores, tarjetas, etc. */}
      <Text>Goles Totales: 100</Text>
      <Text>Tarjetas Rojas: 5</Text>
      <Text>Tarjetas Amarillas: 15</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 20,
  },
});

export default EstadisticasScreen;