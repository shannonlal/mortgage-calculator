import mockAxios from 'jest-mock-axios';
import { Term } from '@mortgage-calculator/models';

import { getTerms } from './shared-ui-services';

jest.mock('axios');

describe('getTerms', () => {

  afterEach(() => {
    // cleaning up the mess left behind the previous test
    mockAxios.reset();
  });
  it('should be defined', () => {
    expect(getTerms).toBeDefined();
  });

  it('should get a list of terms', async () =>{

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
  })
});
