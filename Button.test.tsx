import React from "react";
import Button from "./Button";
import { render } from "@testing-library/react";
import { test } from "@jest/globals";

test("Testing button component", () => {
    render(<Button />);
});