import { createHTTPConnection, CalculatorHttpHeader, CalculatorHttpConnection } from './http-common';

describe('createHTTPConnection', () => {
  it('should expect create Http Connection to be defined', () => {
    expect(createHTTPConnection).toBeDefined();
  });

  it('should expect create Http Connection', () => {
    const baseUrl = 'http://localhost:8080';
    const headers: CalculatorHttpHeader = {"Content-type":"application/json"};

    const httpConnection: CalculatorHttpConnection = createHTTPConnection( baseUrl, headers );

    expect( httpConnection ).toBeDefined();
    expect( httpConnection.defaults.baseURL).toBe( baseUrl );

  });
});
