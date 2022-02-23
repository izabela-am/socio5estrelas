import axios from "axios";
import { Request, Response } from "express";

import { RequestProvider } from "../providers/RequestProvider";

import { GetAllStates } from "../useCases/GetAllStates";
import { GetStateByName } from "../useCases/GetStateByName";
import { GetTop10States } from "../useCases/GetTop10States";
import { GetProgramData } from "../useCases/GetProgramData";
import { States } from "../utils/states";

export class StateController {
  private getAllStates: GetAllStates;
  private getTop10States: GetTop10States;
  private getStateByName: GetStateByName;

  constructor() {
    const requestProvider = new RequestProvider(axios);
    const getProgramData = new GetProgramData(requestProvider);

    this.getAllStates = new GetAllStates(getProgramData);
    this.getTop10States = new GetTop10States(getProgramData);
    this.getStateByName = new GetStateByName(getProgramData);
  }

  all = async (request: Request, response: Response): Promise<Response> => {
    const data = await this.getAllStates.run();

    return response.status(200).send(data);
  }

  top10 = async (request: Request, response: Response): Promise<Response> => {
    const data = await this.getTop10States.run();

    return response.status(200).send(data);
  }

  getByName = async (request: Request, response: Response): Promise<Response> => {
    const { name } = request.params;

    const data = await this.getStateByName.run(name as States);

    return response.status(200).send(data);
  }
}
