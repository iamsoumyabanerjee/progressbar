import React from "react";
import { render, screen } from "@testing-library/react";
import App from "./App";

describe("#App", () => {
  const props = {
    bar: [25, 50, 75],
    controllers: [-25, -10, 10, 25],
  };
  test("it renders only one select", () => {
    render(<App config={props} />);
    const selectController = screen.getAllByTestId("select-controller");
    expect(selectController).toHaveLength(1);
  });

  test("it renders options same as the count of bar", () => {
    render(<App config={props} />);
    const options = screen.getAllByTestId(/^progrss-bar-/);
    expect(options.length).toBe(props.bar.length);
  });

  test("it renders buttons same as the count of controllers", () => {
    render(<App config={props} />);
    const buttons = screen.getAllByTestId(/^button-container-/);
    expect(buttons.length).toBe(props.controllers.length);
  });
});
