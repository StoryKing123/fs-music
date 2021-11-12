import React, { useRef } from "react";
import { FC } from "react";
import request from "@/services";
import { useStoreActions, useStoreState } from "@/Store";
import { useNavigate } from "react-router";

const Search: FC = () => {
    const searchRef = useRef<HTMLInputElement>(null);
    const musicRef = document.getElementById("music");
    const { setMusic } = useStoreActions();
    const { music } = useStoreState();
    const navigate = useNavigate();

    const handleSearch = async (e: any) => {
        // console.log(e);

        if (e.code === "Enter") {
            navigate("/search");

            const res: any = await request.get(
                `http://fs-netease-cloud-music-api.vercel.app/search?keywords=/${searchRef.current?.value}&type=1&limit=10`
            );
            setMusic({ ...music, searchResult: res.result });
            // useRoutes()
        }
    };
    return (
        <div>
            <input
                type="text"
                placeholder="搜索"
                className="border-2 border-red-500"
                ref={searchRef}
                onKeyPress={handleSearch}
            />
            <button className="bg-indigo-light text-5xl">button</button>
        </div>
    );
};

export default Search;
