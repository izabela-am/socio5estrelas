import { States } from "../utils/states";
import { IStateProps } from "../providers/interfaces";
import { GetProgramData } from "./GetProgramData";
import { IData } from "./interfaces";

export class GetStateByName {
  constructor(private getProgramData: GetProgramData) { }

  async run(stateName: States): Promise<IData> {
    const { res } = await this.getProgramData.run();

    const rawData = res.states.top_10;

    const data = rawData.filter((state) => {
      return state.description === stateName.toUpperCase();
    });

    const state = data[0];
    const parsedData: IData = {
      name: state.description,
      total: state.totalRaw,
      percentage: state.total * 100,
      updatedAt: res.updated_at
    };

    return parsedData;
  }
}
