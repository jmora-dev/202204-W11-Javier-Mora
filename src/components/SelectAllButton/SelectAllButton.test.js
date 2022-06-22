import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import SelectAllButton from "./SelectAllButton";

describe("Given SelectAllButton component", () => {
  describe("When isAllSelected is true", () => {
    test("The text should be unselect all", () => {
      render(<SelectAllButton isAllSelected={true} selectAll={() => {}} />);
      const element = screen.getByText(/unselect all/i);
      expect(element).toBeInTheDocument();
    });

    test("On click should call the function", () => {
      const selectAllMock = jest.fn();
      render(
        <SelectAllButton isAllSelected={true} selectAll={selectAllMock} />
      );
      const element = screen.getByText(/unselect all/i);
      userEvent.click(element);
      expect(selectAllMock).toHaveBeenCalled();
    });
  });

  describe("When isAllSelected is false", () => {
    test("The text should be select all", () => {
      render(<SelectAllButton isAllSelected={false} selectAll={() => {}} />);
      const element = screen.getByText(/select all/i);
      expect(element).toBeInTheDocument();
    });

    test("On click should call the function", () => {
      const selectAllMock = jest.fn();
      render(
        <SelectAllButton isAllSelected={false} selectAll={selectAllMock} />
      );
      const element = screen.getByText(/select all/i);
      userEvent.click(element);
      expect(selectAllMock).toHaveBeenCalled();
    });
  });
});
