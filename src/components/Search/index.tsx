import React, { useRef } from "react";
import { FC } from "react";
import request from "@/services";
import { useStoreActions, useStoreState } from "@/store/index";
import { useNavigate } from "react-router";
import { Input } from "@douyinfe/semi-ui";
import { IconSearch } from "@douyinfe/semi-icons";

const Search: FC = () => {
    const searchRef = useRef<HTMLInputElement>(null);
    const musicRef = document.getElementById("music");
    const { setMusic, setLoading } = useStoreActions();
    const { music, loading } = useStoreState();
    const state = useStoreState()
    const navigate = useNavigate();

    const handleSearch = async (e: any) => {
        // console.log(e);

        if (e.code === "Enter") {
            navigate("/search");
            setLoading({ ...loading, isLoading: true });
            const res: any = await request.get(
                `http://fs-netease-cloud-music-api.vercel.app/search?keywords=/${searchRef.current?.value}&type=1&limit=10`
            );
            setMusic({ ...music, searchResult: res.result });
            // setLoading(false);
            setLoading({ ...loading, isLoading: false });
            // console.log(state)
            // useRoutes()
        }
    };
    return (
        <div className="relative">
            {/* <svg
                className="icon absolute z-10 "
                viewBox="0 0 1024 1024"
                version="1.1"
                xmlns="http://www.w3.org/2000/svg"
                p-id="1191"
                width="32"
                height="32"
            >
                <path
                    d="M966.4 924.8l-230.4-227.2c60.8-67.2 96-156.8 96-256 0-217.6-176-390.4-390.4-390.4-217.6 0-390.4 176-390.4 390.4 0 217.6 176 390.4 390.4 390.4 99.2 0 188.8-35.2 256-96l230.4 227.2c9.6 9.6 28.8 9.6 38.4 0C979.2 950.4 979.2 934.4 966.4 924.8zM102.4 441.6c0-185.6 150.4-339.2 339.2-339.2s339.2 150.4 339.2 339.2c0 89.6-35.2 172.8-92.8 233.6-3.2 0-3.2 3.2-6.4 3.2-3.2 3.2-3.2 3.2-3.2 6.4-60.8 57.6-144 92.8-233.6 92.8C256 780.8 102.4 627.2 102.4 441.6z"
                    p-id="1192"
                    fill="#515151"
                ></path>
            </svg> */}
            <Input
                prefix={<IconSearch />}
                onKeyPress={handleSearch}
                ref={searchRef}
                // defaultValue="test"
            ></Input>
            {/* <input
                type="text"
                placeholder="搜索"
                className="border-2 rounded-sm absolute	 text-sm px-5 py-2"
                ref={searchRef}
                onKeyPress={handleSearch}
            /> */}
            {/* <button className="bg-indigo-light text-5xl">button</button> */}
        </div>
    );
};

export default Search;
