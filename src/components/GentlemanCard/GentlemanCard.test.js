import { render, screen } from "@testing-library/react";
import GentlemanCard from "./GentlemanCard";

describe("Given GentlemanCard component", () => {
  describe("When selected is true", () => {
    test("Should have class gentleman selected", () => {
      const data = {
        id: 1,
        alternativeText: "alternativeText",
        name: "name",
        picture: "pic.jpg",
        profession: "developer",
        selected: true,
        status: "alive",
        twitter: "twitter",
      };

      const deleteFnMock = jest.fn();
      const selectFnMock = jest.fn();

      render(
        <GentlemanCard
          data={data}
          deleteGentleman={deleteFnMock}
          selectGentleman={selectFnMock}
        />
      );

      const element = screen.getAllByRole("listitem");
      expect(element[0]).toHaveAttribute(
        "class",
        expect.stringMatching("gentleman selected")
      );
    });
  });

  describe("When selected is false", () => {
    test("Should have class gentleman", () => {
      const data = {
        id: 1,
        alternativeText: "alternativeText",
        name: "name",
        picture: "pic.jpg",
        profession: "developer",
        selected: false,
        status: "alive",
        twitter: "twitter",
      };

      const deleteFnMock = jest.fn();
      const selectFnMock = jest.fn();

      render(
        <GentlemanCard
          data={data}
          deleteGentleman={deleteFnMock}
          selectGentleman={selectFnMock}
        />
      );

      const element = screen.getAllByRole("listitem");
      expect(element[0]).toHaveAttribute(
        "class",
        expect.stringMatching("gentleman")
      );
    });
  });

  describe("When picture is pic.jpg", () => {
    test("Img should src img/pic.jpg", () => {
      const data = {
        id: 1,
        alternativeText: "alternativeText",
        name: "name",
        picture: "pic.jpg",
        profession: "developer",
        selected: false,
        status: "alive",
        twitter: "twitter",
      };

      const deleteFnMock = jest.fn();
      const selectFnMock = jest.fn();

      render(
        <GentlemanCard
          data={data}
          deleteGentleman={deleteFnMock}
          selectGentleman={selectFnMock}
        />
      );

      const element = screen.getByRole("img");
      expect(element).toHaveAttribute(
        "src",
        expect.stringMatching("img/pic.jpg")
      );
    });
  });

  describe("When alternativeText is imgTitle", () => {
    test("Img alternativeText should be imgTitle", () => {
      const data = {
        id: 1,
        alternativeText: "imgTitle",
        name: "name",
        picture: "pic.jpg",
        profession: "developer",
        selected: false,
        status: "alive",
        twitter: "twitter",
      };

      const deleteFnMock = jest.fn();
      const selectFnMock = jest.fn();

      render(
        <GentlemanCard
          data={data}
          deleteGentleman={deleteFnMock}
          selectGentleman={selectFnMock}
        />
      );

      const element = screen.getByAltText("imgTitle");
      expect(element).toBeInTheDocument();
    });
  });

  describe("When picture starts with 'p'", () => {
    test("Span should be 'P' and include the class gentleman__initial", () => {
      const data = {
        id: 1,
        alternativeText: "imgTitle",
        name: "name",
        picture: "pic.jpg",
        profession: "developer",
        selected: false,
        status: "alive",
        twitter: "twitter",
      };

      const deleteFnMock = jest.fn();
      const selectFnMock = jest.fn();

      render(
        <GentlemanCard
          data={data}
          deleteGentleman={deleteFnMock}
          selectGentleman={selectFnMock}
        />
      );

      const element = screen.getByText(/^P$/);
      expect(element).toBeInTheDocument();
      expect(element).toHaveAttribute(
        "class",
        expect.stringMatching("gentleman__initial")
      );
    });
  });
});
