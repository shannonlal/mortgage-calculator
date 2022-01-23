import { MortgageRequest } from './mortgage-request';

describe('MortgageRequest', () => {
  it('should validate interface MortgageRequest', () => {
    const mortgageRequest: MortgageRequest = {
      brokerName :'J. Smith',
      clientName : 'Bob Name',
      createDate : new Date()
    };
    expect(mortgageRequest).toBeDefined();
    expect(mortgageRequest.clientName).toBe('J. Smith');
  });
});
