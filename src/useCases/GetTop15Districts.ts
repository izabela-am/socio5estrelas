import { GetProgramData } from "./GetProgramData";
import { IData } from "./interfaces";

export class GetTop15Districts {
  constructor(private getProgramData: GetProgramData) { }

  async run(): Promise<IData[]> {
    const { res } = await this.getProgramData.run();

    const rawData = res.districts.top_15;
    const data: Array<IData> = [];

    rawData.map((district) => {
      data.push({
        name: district.description,
        total: district.totalRaw,
        percentage: district.total * 100,
        updatedAt: res.updated_at
      });
    });

    return data;
  }
}