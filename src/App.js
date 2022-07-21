import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Register from "./Screens/auth/Register";
import Login from "./Screens/auth/Login";
import Header from "./Components/Header/Header";
import Home from "./Screens/Home/Home";
import Search from "./Components/Search/Search";

function App() {
  return (
    <>
      <BrowserRouter>
        <div className="App">
          <Header />
          
          <Routes>
          <Route element={<Search />} path="/" />
            <Route element={<Register />} path="/register" />
            <Route element={<Login />} path="/login" />
            <Route element={<Home />} path="/homepage" />
          </Routes>
        </div>
      </BrowserRouter>
    </>
  );
}

export default App;
