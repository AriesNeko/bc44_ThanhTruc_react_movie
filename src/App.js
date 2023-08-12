import logo from "./logo.svg";
import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomePage from "./Pages/HomePage/HomePage";
import LoginPage from "./Pages/LoginPage/LoginPage";
import DetailPage from "./Pages/DetailPage/DetailPage";
import NotFoundPage from "./Pages/NotFoundPage/NotFoundPage";
import Spinner from "./Components/Spinner/Spinner";
import Layout from "./Layout/Layout";

function App() {
  return (
    <div>
      <Spinner />
      <BrowserRouter>
        <Routes>
          {/* <Route path="/" element={<HomePage />} /> */}
          <Route path="/" element={<Layout contentPage={<HomePage />} />} />
          <Route path="/login" element={<LoginPage />} />
          {/* <Route path="/detail/:id" element={<DetailPage />} /> */}
          <Route
            path="/detail/:id"
            element={<Layout contentPage={<DetailPage />} />}
          />
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
