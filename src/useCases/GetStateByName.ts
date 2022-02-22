import { States } from "@utils/states";
import { IStateProps } from "providers/interfaces";
import { GetProgramData } from "./GetProgramData";

export class GetStateByName {
  constructor(private getProgramData: GetProgramData) { }

  async run(stateName: States): Promise<IStateProps[]> {
    const { res } = await this.getProgramData.run();

    const rawData = res.states.top_10;

    const data = rawData.filter((state) => {
      return state.description === stateName;
    });

    return data;
  }
}