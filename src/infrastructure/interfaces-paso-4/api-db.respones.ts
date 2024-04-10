// Generated by https://quicktype.io
export interface ExpositorResponse {
  id: number;
  nombre: string;
  profesion: null | string;
  nacionalidad: null | string;
  ciudad: null | string;
  radicatoria: null | string;
  telefono1: null | string;
  telefono2: null | string;
  fecha_nacimiento: null | string;
  tipo: null | string;
  foto: null | string;
  biografia: null | string;
  created_at: string;
  updated_at: string;
  deleted_at: null;
}
// Generated by https://quicktype.io

export interface ExpositorRespone {
  id: number;
  nombre: string;
  profesion: null | string;
  nacionalidad: null | string;
  ciudad: null | string;
  radicatoria: null | string;
  telefono1: null | string;
  telefono2: null;
  fecha_nacimiento: null | string;
  tipo: null;
  foto: null | string;
  biografia: null | string;
  created_at: string;
  updated_at: string;
  deleted_at: null;
  pabellon: Pabellon;
  local: string;
  favorito: boolean;
  cantidad_fav: number;
}

export enum Pabellon {
  Bar = 'bar',
  Brasil = 'Brasil...',
  CulturalBolivia = 'Cultural - Bolivia',
  CulturalParaguay = 'Cultural - Paraguay',
  Usa = 'USA',
}

export interface APIExpositorID {
  id: number;
  nombre: string;
  profesion: null;
  nacionalidad: null;
  ciudad: null;
  radicatoria: null;
  telefono1: null;
  telefono2: null;
  fecha_nacimiento: null;
  tipo: null;
  foto: string;
  biografia: null;
  created_at: string;
  updated_at: string;
  deleted_at: null;
  salones: Salone[];
}

export interface Salone {
  id: number;
  nombre: string;
  descripcion: string;
  imagen: string;
  plano: string;
  icono: null;
  tipo: string;
  latitud: string;
  longitud: string;
  created_at: string;
  updated_at: string;
  deleted_at: null;
  pivot: Pivot;
}

export interface Pivot {
  expositor_id: number;
  salon_id: number;
  titulo: null;
  fecha: null;
  hora: null;
  local: string;
  created_at: string;
  updated_at: string;
}

export interface APIParticipantesID {
  id: number;
  nombre: string;
  profesion: string;
  nacionalidad: string;
  ciudad: string;
  radicatoria: string;
  telefono1: string;
  telefono2: null;
  fecha_nacimiento: string;
  tipo: null;
  foto: string;
  biografia: string;
  created_at: string;
  updated_at: string;
  deleted_at: null;
  salones: Salone[];
  pabellones: Pabellone[];
}

export interface Pabellone {
  pabellon: string;
  agenda: PabelloneAgenda[];
}

export interface PabelloneAgenda {
  stand: string;
}

export interface Salone {
  salon: string;
  agenda: SaloneAgenda[];
}

export interface SaloneAgenda {
  titulo: string;
  hora: string;
  fecha: string;
}

// Generated by https://quicktype.io

export interface AgendaFeriaFechas {
  fecha: number;
  fecha_completa: string;
  dia: string;
  mes: Mes;
}

export enum Mes {
  Abril = 'ABRIL',
  Junio = 'JUNIO',
}
// Generated by https://quicktype.io

export interface ApiDBApi {
  id: number;
  nombre: string;
  profesion: string;
  nacionalidad: string;
  ciudad: string;
  radicatoria: string;
  telefono1: string;
  telefono2: null;
  fecha_nacimiento: string;
  tipo: null;
  foto: string;
  biografia: string;
  created_at: string;
  updated_at: string;
  deleted_at: null;
  salones: Salone[];
  pabellones: Pabellone[];
}

export interface Pabellone {
  pabellon: string;
  agenda: PabelloneAgenda[];
}

export interface PabelloneAgenda {
  stand: string;
}

export interface Salone {
  salon: string;
  agenda: SaloneAgenda[];
}

export interface SaloneAgenda {
  titulo: string;
  hora: string;
  fecha: string;
}
