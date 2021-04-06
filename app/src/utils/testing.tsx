import React from 'react';
import { Provider } from 'react-redux';
import { render } from '@testing-library/react';
import { RootState } from '@redux/reducer';
import { buildStore } from '../redux/store';

// eslint-disable-next-line no-undef
export function renderWithRedux(component: JSX.Element, mockStore?: RootState) {
  const store = mockStore ? buildStore(mockStore) : buildStore(mockStore);
  const queries = render(<Provider store={store}>{component}</Provider>);

  return {
    ...queries,
    store,
  };
}
