import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

interface PartidoCardProps {
  equipo1: string;
  equipo2: string;
  fecha: string;
  lugar: string;
  resultado?: string; // Puede estar vacío si el partido aún no se ha jugado
}

const PartidoCard: React.FC<PartidoCardProps> = ({ equipo1, equipo2, fecha, lugar, resultado }) => {
  return (
    <View style={styles.card}>
      <Text style={styles.equipos}>{equipo1} vs {equipo2}</Text>
      <Text>Fecha: {fecha}</Text>
      <Text>Lugar: {lugar}</Text>
      {resultado && <Text>Resultado: {resultado}</Text>}
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    padding: 15,
    marginVertical: 8,
    backgroundColor: '#d9e9f4',
    borderRadius: 8,
  },
  equipos: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 4,
  },
});

export default PartidoCard;