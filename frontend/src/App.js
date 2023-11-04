import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Login1 from "./component/Login/Login1";
import Signup from "./component/Login/Signup";
import Home from "./component/pages/Home";

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/login" element={<Login1 />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/home" element={<Home />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
