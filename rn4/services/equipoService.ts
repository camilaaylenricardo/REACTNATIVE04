import api from './api';
import { Equipo } from '../types/equipo';

export const getEquipos = async (): Promise<Equipo[]> => {
  const response = await api.get('/equipos');
  return response.data;
};

export const addEquipo = async (equipo: Equipo) => {
  const response = await api.post('/equipos', equipo);
  return response.data;
};

export const updateEquipo = async (id: number, equipo: Equipo) => {
  const response = await api.put(`/equipos/${id}`, equipo);
  return response.data;
};

export const deleteEquipo = async (id: number) => {
  await api.delete(`/equipos/${id}`);
};