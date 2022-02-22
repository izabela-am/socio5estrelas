import { GetProgramData } from "./GetProgramData";
import { IData } from "./interfaces";

export class GetTop15Cities {
  constructor(private getProgramData: GetProgramData) { }

  async run(): Promise<IData[]> {
    const { res } = await this.getProgramData.run();

    const rawData = res.cities.top_15;
    const data: Array<IData> = [];

    rawData.map((city) => {
      data.push({
        name: city.description,
        total: city.totalRaw,
        percentage: city.total * 100,
        updatedAt: res.updated_at
      });
    });

    return data;
  }
}