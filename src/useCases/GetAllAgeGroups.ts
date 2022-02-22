import { GetProgramData } from "./GetProgramData";
import { IData } from "./interfaces";

export class GetAllAgeGroups {
  constructor(private getProgramData: GetProgramData) { }

  async run(): Promise<IData[]> {
    const { res } = await this.getProgramData.run();

    const rawData = res.ages;
    const data: Array<IData> = [];

    rawData.map((ageGroup) => {
      data.push({
        name: ageGroup.description,
        total: ageGroup.total,
        percentage: ageGroup.totalRaw * 100,
        updatedAt: res.updated_at
      });
    });

    return data;
  }
}