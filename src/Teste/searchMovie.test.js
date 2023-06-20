import { base_url } from "../Componentes/ConfigApi";
import { searchMovie } from "../Componentes/SearchMovie";

describe("searchMovie", () => {
  test("should set the correct URL and clear the search input", () => {
    const setUrl = jest.fn();
    const setSearch = jest.fn();
    const evt = {
      key: "Enter",
    };
    const search = "example";

    searchMovie(evt, setUrl, setSearch, search);

    expect(setUrl).toHaveBeenCalledWith(
      `${base_url}/search/movie?api_key=db95773a7fb212ba790d71f6adac0e7e&query=${search}`
    );
    expect(setSearch).toHaveBeenCalledWith("");
  });

  test("should not set the URL and clear the search input if key is not 'Enter'", () => {
    const setUrl = jest.fn();
    const setSearch = jest.fn();
    const evt = {
      key: "Escape",
    };
    const search = "example";

    searchMovie(evt, setUrl, setSearch, search);

    expect(setUrl).not.toHaveBeenCalled();
    expect(setSearch).not.toHaveBeenCalled();
  });
});
