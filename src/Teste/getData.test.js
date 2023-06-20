import { API_key, base_url } from "../Componentes/ConfigApi";
import getData from "../Componentes/GetData";

describe("getData", () => {
  test("should set the correct URL for 'Popular' movie type", () => {
    const setUrl = jest.fn();
    getData("Popular", setUrl);
    expect(setUrl).toHaveBeenCalledWith(
      `${base_url}/discover/movie?sort_by=popularity.desc${API_key}`
    );
  });

  test("should set the correct URL for 'Teatro' movie type", () => {
    const setUrl = jest.fn();
    getData("Teatro", setUrl);
    expect(setUrl).toHaveBeenCalledWith(
      `${base_url}/discover/movie?primary_release_date.gte=2014-09-15&primary_release_date.lte=2014-10-22${API_key}`
    );
  });


});
