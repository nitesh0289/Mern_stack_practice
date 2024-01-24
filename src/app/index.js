import { Suspense } from "react";
import Layout from "../layout";
import { Routes, Route } from "react-router-dom";

import Home from "../pages/home";
import Contact from "../pages/contact";
import About from "../pages/about";
import Login from "../pages/login";

function App() {
  return (
    <Suspense fallback={<h5>Loading....</h5>}>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/about" element={<About />} />
          <Route path="/login" element={<Login />} />
          {/* Complete rest of the route addition */}
        </Route>
      </Routes>
    </Suspense>
  );
}

export default App;
