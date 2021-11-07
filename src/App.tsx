import React, { useState } from "react";
import logo from "./logo.svg";
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Index from "./pages/index/Index";
import Player from "./components/Player";
import TopNav from "./components/TopNav";

function App() {
    const [count, setCount] = useState(0);

    return (
        <div>
            <TopNav></TopNav>
            <Router>
                <Routes>
                    <Route path="/" element={<Index />}></Route>
                </Routes>
            </Router>
            <Player></Player>
        </div>
    );
}

export default App;
