import React, { useEffect, useState } from 'react';
import { View, FlatList, StyleSheet } from 'react-native';
import EquipoCard from '../components/EquipoCard';
import { getEquipos } from '../services/equipoService';
import { Equipo } from '../types/equipo';

const EquiposScreen = () => {
  // Especifica el tipo para que TypeScript reconozca que es un array de `Equipo`
  const [equipos, setEquipos] = useState<Equipo[]>([]);

  useEffect(() => {
    // Maneja la carga de datos de los equipos
    getEquipos().then((data) => setEquipos(data));
  }, []);

  return (
    <View style={styles.container}>
      <FlatList
        data={equipos}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <EquipoCard nombre={item.nombre} escudo={item.escudo} />
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

export default EquiposScreen;