export interface Usuario {
    id: number;
    nombre: string;
    email: string;
    tipo: 'administrador' | 'jugador' | 'seguidor';
  }