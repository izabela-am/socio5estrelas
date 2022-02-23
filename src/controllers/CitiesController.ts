import axios from "axios";
import { Request, Response } from "express";

import { RequestProvider } from "../providers/RequestProvider";

import { GetProgramData } from "../useCases/GetProgramData";
import { GetTop15Cities } from "../useCases/GetTop15Cities";

export class CitiesController {
  private getTop15cities: GetTop15Cities;

  constructor() {
    const requestProvider = new RequestProvider(axios);
    const getProgramData = new GetProgramData(requestProvider);

    this.getTop15cities = new GetTop15Cities(getProgramData);
  }

  top15 = async (request: Request, response: Response): Promise<Response> => {
    const data = await this.getTop15cities.run();

    return response.status(200).send(data);
  }
}