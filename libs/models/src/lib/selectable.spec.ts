import { Selectable } from './selectable';

describe('Selectable', () => {
  it('should validate interface Selectable', () => {
    const selectable: Selectable = {
      label: 'Monthly',
      value: 12,
    };
    expect(selectable).toBeDefined();
    expect(selectable.label).toBe('Monthly');
    expect(selectable.value).toBe(12);
  });
});
