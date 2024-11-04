import React, { useEffect, useState } from 'react';
import { View, FlatList, StyleSheet } from 'react-native';
import JugadorCard from '../components/JugadorCard';
import { getJugadores } from '../services/jugadoresService';
import { Jugador } from '../types/jugador';

const JugadoresScreen = () => {
  const [jugadores, setJugadores] = useState<Jugador[]>([]);

  useEffect(() => {
    getJugadores().then((data) => setJugadores(data));
  }, []);

  return (
    <View style={styles.container}>
      <FlatList
        data={jugadores}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <JugadorCard
            nombre={item.nombre}
            apellido={item.apellido}
            edad={item.edad}
            posicion={item.posicion}
            numeroCasaca={item.numeroCasaca}
            equipoId={item.equipoId} // Pasamos equipoId en lugar de equipo
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
});

export default JugadoresScreen;