import axios from "axios";
import { Request, Response } from "express";

import { RequestProvider } from "../providers/RequestProvider";

import { GetAllStates } from "../useCases/GetAllStates";
import { GetProgramData } from "../useCases/GetProgramData";
import { GetTop10States } from "../useCases/GetTop10States";

export class StateController {
  private getAllStates: GetAllStates;
  private getTop10States: GetTop10States;

  constructor() {
    const requestProvider = new RequestProvider(axios);
    const getProgramData = new GetProgramData(requestProvider);

    this.getAllStates = new GetAllStates(getProgramData);
    this.getTop10States = new GetTop10States(getProgramData);
  }

  all = async (request: Request, response: Response): Promise<Response> => {
    const data = await this.getAllStates.run();

    return response.status(200).send(data);
  }

  top10 = async (request: Request, response: Response): Promise<Response> => {
    const data = await this.getTop10States.run();

    return response.status(200).send(data);
  }
}