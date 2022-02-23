import axios from "axios";
import { Request, Response } from "express";

import { RequestProvider } from "../providers/RequestProvider";

import { GetAllPlans } from "../useCases/GetAllPlans";
import { GetGenderData } from "../useCases/GetGenderData";
import { GetProgramData } from "../useCases/GetProgramData";
import { GetAllAgeGroups } from "../useCases/GetAllAgeGroups";
import { GetPaymentMethods } from "../useCases/GetPaymentMethods";

export class AssociateController {
  private getAllPlans: GetAllPlans;
  private getGenderData: GetGenderData;
  private getAllAgeGroups: GetAllAgeGroups;
  private getPaymentMethods: GetPaymentMethods;

  constructor() {
    const requestProvider = new RequestProvider(axios);
    const getProgramData = new GetProgramData(requestProvider);

    this.getGenderData = new GetGenderData(getProgramData);
    this.getAllAgeGroups = new GetAllAgeGroups(getProgramData);
  }

  gender = async (request: Request, response: Response): Promise<Response> => {
    const data = await this.getGenderData.run();

    return response.status(200).send(data);
  }

  ageGroup = async (request: Request, response: Response): Promise<Response> => {
    const data = await this.getAllAgeGroups.run();

    return response.status(200).send(data);
  }

  plans = async (request: Request, response: Response): Promise<Response> => {
    const data = await this.getAllPlans.run();

    return response.status(200).send(data);
  }

  paymentMethod = async (request: Request, response: Response): Promise<Response> => {
    const data = await this.getPaymentMethods.run();

    return response.status(200).send(data);
  }
}