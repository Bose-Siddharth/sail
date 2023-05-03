import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Layout from "./Components/Layout";
import Home from "./Pages/Home";
import Machine from "./Pages/Machine";

function App() {
  return (
    <BrowserRouter>
      <Layout>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/account" element={<Machine />} />
        </Routes>
      </Layout>
    </BrowserRouter>
  );
}

export default App;
