import {useEffect, useState} from 'react';
import * as UseCases from '../../../core/use-cases';
import {apiDBFetcher} from '../../../config/adapters/apiDB.adapter-paso-6';
import {FullExpositor} from '../../../core/entities-paso-5/api.entity';

export const useAp = (expositoresId: number) => {
  const [isLoading, setisLoading] = useState(true);
  const [movie, setMovie] = useState<FullExpositor>();
  useEffect(() => {
    loadAp();
  }, [expositoresId]);
  const loadAp = async () => {
    setisLoading(true);
    const fullMovie = await UseCases.getApiByIdUseCase(
      apiDBFetcher,
      expositoresId,
    );
    setMovie(fullMovie);
    setisLoading(false);
    console.log({fullMovie});
  };

  return {isLoading, movie};
};
