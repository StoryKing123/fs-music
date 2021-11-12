import React, { FC } from "react";
import { useStoreState, useStoreActions } from "@/Store";
import { ISong } from "@/data";
import request from "@/services";
import { parseTimestampIntoMinute } from "@/utils";

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
