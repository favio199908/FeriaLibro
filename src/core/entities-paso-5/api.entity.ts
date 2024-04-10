export interface Expositor {
  id: number;
  nombre: string;
  profesion: null | string;
  nacionalidad: null | string;
  ciudad: null | string;
  radicatoria: null | string;
  telefono1: null | string;
  fecha_nacimiento: null | string;
  foto: null | string;
  biografia: null | string;
}
export interface FullExpositor extends Expositor {
  telefono2: null;
  salones: SalonesA[];
  pabellones: PabellonesA[];
}
export interface PabellonesA {
  pabellon: string;
  agenda: PabelloneAgendasA[];
}

export interface PabelloneAgendasA {
  stand: string;
}

export interface SalonesA {
  salon: string;
  agenda: SaloneAgendasA[];
}

export interface SaloneAgendasA {
  titulo: string;
  hora: string;
  fecha: string;
}

export interface AgendaFecha {
  fecha: number;
  fecha_completa: string;
  dia: string;
}
