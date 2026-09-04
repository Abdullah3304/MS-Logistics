import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";
import Home from "./pages/Home";
import Services from "./pages/Services";
import Fleet from "./pages/Fleet";
import Partnerships from "./pages/Partnerships";
import About from "./pages/About";
import Quote from "./pages/Quote";
import Contact from "./pages/Contact";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="services" element={<Services />} />
          <Route path="fleet" element={<Fleet />} />
          <Route path="partnerships" element={<Partnerships />} />
          <Route path="about" element={<About />} />
          <Route path="quote" element={<Quote />} />
          <Route path="contact" element={<Contact />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
