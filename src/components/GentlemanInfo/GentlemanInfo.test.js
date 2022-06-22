import { render, screen } from "@testing-library/react";
import GentlemanInfo from "./GentlemanInfo";

describe("Given GentlemanInfo component", () => {
  describe("When name is name", () => {
    test("Should have heading 2 name", () => {
      const data = {
        id: 1,
        alternativeText: "alternativeText",
        name: "name",
        picture: "pic.jpg",
        profession: "profession",
        selected: true,
        status: "alive",
        twitter: "twitter",
      };
      render(<GentlemanInfo data={data} />);
      const element = screen.getByRole("heading", { level: 2 });
      expect(element).toHaveTextContent("name");
    });
  });

  describe("When profession is developer", () => {
    test("the first list item should have text developer", () => {
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
      render(<GentlemanInfo data={data} />);
      const element = screen.getAllByRole("listitem");
      expect(element[0]).toHaveTextContent(/developer/i);
    });
  });

  describe("When status is alive", () => {
    test("the second list item should have text alive", () => {
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
      render(<GentlemanInfo data={data} />);
      const element = screen.getAllByRole("listitem");
      expect(element[1]).toHaveTextContent(/alive/i);
    });
  });

  describe("When twitter is @twitterDir", () => {
    test("the third list item should have text @twitterDir", () => {
      const data = {
        id: 1,
        alternativeText: "alternativeText",
        name: "name",
        picture: "pic.jpg",
        profession: "developer",
        selected: true,
        status: "alive",
        twitter: "@twitterDir",
      };
      render(<GentlemanInfo data={data} />);
      const element = screen.getAllByRole("listitem");
      expect(element[2]).toHaveTextContent(/@twitterDir/i);
    });
  });
});
