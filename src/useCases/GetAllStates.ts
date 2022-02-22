import { GetProgramData } from "./GetProgramData";
import { IData } from "./interfaces";

export class GetAllStates {
  constructor(private getProgramData: GetProgramData) { }

  async run(): Promise<IData[]> {
    const { res } = await this.getProgramData.run();

    const rawData = res.states.general;
    const data: Array<IData> = [];

    rawData.map((state) => {
      data.push({
        name: state.description,
        total: state.total,
        percentage: state.totalRaw * 100,
        updatedAt: res.updated_at
      });
    });

    return data;
  }
}