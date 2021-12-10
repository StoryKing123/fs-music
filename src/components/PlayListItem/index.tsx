import React from "react";
import { FC } from "react";
import style from "./index.module.less";
// import "./index.module.less";

const PlayListItem: FC = () => {
    return (
        <div className="rounded-md overflow-hidden relative">
            <img
                className=" cursor-pointer"
                src="http://p4.music.126.net/qOpnqb-8JXbjE_tRkJynig==/109951166702653246.jpg?param=200y200"
                alt=""
            />
            <div className=" absolute top-0 right-0">21wj</div>
            <div
                className={`absolute bottom-0 right-0  bg-opacity-60	rounded-full  ${style["play-list-item__play"]} play `}
                // style={{ filter: "blur(20px)" }}
            >
                <svg
                    t="1638970913553"
                    className="icon"
                    viewBox="0 0 1024 1024"
                    version="1.1"
                    xmlns="http://www.w3.org/2000/svg"
                    p-id="2381"
                    width="32"
                    height="32"
                >
                    <path
                        d="M755.552 495.36l-384-296.672a31.936 31.936 0 0 0-51.552 25.28v593.504a32 32 0 0 0 51.552 25.28l384-296.704a32 32 0 0 0 0-50.656"
                        p-id="2382"
                        fill="#d81e06"
                    ></path>
                </svg>
            </div>
            {/* <div className=" w-1/4">大雪 | 时节寒冷,但希望你的热忱不被掩盖</div> */}
        </div>
    );
};

export default PlayListItem;
