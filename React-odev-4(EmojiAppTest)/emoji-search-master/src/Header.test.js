import React from "react";
import { screen, render } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import Header from "./Header";





describe("Emoji Header test", ()=>{

  beforeEach(()=>{
      render(<Header/>)
     
  });

  test("Rendering title", ()=> {
      const title = screen.getByText(/Emoji Search/i);
      expect(title).toBeInTheDocument;
  })


})