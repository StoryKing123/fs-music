import React, { FC } from "react";
import { useStoreState, useStoreActions } from "@/Store";
import { ISong } from "@/data";
import request from "@/services";
export const Search: FC = () => {
    const { music } = useStoreState();
    const { setMusic } = useStoreActions();
    const musicDom = document.getElementById("music") as HTMLVideoElement;
    console.log(music);
    const handlePlayMusic = async (song: ISong) => {
        const res = await request.get(
            `https://fs-music-api.vercel.app/music/url/${song.id}`
        );
        setMusic({ ...music, currentSong: { ...song, url: res.data.url } });
        musicDom.src = res.data.url;
        musicDom.play();
        console.log(res);
    };
    return (
        <div>
            search result; 　<br />
            总共{music.searchResult?.songCount}条结果 =====
            {music.searchResult?.songs.map((song) => {
                return (
                    <div key={song.id} onClick={() => handlePlayMusic(song)}>
                        {song.name}
                    </div>
                );
            })}
        </div>
    );
};

export default Search;
