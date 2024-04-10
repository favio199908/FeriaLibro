import {HttpAdapter} from '../../../config/adapters/http-paso-1/http.adapte';
import {ExpositorResponse} from '../../../infrastructure/interfaces-paso-4/api-db.respones';
import {ApiMapper} from '../../../infrastructure/mappers-paso-7/api.mapper';
import type {Expositor} from '../../entities-paso-5/api.entity';
interface Options {
  page?: number;
  limint?: number;
}

export const apiExpositorUseCase = async (
  fetcher: HttpAdapter,
  options?: Options,
): Promise<Expositor[]> => {
  try {
    console.log({page: options?.page ?? 1});
    const expositor = await fetcher.get<ExpositorResponse[]>('/expositor', {
      params: {
        page: options?.page ?? 1,
      },
    });
    return expositor.map(ApiMapper.fromExpositorResponseToExpositor);
  } catch (error) {
    console.error(error);
    throw new Error('Error fetching api-expositor');
  }
};
