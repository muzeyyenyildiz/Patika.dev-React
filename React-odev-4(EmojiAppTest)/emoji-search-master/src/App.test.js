import React from "react";
import { screen, render } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

import App from "./App";



describe("Emoji testleri", ()=>{
  let input, button;
  beforeEach(()=>{
      render(<App/>)
  });

  test("Rendering List", ()=> {
      const items = screen.getAllByText(/Click to copy emoji/i);
      expect(items.length).toEqual(20);
  })

  test("Searching Emoji", ()=> {
    const emojiSearchList = screen.getAllByText(/100/i);
    userEvent.type(input, "100");
    expect(emojiSearchList.length).toEqual(1);
});
 


});