import {
  AgendaFecha,
  Expositor,
  FullExpositor,
  PabellonesA,
} from '../../core/entities-paso-5/api.entity'; // Importa la interfaz Expositor
import {
  AgendaFeriaFechas,
  ApiDBApi,
  ExpositorResponse,
  Pabellone,
} from '../interfaces-paso-4/api-db.respones';

export class ApiMapper {
  static fromExpositorResponseToExpositor(
    expositorResponse: ExpositorResponse,
  ): Expositor {
    let fotoUrl: string;

    if (expositorResponse.foto === null) {
      fotoUrl = 'http://feria.programatupotencial.com/Logotipos/user.png';
    } else {
      fotoUrl = `http://feria.programatupotencial.com/images/${expositorResponse.foto}`;
    }
    return {
      id: expositorResponse.id,
      nombre: expositorResponse.nombre,
      profesion: expositorResponse.profesion,
      nacionalidad: expositorResponse.nacionalidad,
      ciudad: expositorResponse.ciudad,
      radicatoria: expositorResponse.radicatoria,
      telefono1: expositorResponse.telefono1,
      fecha_nacimiento: expositorResponse.fecha_nacimiento,
      foto: fotoUrl,
      biografia: expositorResponse.biografia,

      // Añade el resto de las propiedades de ExpositorResponse que quieras mapear
    };
  }
  static fromApiDBToExpositor(api: ApiDBApi): FullExpositor {
    let fotoUrl: string;

    if (api.foto === null) {
      fotoUrl = 'http://feria.programatupotencial.com/Logotipos/user.png';
    } else {
      fotoUrl = `http://feria.programatupotencial.com/images/${api.foto}`;
    }

    return {
      id: api.id,
      nombre: api.nombre,
      profesion: api.profesion,
      nacionalidad: api.nacionalidad,
      ciudad: api.ciudad,
      radicatoria: api.radicatoria,
      telefono1: api.telefono1,
      fecha_nacimiento: api.fecha_nacimiento,
      foto: fotoUrl,
      biografia: api.biografia,
      telefono2: null,

      salones: api.salones,
      pabellones: api.pabellones,
    };
  }
  static fromPabelloneToExpositor(pabellon: Pabellone): PabellonesA {
    return {
      pabellon: pabellon.pabellon,
      agenda: pabellon.agenda,
    };
  }

  static fromAgendaFechaResponseToExpositor(
    agendaferiafechas: AgendaFeriaFechas,
  ): AgendaFecha {
    return {
      fecha: agendaferiafechas.fecha,
      fecha_completa: agendaferiafechas.fecha_completa,
      dia: agendaferiafechas.dia,
      // Añade el resto de las propiedades de ExpositorResponse que quieras mapear
    };
  }
}
