import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';

interface EquipoCardProps {
  nombre: string;
  escudo: string;
}

const EquipoCard: React.FC<EquipoCardProps> = ({ nombre, escudo }) => {
  return (
    <View style={styles.card}>
      <Image source={{ uri: escudo }} style={styles.logo} />
      <Text style={styles.nombre}>{nombre}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 10,
    marginVertical: 8,
    backgroundColor: '#f2f2f2',
    borderRadius: 8,
  },
  logo: {
    width: 50,
    height: 50,
    borderRadius: 25,
    marginRight: 10,
  },
  nombre: {
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default EquipoCard;