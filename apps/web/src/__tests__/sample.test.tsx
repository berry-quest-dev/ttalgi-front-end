import { render, screen } from "@testing-library/react";

describe("Sample Test", () => {
  it("renders correctly", () => {
    render("Hello, Jest!");
    expect(screen.getByText("Hello, Jest!")).toBeInTheDocument();
  });
});
