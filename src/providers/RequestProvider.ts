import { AxiosInstance, AxiosStatic } from 'axios';

import { API } from '@utils/credentials';

import { IGetGeneralDataResponse } from './interfaces';
import { IRequestProvider } from './interfaces';

export class RequestProvider implements IRequestProvider {
  private request: AxiosInstance;

  constructor(requestHandler: AxiosStatic) {
    this.request = requestHandler.create({
      baseURL: API.baseURL,
      headers: { 'Content-Type': 'application/json' }
    });
  }

  public async getProgramData(): Promise<IGetGeneralDataResponse> {
    const { data } = await this.request.get<IGetGeneralDataResponse>(API.generalData);

    return data;
  }
}