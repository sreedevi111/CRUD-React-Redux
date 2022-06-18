import { render, fireEvent, screen, waitFor, getByText, findByTitle, findByTestId } from "@testing-library/react";
import { Provider } from "react-redux";
import userEvent from "@testing-library/user-event";

import AddPost from "./AddPost";
import { store } from "../app/store";

const setup = () => {
  const utils = render(
    <Provider store={store}>
      <AddPost />
    </Provider>
  );
  //   const input = utils.findByLabelText("Title");
  const input = utils.getByTestId("content-input");
  return {
    input,
    ...utils,
  };
};

test("check if entered value is as same the value in the text box", () => {
  const { input } = setup();
  fireEvent.change(input, { target: { value: "23" } });
  expect(input.value).toBe("23");
});

