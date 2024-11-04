import api from './api';
import { Jugador } from '../types/jugador';

export const getJugadores = async (): Promise<Jugador[]> => {
  const response = await api.get('/jugadores');
  return response.data;
};

export const addJugador = async (jugador: Jugador) => {
  const response = await api.post('/jugadores', jugador);
  return response.data;
};

export const updateJugador = async (id: number, jugador: Jugador) => {
  const response = await api.put(`/jugadores/${id}`, jugador);
  return response.data;
};

export const deleteJugador = async (id: number) => {
  await api.delete(`/jugadores/${id}`);
};