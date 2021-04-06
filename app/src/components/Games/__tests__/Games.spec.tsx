import { waitFor } from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'
import { Games } from "../Games";
import { renderWithRedux } from '@utils/testing';
import { watchMock } from '@utils/testHelper';

watchMock();

describe('components/Games', () => {
  it('should component render', () => {
    const wrapper = renderWithRedux(<Games />);

    expect( wrapper.getByText('Games List') ).toBeTruthy();
  });

  it('should render games list and show and hide loader', async () => {
    const wrapper = renderWithRedux(<Games />);

    expect(wrapper.getByText('Loading ...')).toBeTruthy();
    await waitFor(() => expect(wrapper.getByText('Game mock title 1')).toBeTruthy());
    expect(wrapper.queryByTestId('loader')).toBeNull();
  });
});