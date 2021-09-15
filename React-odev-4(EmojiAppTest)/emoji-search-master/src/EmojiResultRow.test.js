import React from "react";
import { screen, render, debug } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import EmojiResults from "./EmojiResults";
import filterEmoji from "./filterEmoji";

describe("Emoji testleri", () => {
  let button;
  beforeEach(() => {
    render(
      <EmojiResults
        emojiData={[
          {
            title: "100",
            symbol: "💯",
            keywords:
              "hundred points symbol symbol wow wow win win perfect perfect parties parties",
          },
        ]}
      />
    );
  });

  test("Copy Emoji", () => {
    const button = screen.queryByText(/Click to copy emoji/i);
    userEvent.click(button);
    console.log(button.clipboardData.getData("text"));
    expect(button.getAttribute("data-clipboard-text")).toEqual("💯");
  });
});
