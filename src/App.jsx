import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./components/Home";
import CreateUser from "./components/CreateUser";
import Users from "./components/Users";
import UpdateUser from "./components/UpdateUser";
import SearchEmp from "./components/SearchEmp";

const App = () => {
  return (
    <BrowserRouter>
      <Home />
      <Routes>
        <Route path="/" element={<CreateUser />} />
        <Route path="/users" element={<Users />} />
        <Route path="/update/:abc/" element={<UpdateUser/>} />
        <Route path="/search" element={<SearchEmp/>}/>

      </Routes>
    </BrowserRouter>
  );
};

export default App;
