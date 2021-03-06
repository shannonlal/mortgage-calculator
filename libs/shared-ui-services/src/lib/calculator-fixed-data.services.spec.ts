import mockAxios from 'jest-mock-axios';
import { AxiosResponse } from 'axios';
import { AmortizationPeriod, InterestRate, PaymentFrequency, RateType,  Term } from '@mortgage-calculator/models';

import { getTerms, getRateTypes, getInterestRate, getAmortizationPeriod, getPaymentFrequency } from './calculator-fixed-data.services';

jest.mock('axios');

const getMockResponse = <T>( t:Array<T> ): AxiosResponse<Array<T>> => {
  const response: AxiosResponse<Array<T>> = {
    data: t,
    status: 200,
    statusText: 'OK',
    config: undefined,
    headers: {}
  };

  return response;
}

const getMockSingleResponse = <T>( t:T): AxiosResponse<T> => {
  const response: AxiosResponse<T> = {
    data: t,
    status: 200,
    statusText: 'OK',
    config: undefined,
    headers: {}
  };

  return response;
}

describe('getTerms', () => {

  afterEach(() => {
    // cleaning up the mess left behind the previous test
    mockAxios.reset();
  });
  it('should be defined', () => {
    expect(getTerms).toBeDefined();
  });

  it('should get a list of multiple terms', async () =>{

    const t: AxiosResponse<Array<Term>> = getMockResponse(
      [
      {
          "label": "1 Year",
          "value": 1
      },
      {
          "label": "2 Years",
          "value": 2
    }]
    );

    mockAxios.get.mockResolvedValueOnce(t);

    const terms: Array<Term> = await getTerms( 'http://localhost:8080' );

    expect( terms ).toBeDefined();

    expect( terms.length ).toBe( 2 );
  });

  it('should get a list of one terms', async () =>{

    const t: AxiosResponse<Array<Term>> =  getMockResponse([
      {
          "label": "1 Year",
          "value": 1
      }]);

    mockAxios.get.mockResolvedValueOnce(t);

    const terms: Array<Term> = await getTerms( 'http://localhost:8080' );

    expect( terms ).toBeDefined();

    expect( terms.length ).toBe( 1 );
  });

  it('should get an empty list of terms', async () =>{

    const t: AxiosResponse<Array<Term>> =  getMockResponse([]);

    mockAxios.get.mockResolvedValueOnce(t);

    const terms: Array<Term> = await getTerms( 'http://localhost:8080' );

    expect( terms ).toBeDefined();

    expect( terms.length ).toBe( 0 );
  });
});

describe('getRateTypes', () => {

  afterEach(() => {
    // cleaning up the mess left behind the previous test
    mockAxios.reset();
  });
  it('should be defined', () => {
    expect(getRateTypes).toBeDefined();
  });

  it('should get a list of Rate Types', async () =>{

    const rt: AxiosResponse<Array<RateType>> =  getMockResponse([
      RateType.FIXED,
      RateType.VARIABLE
      ]);

    mockAxios.get.mockResolvedValueOnce(rt);

    const rateTypes: Array<RateType> = await getRateTypes( 'http://localhost:8080' );

    expect( rateTypes ).toBeDefined();

    expect( rateTypes.length ).toBe( 2 );
  });
});

describe('getInterestRate', () => {

  afterEach(() => {
    // cleaning up the mess left behind the previous test
    mockAxios.reset();
  });
  it('should be defined', () => {
    expect(getInterestRate).toBeDefined();
  });

  it('should get Fixed Interest Rate', async () =>{

    const rt: AxiosResponse<InterestRate> = getMockSingleResponse({
      type: RateType.FIXED,
      rate: 1.21
    });

    mockAxios.get.mockResolvedValueOnce(rt);

    const interestRate: InterestRate = await getInterestRate( 'http://localhost:8080', 'FIXED' );

    expect( interestRate ).toBeDefined();

    expect( interestRate.rate ).toBe( 1.21 );
  });

  it('should get Variable Interest Rate', async () =>{

    const rt: AxiosResponse<InterestRate> =  getMockSingleResponse({
      type: RateType.VARIABLE,
      rate: 1.01
    });

    mockAxios.get.mockResolvedValueOnce(rt);

    const interestRate: InterestRate = await getInterestRate( 'http://localhost:8080', 'VARIABLE' );

    expect( interestRate ).toBeDefined();

    expect( interestRate.rate ).toBe( 1.01 );
  });
});

describe('getAmortizationPeriod', () => {

  afterEach(() => {
    // cleaning up the mess left behind the previous test
    mockAxios.reset();
  });
  it('should be defined', () => {
    expect(getAmortizationPeriod).toBeDefined();
  });

  it('should get Amortization Rate', async () =>{

    const ap: AxiosResponse<AmortizationPeriod> =  getMockSingleResponse({
      months:  [
            {
                "label": "1 Month",
                "value": 1
            },
            {
                "label": "2 Months",
                "value": 2
            }
      ],
      years : [
        {
          "label": "1 Year",
          "value": 1
        },
        {
            "label": "2 Years",
            "value": 2
        }
      ]
    });

    mockAxios.get.mockResolvedValueOnce(ap);

    const amortizationPeriod: AmortizationPeriod = await getAmortizationPeriod( 'http://localhost:8080');

    expect( amortizationPeriod ).toBeDefined();

    expect( amortizationPeriod.months ).toBeDefined();
    expect( amortizationPeriod.months.length ).toBe(2);
    expect( amortizationPeriod.years ).toBeDefined();
    expect( amortizationPeriod.years.length ).toBe(2);
  });
});


describe('getPaymentFrequency', () => {

  afterEach(() => {
    // cleaning up the mess left behind the previous test
    mockAxios.reset();
  });
  it('should be defined', () => {
    expect(getPaymentFrequency).toBeDefined();
  });

  it('should get Payment Frequencies', async () =>{

    const pf: AxiosResponse<Array<PaymentFrequency>> =  getMockResponse([
      {
          "label": "Weekly",
          "value": 52
      },
      {
          "label": "Accelerated Bi-Weekly",
          "value": 26
      },
      {
          "label": "Semi-Monthly",
          "value": 24
      },
      {
          "label": "Monthly",
          "value": 12
      }
  ]);

    mockAxios.get.mockResolvedValueOnce(pf);

    const paymentFrequencies: Array<PaymentFrequency> = await getPaymentFrequency( 'http://localhost:8080');

    expect( paymentFrequencies ).toBeDefined();

    expect( paymentFrequencies.length ).toBe(4)
  });
});