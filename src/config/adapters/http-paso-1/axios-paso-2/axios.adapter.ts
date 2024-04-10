import axios, {AxiosInstance, AxiosResponse} from 'axios';
import {HttpAdapter} from '../http.adapte';

interface Options {
  baseUrl: string;
  params?: Record<string, string>; // Hice que los parámetros sean opcionales
}

export class AxiosAdapter implements HttpAdapter {
  private axiosInstance: AxiosInstance;

  constructor(options: Options) {
    this.axiosInstance = axios.create({
      baseURL: options.baseUrl,
      params: options.params,
    });
  }

  async get<T>(url: string, options?: Record<string, unknown>): Promise<T> {
    try {
      const response: AxiosResponse<T> = await this.axiosInstance.get<T>(
        url,
        options,
      );
      return response.data; // Devuelve solo los datos de la respuesta
    } catch (error) {
      throw new Error(`Error fetching get: ${url}`);
    }
  }
}
