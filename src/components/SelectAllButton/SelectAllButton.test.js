import { render, screen } from "@testing-library/react";
import SelectAllButton from "./SelectAllButton";

describe("Given SelectAllButton component", () => {
  describe("When isAllSelected is true", () => {
    test("The text should be unselect all", () => {
      render(<SelectAllButton isAllSelected={true} selectAll={() => {}} />);
      const element = screen.getByText(/unselect all/i);
      expect(element).toBeInTheDocument();
    });
  });
});
