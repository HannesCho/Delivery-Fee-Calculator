import { render, screen } from "@testing-library/react";
import InputLabel from "./InputLabel";

test("label should be rendered and show the title", () => {
  render(<InputLabel name="title" />);
  const titleEl = screen.getByText(/title/);
  expect(titleEl).toBeInTheDocument();
});
