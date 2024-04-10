import {HttpAdapter} from '../../../config/adapters/http-paso-1/http.adapte';
import {ApiDBApi} from '../../../infrastructure/interfaces-paso-4/api-db.respones';
import {ApiMapper} from '../../../infrastructure/mappers-paso-7/api.mapper';
import {FullExpositor} from '../../entities-paso-5/api.entity';

export const getApiByIdUseCase = async (
  fetcher: HttpAdapter,
  expositoresId: number,
): Promise<FullExpositor> => {
  try {
    const movie = await fetcher.get<ApiDBApi>(`/participante/${expositoresId}`);
    const fullMovie = ApiMapper.fromApiDBToExpositor(movie);
    return fullMovie;
  } catch (error) {
    throw new Error(`Cannot get movie by id: ${expositoresId}`);
  }
};
