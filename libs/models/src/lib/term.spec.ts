import { Term } from './term';

describe('Term', () => {
  it('should validate interface Term exists', () => {
    const term: Term = {
      label: '12 Years',
      value: 12,
    };

    expect(term).toBeDefined();
    expect(term.value).toBe(12);
    expect(term.label).toBe('12 Years');
  });
});
