import { render, screen } from "@testing-library/react";
import ShowDate from "./ShowDate";

test("ShowDate should be rendered", () => {
  const now = new Date().toDateString();
  render(<ShowDate now={now} />);
  const dateEl = screen.getByText(now);
  expect(dateEl).toBeInTheDocument();
});
