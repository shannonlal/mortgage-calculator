export enum RateType {
  FIXED = 1,
  VARIABLE = 2,
}

export interface InterestRate {
  type: RateType;
  rate: number;
}
