import { GetProgramData } from "./GetProgramData";
import { IData } from "./interfaces";

export class GetPaymentMethods {
  constructor(private getProgramData: GetProgramData) { }

  async run(): Promise<IData[]> {
    const { res } = await this.getProgramData.run();

    const rawData = res.payment_methods;
    const data: Array<IData> = [];

    rawData.map((paymentMethod) => {
      data.push({
        name: paymentMethod.description,
        total: paymentMethod.totalRaw,
        percentage: paymentMethod.total * 100,
        updatedAt: res.updated_at
      });
    });

    return data;
  }
}
