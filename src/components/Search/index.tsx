import React, { useRef } from "react";
import { FC } from "react";
import request from "@/services";
import { useStoreActions, useStoreState } from "@/Store";

const Search: FC = () => {
    const searchRef = useRef<HTMLInputElement>(null);
    const musicRef = document.getElementById("music");
    const { setMusic } = useStoreActions();
    const { music } = useStoreState();
 
    const handleSearch = async (e: any) => {
        // console.log(e);
        if (e.code === "Enter") {
            const res: any = await request.get(
                `http://fs-netease-cloud-music-api.vercel.app/search?keywords=/${searchRef.current?.value}&type=1&limit=10`
            );
            setMusic({ ...music, searchResult: res.result });
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
