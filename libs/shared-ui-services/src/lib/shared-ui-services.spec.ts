import mockAxios from 'jest-mock-axios';
import { RateType, Term } from '@mortgage-calculator/models';

import { getTerms, getRateTypes } from './shared-ui-services';

jest.mock('axios');

describe('getTerms', () => {

  afterEach(() => {
    // cleaning up the mess left behind the previous test
    mockAxios.reset();
  });
  it('should be defined', () => {
    expect(getTerms).toBeDefined();
  });

  it('should get a list of multiple terms', async () =>{

    const t: Array<Term> =  [
      {
          "label": "1 Year",
          "value": 1
      },
      {
          "label": "2 Years",
          "value": 2
    }];

    mockAxios.get.mockResolvedValueOnce(t);

    const terms: Array<Term> = await getTerms( 'http://localhost:8080' );

    expect( terms ).toBeDefined();

    expect( terms.length ).toBe( 2 );
  });

  it('should get a list of one terms', async () =>{

    const t: Array<Term> =  [
      {
          "label": "1 Year",
          "value": 1
      }];

    mockAxios.get.mockResolvedValueOnce(t);

    const terms: Array<Term> = await getTerms( 'http://localhost:8080' );

    expect( terms ).toBeDefined();

    expect( terms.length ).toBe( 1 );
  });

  it('should get an empty list of terms', async () =>{

    const t: Array<Term> =  [];

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

    const rt: Array<RateType> =  [
      RateType.FIXED,
      RateType.VARIABLE
      ];

    mockAxios.get.mockResolvedValueOnce(rt);

    const rateTypes: Array<RateType> = await getRateTypes( 'http://localhost:8080' );

    expect( rateTypes ).toBeDefined();

    expect( rateTypes.length ).toBe( 2 );
  });
});

