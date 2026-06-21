import { BrowserRouter, Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import ScrollToTopButton from "./components/ScrollToTopButton";

import Home from "./pages/Home";
import About from "./pages/About";
import Products from "./pages/Products";
import Services from "./pages/Services";
import Contact from "./pages/Contact";
import ExportMarkets from "./pages/ExportMarkets";

import RedChilli from "./pages/products/RedChilli";
import Turmeric from "./pages/products/Turmeric";
import Ginger from "./pages/products/Ginger";
import Moringa from "./pages/products/Moringa";
import ABCPowder from "./pages/products/ABCPowder";

function App() {
  return (
    <BrowserRouter>
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/products" element={<Products />} />
        <Route path="/services" element={<Services />} />
        <Route path="/export-markets" element={<ExportMarkets />} />
        <Route path="/contact" element={<Contact />} />

        <Route
          path="/products/red-chilli-powder"
          element={<RedChilli />}
        />

        <Route
          path="/products/turmeric-powder"
          element={<Turmeric />}
        />

        <Route
          path="/products/ginger-powder"
          element={<Ginger />}
        />

        <Route
          path="/products/moringa-powder"
          element={<Moringa />}
        />

        <Route
          path="/products/abc-juice-powder"
          element={<ABCPowder />}
        />
      </Routes>

      <ScrollToTopButton />
      <Footer />
    </BrowserRouter>
  );
}

export default App;