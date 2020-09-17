import React from 'react';
import { render, fireEvent, wait } from '@testing-library/react';
import { api } from '../../services/api'
import App from './App';


const mockSearch = (api.search = jest.fn());

test('renders the correct content', () => {
  const { getByText, getByTestId, getByAltText } = render(<App></App>)

  getByText("This is a page forbeauty product search");
  getByTestId("search-input");
  getByText("Search");
  getByAltText("hand picking a beauty product");
});

test('a list of item is displayed after the user search', async () => {
  const { getByText, getByTestId } = render(<App></App>)
  const searchQuery = "cream"
  mockSearch.mockResolvedValueOnce([{ id: 123, name: "cream", brand: "garnier" }]);

  const input = getByTestId("search-input");
  const button = getByText("Search");

  fireEvent.change(input, { target: { value: searchQuery } });
  fireEvent.click(button);

  await wait(() => getByText("Cream"))
});

test('a message is displayed if there is no result after the user search', async () => {
  const { getByText, getByTestId } = render(<App></App>)
  const searchQuery = "cream"
  mockSearch.mockResolvedValueOnce([]);

  const input = getByTestId("search-input");
  const button = getByText("Search");

  fireEvent.change(input, { target: { value: searchQuery } });
  fireEvent.click(button);

  await wait(() => getByText("No result found"))
});