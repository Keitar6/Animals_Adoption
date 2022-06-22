import { render } from "react-dom";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import { StrictMode, useState } from "react";
import ThemeContext from "./ThemeContext";
import SearchParams from "./SearchParams";
import Details from "./Detail";
import Biklak from "./Biklak";
const RApp = () => {
  const theme = useState("#ff4e60");
  return (
    <StrictMode>
      <ThemeContext.Provider value={theme}>
        <BrowserRouter>
          <header>
            <Link to="/"> Adopt Me! </Link>
          </header>
          <Routes>
            <Route path="/details/:id" 
            element={<Details />} />
            <Route path="/Biklak" element={<Biklak />} />
            <Route path="/" element={<SearchParams />} />
          </Routes>
        </BrowserRouter>
      </ThemeContext.Provider>
    </StrictMode>
  );
};

render(<RApp />, document.getElementById("root"));
