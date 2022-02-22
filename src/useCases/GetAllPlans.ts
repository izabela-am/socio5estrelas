import { GetProgramData } from "./GetProgramData";
import { IData } from "./interfaces";

export class GetAllPlans {
  constructor(private getProgramData: GetProgramData) { }

  async run(): Promise<IData[]> {
    const { res } = await this.getProgramData.run();

    const rawData = res.plans;
    const data: Array<IData> = [];

    rawData.map((plans) => {
      data.push({
        name: plans.description,
        total: plans.total,
        percentage: plans.totalRaw * 100,
        updatedAt: res.updated_at
      });
    });

    return data;
  }
}