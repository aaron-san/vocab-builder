// import { expect, describe, test } from '@jest/globals';

import { test, describe, expect } from "vitest";
import Header from "../components/Header";
import { render, screen } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";

describe("Header", () => {
  //   test("header contains 'Vocab Builder'", async () => {
  //     render(<Header />);
  //     screen.debug();
  //     expect(2).toBe(2);
  // });
  test("header contains text 'vocab builder'", () => {
    render(
      <BrowserRouter>
        <Header />
      </BrowserRouter>
    );
    const title = screen.getByText(/vocab builder/i);
    expect(title).toBeInTheDocument();
  });
});
