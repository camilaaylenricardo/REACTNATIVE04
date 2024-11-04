import api from './api';
import { Usuario } from '../types/usuario';

export const loginUser = async (email: string, password: string): Promise<Usuario | null> => {
  const response = await api.post('/login', { email, password });
  return response.data;
};

export const registerUser = async (usuario: Usuario) => {
  const response = await api.post('/register', usuario);
  return response.data;
};