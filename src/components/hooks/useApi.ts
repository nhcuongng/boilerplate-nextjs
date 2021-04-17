import axios, { AxiosInstance, AxiosError } from 'axios';
import { useEffect, useState } from 'react';
import { toast } from 'src/lib/axios/toast';

export const useApi = () => {
  /**
     * Toast error if server return error
     *
     * @description https://www.intricatecloud.io/2020/03/how-to-handle-api-errors-in-your-web-app-using-axios/
     * @param error
     * @returns
     */
  const errorHandler = (error: AxiosError) => {
    if (document) {
      // if has response show the error
      if (error.response) {
        toast.error(error.response.data.message);
        return;
      }

      if (error.request) {
        toast.error('Network failed');
        return;
      }

      toast.error('Something error');
    }
  };

  const _API = axios.create({
    baseURL: '/api',
    timeout: 1000,
  });

  // apply interceptor on response
  _API.interceptors.response.use(
    (response) => response,
    errorHandler,
  );

  _API.interceptors.request.use(
    (request) => request,
    errorHandler,
  );

  return _API;
};
