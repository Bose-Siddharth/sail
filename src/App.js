import { BrowserRouter, Route, Routes } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "react-query";
import { ReactQueryDevtools } from "react-query/devtools";

import "./App.css";
import PrivateRoutes from "./Utils/PrivateRoutes"

import Home from "./Pages/HomePage/Home";
import Clients from "./Pages/ClientsPage/Clients";
import Assets from "./Pages/AssetsPage/Assets";
import Sensor from "./Pages/SensorPage/Sensor";
import Daignosis from "./Pages/DiagnosisPage/Diagnosis";
import SignIn from "./Pages/SignIn/SignIn";
import SignUp from "./Pages/SignUp/SignUp";

const queryClient = new QueryClient();
function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <BrowserRouter>
          <Routes>
            <Route element={<PrivateRoutes />}>
              <Route exact path="/home" element={<Home />} />
              <Route exact path="/clients" element={<Clients />} />
              <Route exact path="/clients/assets" element={<Assets />} />
              <Route exact path="/clients/assets/sensor-dashboard" element={<Sensor/>} />
              <Route exact path="/diagnosis" element={<Daignosis/>} />
            </Route>
            <Route exact  path="/" element={<SignIn />} />
            <Route exact  path="/sign-in" element={<SignIn />} />
            <Route exact path="/sign-up" element={<SignUp />} />
          </Routes>
      </BrowserRouter>
      <ReactQueryDevtools initialIsOpen={false} />
    </QueryClientProvider>
  );
}

export default App;
