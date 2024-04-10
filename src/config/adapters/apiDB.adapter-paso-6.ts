import {AxiosAdapter} from './http-paso-1/axios-paso-2/axios.adapter';

export const apiDBFetcher = new AxiosAdapter({
  baseUrl: 'http://feria.programatupotencial.com/api',
  params: {},
});
