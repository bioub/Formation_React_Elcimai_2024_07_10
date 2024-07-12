import { expect, test, vitest } from "vitest";
import { render, screen } from "@testing-library/react";
import { userEvent } from "@testing-library/user-event";
import Select from "./Select";
import '@testing-library/jest-dom/vitest';

test('Select renders', () => {
  render(<Select items={['Toto', 'Titi']} value="Titi" onValueChange={() => {}} />)
});

test('Select renders value', () => {
  render(<Select items={['Toto', 'Titi']} value="Titi" onValueChange={() => {}} />)
  expect(screen.queryByText('Titi')).toBeVisible()
  expect(screen.queryByText('Toto')).toBeNull();
});

test('Select opens menu on click', async () => {
  render(<Select items={['Toto', 'Titi']} value="Titi" onValueChange={() => {}} />)
  await userEvent.click(screen.getByText('Titi'));
  expect(screen.queryByText('Toto')).toBeVisible();
});

test('Select calls onValueChange', async () => {
  // let calls = 0;
  // function spy() {
  //   calls++;
  // }
  const spy = vitest.fn();

  render(<Select items={['Toto', 'Titi']} value="Titi" onValueChange={spy} />)
  await userEvent.click(screen.getByText('Titi')); // open menu
  await userEvent.click(screen.getByText('Toto')); // click on menu item
 
  expect(spy).toHaveBeenCalledWith('Toto');
});
