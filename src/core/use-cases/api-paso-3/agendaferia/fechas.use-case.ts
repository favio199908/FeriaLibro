import {HttpAdapter} from '../../../../config/adapters/http-paso-1/http.adapte';
import {AgendaFeriaFechas} from '../../../../infrastructure/interfaces-paso-4/api-db.respones';
import {ApiMapper} from '../../../../infrastructure/mappers-paso-7/api.mapper';
import type {AgendaFecha, Expositor} from '../../../entities-paso-5/api.entity';

export const apiAgendaFeriaUseCase = async (
  fetcher: HttpAdapter,
): Promise<AgendaFecha[]> => {
  try {
    const agendaferia = await fetcher.get<AgendaFeriaFechas[]>(
      '/agendaferia/fechas',
    );
    return agendaferia.map(ApiMapper.fromAgendaFechaResponseToExpositor);
  } catch (error) {
    console.error(error);
    throw new Error('Error fetching api-expositor');
  }
};
