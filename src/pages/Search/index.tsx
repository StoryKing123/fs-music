import React, { FC, useContext } from "react";
import { useStoreState, useStoreActions, StoreContext } from "@/store/index";
import { ISong } from "@/data";
import request from "@/services";
import { parseTimestampIntoMinute } from "@/utils";
import { List } from "@douyinfe/semi-ui";
import { Spin } from "@douyinfe/semi-ui";

export const Search: FC = () => {
    const { music, loading } = useStoreState();
    // const state = useStoreState();
    const { setMusic, setLoading } = useStoreActions();
    const musicDom = document.getElementById("music") as HTMLVideoElement;
    const handlePlayMusic = async (song: ISong) => {
        const res = await request.get(
            `https://fs-music-api.vercel.app/music/url/${song.id}`
        );
        setMusic({ ...music, currentSong: { ...song, url: res.data.url } });
        musicDom.src = res.data.url;
        musicDom.play();
    };
    const { state } = useContext(StoreContext);

    return (
        <div className="">
            {/* {state.loading?.isLoading ? "未家在" : "已加载"} */}
            {state.loading?.isLoading ? <Spin size="large"></Spin> : "加载完成"}
            search result; 　<br />
            总共{music.searchResult?.songCount}条结果 =====
            {music.searchResult?.songs.map((song) => {
                return (
                    <div
                        className="flex items-center"
                        key={song.id}
                        onClick={() => handlePlayMusic(song)}
                    >
                        <div className="w-1/4">{song.name}</div>
                        <div className="w-1/4">{song.artists[0].name}</div>
                        <div className="w-1/4">{song.album.name}</div>
                        <div className="w-1/4">
                            {parseTimestampIntoMinute(song.duration)}
                        </div>
                    </div>
                );
            })}
        </div>
    );
};

export default Search;
