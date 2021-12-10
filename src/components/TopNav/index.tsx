import React from "react";
import { FC } from "react";
import Search from "../Search";
import { Link } from "react-router-dom";

const TopNav: FC = () => {
    return (
        <div className="flex items-center justify-center text-2xl font-bold	 subpixel-antialiased">
            <div className="">
                <Link to="/index"> 首页</Link>
            </div>
            <div>歌单</div>
            <div>探索</div>
            <Search></Search>
        </div>
    );
};

export default TopNav;
