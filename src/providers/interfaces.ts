import { States } from "@utils/states";

export interface IRequestProvider {
  getProgramData(): Promise<IGetGeneralDataResponse>;
}

export interface IGetGeneralDataResponse {
  res: {
    updated_at: string;
    states: IStates;
    cities: ICities;
    districts: ICities;
    plans: Array<IPlans>;
    ages: Array<IAges>;
    payment_methods: Array<IPaymentMethods>;
    genders: Array<IGenders>;
  }
};

export interface IStateProps {
  total: number;
  description: States;
  totalRaw: number;
};

interface IStates {
  general: Array<IStateProps>;
  top_10: Array<IStateProps>;
};

interface ICityProps {
  total: number;
  description: string;
  totalRaw: number;
};

interface ICities {
  general: null; // Prop exists in API but always returns null
  top_10: Array<ICityProps>;
  top_15: Array<ICityProps>;
};

interface IGenders {
  total: number;
  description: 'Feminino' | 'Masculino'; // These are the only options provided by the API
  totalRaw: number;
};

interface IPaymentMethods {
  total: number;
  description: 'BOLETO' | 'CARTÃO DE CRÉDITO';
  totalRaw: number;
};

interface IAges {
  total: number;
  description: '<18' | '18-24' | '25-34' | '35-44' | '45-54' | '55-64' | '65+';
  totalRaw: number;
};

interface IPlans {
  total: number;
  description: Plans;
  ordem_plano: null; // Prop exists in API but always returns null
  totalRaw: number;
};

type Plans =
  'CRUZEIRO SEMPRE' |
  'TIME DO POVO' |
  'PLANOS ANTIGOS' |
  'FENOMENAL' |
  'KIDS - TURMA DO RAPOSÃO' |
  'MULTICAMPEÃO' |
  'TRIBUNA AZUL' |
  'DIAMANTE' |
  'EFICIENTE';
