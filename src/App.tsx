import React, { useState } from "react";
import logo from "./logo.svg";
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Index from "./pages/index/Index";
import Search from "./pages/Search";
import Player from "./components/Player";
import TopNav from "./components/TopNav";
import LeftNav from "./components/LeftNav";
import { Nav } from "@douyinfe/semi-ui";
import { IconUser, IconStar, IconSetting } from "@douyinfe/semi-icons";

function App() {
    const [count, setCount] = useState(0);

    return (
        <div style={{ height: "100vh" }}>
            <Router>
                <TopNav></TopNav>
                <div
                    style={{ height: "calc(100vh - 100px)" }}
                    className={"flex"}
                >
                    {/* <div className=""> */}

                    {/* </div> */}
                    <LeftNav></LeftNav>
                    {/* <div> */}
                    <Routes>
                        <Route path="/" element={<Index />}></Route>
                        <Route path="/search" element={<Search />}></Route>
                    </Routes>
                    {/* </div> */}
                </div>

                <Player></Player>
            </Router>
        </div>
    );
}

export default App;
