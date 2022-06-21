import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import GentlemanCardButton, { BUTTON_VARIANTS } from "./GentlemanCardButton";

describe("Given GentlemanCardButton component", () => {
  describe("When variant is danger", () => {
    test("Should have classes gentleman__icon--delete fas fa-times", () => {
      render(
        <GentlemanCardButton
          variant={BUTTON_VARIANTS.DANGER}
          action={() => {}}
        />
      );
      const element = screen.getByRole("button", {
        class: /gentleman__icon--delete fas fa-times/,
      });
      expect(element).toBeInTheDocument();
    });
  });

  describe("When variant is success", () => {
    test("Should have classes fas fa-check", () => {
      render(
        <GentlemanCardButton
          variant={BUTTON_VARIANTS.SUCCESS}
          action={() => {}}
        />
      );
      const element = screen.getByRole("button", {
        class: /fas fa-check/,
      });
      expect(element).toBeInTheDocument();
    });
  });

  describe("When click the button", () => {
    test("Should call the function", () => {
      const actionMock = jest.fn();
      render(
        <GentlemanCardButton
          variant={BUTTON_VARIANTS.DANGER}
          action={actionMock}
        />
      );
      const element = screen.getByRole("button");
      userEvent.click(element);
      expect(actionMock).toHaveBeenCalled();
    });
  });
});
