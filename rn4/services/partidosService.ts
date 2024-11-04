import api from './api';
import { Partido } from '../types/partido';

export const getPartidos = async (): Promise<Partido[]> => {
  const response = await api.get('/partidos');
  return response.data;
};

export const addPartido = async (partido: Partido) => {
  const response = await api.post('/partidos', partido);
  return response.data;
};

export const updatePartido = async (id: number, partido: Partido) => {
  const response = await api.put(`/partidos/${id}`, partido);
  return response.data;
};

export const deletePartido = async (id: number) => {
  await api.delete(`/partidos/${id}`);
};