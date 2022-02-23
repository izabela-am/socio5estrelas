import axios from "axios";
import { Request, Response } from "express";

import { RequestProvider } from "../providers/RequestProvider";

import { GetProgramData } from "../useCases/GetProgramData";
import { GetTop15Districts } from "../useCases/GetTop15Districts";

export class DistrictsController {
  private getTop15Districts: GetTop15Districts;

  constructor() {
    const requestProvider = new RequestProvider(axios);
    const getProgramData = new GetProgramData(requestProvider);

    this.getTop15Districts = new GetTop15Districts(getProgramData);
  }

  top15 = async (request: Request, response: Response): Promise<Response> => {
    const data = await this.getTop15Districts.run();

    return response.status(200).send(data);
  }
}