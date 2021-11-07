import React, { useRef } from "react";
import { FC } from "react";
import request from "@/services";

const Search: FC = () => {
    const searchRef = useRef<HTMLInputElement>(null);
    const handleSearch = (e: any) => {
        // console.log(e);
        if (e.code === "Enter") {
            const res = request.get(
                `https://fs-music-api.vercel.app/music/url/${searchRef.current?.value}`
            );
            console.log(res);
        }
    };
    return (
        <div>
            <input
                type="text"
                placeholder="搜索"
                ref={searchRef}
                onKeyPress={handleSearch}
            />
        </div>
    );
};

export default Search;
