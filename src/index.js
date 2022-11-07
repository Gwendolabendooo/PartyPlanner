import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";

//steel
import "./App.scss";
import "./index.css";

//views
import Home from "./views/Home";
import CreateParty from "./views/CreateParty";

export default function App() {

    let country = localStorage.getItem("country")
      ? localStorage.getItem("country")
      : null

	country ? null : country = "FR"; localStorage.setItem("country", "FR");

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/CreateParty" element={<CreateParty/>} />
      </Routes>
    </BrowserRouter>
  );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);
