import React from "react";
import { test } from "@jest/globals";
import { render } from "@testing-library/react";
import Button from "./Button";

test("Testing button component", () => {
    render(<Button />);
});