import React, { useState } from "react";
import "./App.css";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import { mappingData } from "./data";
import Add from "./components/Add";
import Home from "./components/Home";
import Navbar from "./components/Navbar";
import ShowPost from "./components/ShowPost";

function App() {
  const [auth, setAuth] = useState(false);
  const [data, setData] = useState(mappingData);
  const [wallet, setWallet] = useState(null);

  const trim = (content) => {
    let ret;
    if (content.length > 40) {
      ret = content.substring(0, 40) + "...";
    } else {
      ret = content;
    }
    return ret;
  };

  return (
    <Router>
      <div
        style={{
          display: "grid",
          gridTemplateRows: "10vh 90vh",
        }}
      >
        <Navbar />
        <Routes>
          <Route
            exact
            path="/"
            element={<Home trim={trim} mappingData={data} />}
          />
          <Route
            exact
            path="/add"
            element={
              <Add
                auth={auth}
                setAuth={setAuth}
                data={data}
                setData={setData}
                setWallet={setWallet}
                wallet={wallet}
              />
            }
          />
          <Route
            exact
            path="/post/:id"
            element={<ShowPost data={data} setData={setData} />}
          />
        </Routes>
      </div>
    </Router>
  );
}

export default App;