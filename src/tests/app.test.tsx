import { render } from "@testing-library/react";
import { HelloWorld } from "../app";
import React from "react";

test("Test if hello world is rendered properly", () => {
    const { getByText } = render(<HelloWorld />);
    expect(getByText("Hello World")).toBeInTheDocument();
})