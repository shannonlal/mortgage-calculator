import { render } from '@testing-library/react';

import SharedUiReact from './shared-ui-react';

describe('SharedUiReact', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<SharedUiReact />);
    expect(baseElement).toBeTruthy();
  });
});
