import { IGetGeneralDataResponse } from "../providers/interfaces";
import { IRequestProvider } from "../providers/interfaces";

export class GetProgramData {
  constructor(private requestProvider: IRequestProvider) { }

  async run(): Promise<IGetGeneralDataResponse> {
    const data = await this.requestProvider.getProgramData();

    return data;
  }
}