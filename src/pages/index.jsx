import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Api } from "./Api";
import { Home } from "./Home";

export function Pages() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/api" element={<Api />} />
      </Routes>
    </BrowserRouter>
  );
}
