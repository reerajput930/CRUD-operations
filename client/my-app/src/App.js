import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Create from "./component/Create";
import RecordList from "./component/RecordList";
import Navigationbar from "./component/Navigationbar";
import Edit from "./component/Edit";

function App() {
  return (
    <>
      <Navigationbar />

      <div className="container">
        <Routes>
          <Route path="/" element={<Create />} />
          <Route path="/allusers" element={<RecordList />} />
          <Route path="/allusers/edit/:id" element={<Edit/>}/>
        </Routes>
      </div>
    </>
  );
}

export default App;
