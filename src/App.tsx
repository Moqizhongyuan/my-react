import { Link, Navigate, Route, Routes } from "react-router-dom";
import Home from "./page/Home";
import About from "./page/About";
import Login from "./page/Login";
import { useState } from "react";
import NotFound from "./page/NotFound";

function App() {
  const [token, setToken] = useState(localStorage.getItem("token"));
  function logout() {
    localStorage.removeItem("token");
    setToken("");
  }
  if (token) {
    return (
      <div>
        <div className="nav">
          <Link to={"home"}>Home</Link>
          <Link to={"about"}>About</Link>
        </div>
        <div className="content">
          <Routes>
            <Route path="/" element={<Navigate to={"/home"} />} />
            <Route path="/home" element={<Home />} />
            <Route path="/About" element={<About />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </div>
        <div className="footer">
          <button onClick={() => logout()}>登出</button>
        </div>
      </div>
    );
  } else {
    return (
      <div>
        <Routes>
          <Route path="*" element={<Navigate to={"/login"} />} />
          <Route path="/login" element={<Login setToken={setToken} />} />
        </Routes>
      </div>
    );
  }
}

export default App;
