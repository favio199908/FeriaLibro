import {useEffect, useState} from 'react';
import type {
  AgendaFecha,
  Expositor,
} from '../../../core/entities-paso-5/api.entity';
import * as UseCases from '../../../core/use-cases';
import {apiDBFetcher} from '../../../config/adapters/apiDB.adapter-paso-6';

let expositorsPageNumber = 1;
export const useApi = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [expositors, setExpositor] = useState<Expositor[]>([]);
  const [agendaFecha, setAgendaFecha] = useState<AgendaFecha[]>([]);

  useEffect(() => {
    initialLoad();
  }, []);

  const initialLoad = async () => {
    const expositorPromise = await UseCases.apiExpositorUseCase(apiDBFetcher);
    const agendaFechaPromise = await UseCases.apiAgendaFeriaUseCase(
      apiDBFetcher,
    );
    const [expositorApi, agendaFechaApi] = await Promise.all([
      expositorPromise,
      agendaFechaPromise,
    ]);
    setExpositor(expositorApi);
    setAgendaFecha(agendaFechaApi);
    setIsLoading(false);
  };

  const expositorNextPage = async () => {
    expositorsPageNumber++;
    const expositorApi = await UseCases.apiExpositorUseCase(apiDBFetcher, {
      page: expositorsPageNumber,
    });
    setExpositor(prev => [...prev, ...expositorApi]);
  };

  return {
    isLoading,
    expositors,
    agendaFecha,
    expositorNextPage, // Agregar el método dentro del objeto de retorno
  };
};
