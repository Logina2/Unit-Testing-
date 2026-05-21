import { render, screen, waitFor } from "@testing-library/react";
import axios from "axios";
import HeroesFromAPI from "../tests/lab/Heroes";

import { vi } from "vitest";

vi.mock("axios");

test('should display "No heroes available" when API returns empty list', async () => {
  axios.get.mockResolvedValue({ data: [] });

  render(<Heroes />);

  expect(await screen.findByText("No heroes available")).toBeInTheDocument();
});

test("should render heroes after API fetch", async () => {
  axios.get.mockResolvedValue({
    data: [
      { id: 10, name: "super man", strength: 20 },
      { id: 11, name: "bat man", strength: 12 },
    ],
  });

  render(<Heroes />);

  await waitFor(() => {
    expect(screen.getByText(/super man/)).toBeInTheDocument();
    expect(screen.getByText(/bat man/)).toBeInTheDocument();
  });
});


test("should show error message on API failure", async () => {
  axios.get.mockRejectedValue(new Error("500"));

  render(<Heroes />);

  expect(await screen.findByText("Failed to fetch heroes")).toBeInTheDocument();
});
