import { Suspense } from "react";
import Layouts from "../layouts";
import { Routes, Route } from "react-router-dom";

import Home from "../pages/home";
import Login from "../pages/login";

function App() {
  return (
    <Suspense fallback={<h5>Loading....</h5>}>
      <Routes>
        <Route path="/" element={<Layouts />}>
          <Route index element={<Home />} />
          <Route path="/login" element={<Login />} />
          {/* Complete rest of the route addition */}
        </Route>
      </Routes>
    </Suspense>
  );
}

export default App;
