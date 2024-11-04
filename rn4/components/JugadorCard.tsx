import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

interface JugadorCardProps {
  nombre: string;
  apellido: string;
  edad: number;
  posicion: string;
  numeroCasaca: number;
  equipoId: number; // Cambiar a equipoId
}

const JugadorCard = ({ nombre, apellido, edad, posicion, numeroCasaca, equipoId }: JugadorCardProps) => {
  return (
    <View style={styles.card}>
      <Text>{nombre} {apellido}</Text>
      <Text>Edad: {edad}</Text>
      <Text>Posición: {posicion}</Text>
      <Text>Número: {numeroCasaca}</Text>
      <Text>Equipo ID: {equipoId}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    padding: 10,
    backgroundColor: 'white',
    marginBottom: 10,
    borderRadius: 5,
  },
});

export default JugadorCard;