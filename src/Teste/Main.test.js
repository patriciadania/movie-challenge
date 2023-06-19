/* eslint-disable testing-library/prefer-screen-queries */
import React from "react";
import { render, fireEvent, screen } from "@testing-library/react";
import Main from "../Componentes/Main";
import "@testing-library/jest-dom/extend-expect"; 

test("renders Main component", () => {
    render(<Main />);
  });
  
  test("displays movie categories", () => {
    render(<Main />);
    const popularLink = screen.getByText("Popular");
    const theatreLink = screen.getByText("Theatre");
    const kidsLink = screen.getByText("Kids");
    const dramaLink = screen.getByText("Drama");
    const comedyLink = screen.getByText("Comedie");
  
    expect(popularLink).toBeInTheDocument();
    expect(theatreLink).toBeInTheDocument();
    expect(kidsLink).toBeInTheDocument();
    expect(dramaLink).toBeInTheDocument();
    expect(comedyLink).toBeInTheDocument();
  });
  
  test("searches for a movie", () => {
    render(<Main />);
    const searchInput = screen.getByPlaceholderText("Enter Movie Name");
  
    fireEvent.change(searchInput, { target: { value: "Avengers" } });
    fireEvent.keyPress(searchInput, { key: "Enter", code: 13, charCode: 13 });
  
  });