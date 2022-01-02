import React from "react";
import "./App.scss";
import {
  Home,
  News,
  Clients,
  Cases,
  Contacts,
  Layout,
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
          </Route>
        </Routes>
      </>
    </div>
  );
}

export default App;
