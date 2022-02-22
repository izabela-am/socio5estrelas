import { GetProgramData } from "./GetProgramData";

interface IData {
  title: string;
  total: number;
  percentage: number;
  updatedAt: string;
}

export class GetGenderData {
  constructor(private getProgramData: GetProgramData) { }

  async run(): Promise<any> {
    const { res } = await this.getProgramData.run();

    const rawData = res.genders;
    const data: Array<IData> = [];

    rawData.map((gender) => {
      data.push({
        title: gender.description,
        total: gender.totalRaw,
        percentage: gender.total * 100,
        updatedAt: res.updated_at
      });
    });

    return data;
  }
}
