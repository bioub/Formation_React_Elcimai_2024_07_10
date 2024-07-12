import { expect, test } from "vitest";
import { render, screen } from "@testing-library/react";
import Hello from "./Hello";
import '@testing-library/jest-dom/vitest';


// import { createRoot } from "react-dom/client";
// import { act } from "react";

// test('Hello renders', () => {
//   const rootEl = document.createElement('div');
//   createRoot(rootEl).render(
//     <Hello name="Romain" age={38} />
//   );
// });

// test('Hello renders Hello my name is...', () => {
//   const rootEl = document.createElement('div');
//   act(() => {
//     createRoot(rootEl).render(
//       <Hello name="Romain" age={38} />
//     );
//   });
//   expect(rootEl.innerText).toContain('Hello my name is Romain');
// });

test('Hello renders', () => {
  render(<Hello name="Romain" age={38} />)
});

test('Hello renders Hello my name is...', () => {
  render(<Hello name="Romain" age={38} />)

  expect(screen.queryByText('Hello my name is Romain, I\'m 38 and my status is inactive')).toBeInTheDocument();
});