import { BrowserRouter, Route, Routes } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "react-query";
import { ReactQueryDevtools } from "react-query/devtools";

import "./App.css";

import Home from "./Pages/Home/Home";
import Machine from "./Pages/Machine/Machine";
import MonitorData from "./Pages/Monitor/MonitorData";
import LoginPage from "./Pages/Login/Login.js";
import SignUpPage from "./Pages/SignUp/SignUp";
import Devices from "./Pages/Devices/Devices";
import PrivateRoutes from "./Utils/PrivateRoutes"

const queryClient = new QueryClient();
function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <BrowserRouter>
          <Routes>
            <Route element={<PrivateRoutes />}>
              <Route exact path="/home" element={<Home />} />
              <Route exact path="/monitor" element={<MonitorData />} />
              <Route exact path="/machine" element={<Machine />} />
              <Route exact path="/devices" element={<Devices />} />
            </Route>
            <Route exact  path="/" element={<LoginPage />} />
            <Route exact path="/sign-up" element={<SignUpPage />} />
          </Routes>
      </BrowserRouter>
      <ReactQueryDevtools initialIsOpen={false} />
    </QueryClientProvider>
  );
}

export default App;
