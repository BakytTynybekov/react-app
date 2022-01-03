import React from "react";
import "./App.scss";
import {
  Home,
  News,
  Clients,
  Cases,
  Contacts,
  Layout,
  Smm,
  Ppc,
  Development,
  Serm,
} from "./components/index";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="clients" element={<Clients />} />
            <Route path="news" element={<News />} />
            <Route path="cases" element={<Cases />} />
            <Route path="contacts" element={<Contacts />} />
            <Route path="smm" element={<Smm />} />
            <Route path="ppc" element={<Ppc />} />
            <Route path="development" element={<Development />} />
            <Route path="serm" element={<Serm />} />
          </Route>
        </Routes>
      </>
    </div>
  );
}

export default App;
