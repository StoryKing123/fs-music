import React, { useEffect, useRef } from "react";
import { FC } from "react";
import style from "./index.module.less";
import MediaControl from "../MediaControl";
import { useStoreState } from "@/Store";
import { throttle } from "lodash";
import {parseTimestampIntoMinute} from '@/utils/'
const Player: FC = () => {
    const { music } = useStoreState();
    const musicDom: HTMLVideoElement = document.getElementById(
        "music"
    ) as HTMLVideoElement;
    const currentProgressBar = useRef<HTMLDivElement>(null);
    const currentTime = useRef(musicDom.currentTime);

    const handleTimeUpdateThrootle = throttle(() => {
        console.log(musicDom.currentTime);
        console.log(musicDom.duration);
        console.log((musicDom.currentTime / musicDom.duration) * 100);
        currentProgressBar.current.style.width = `${
            (musicDom.currentTime / musicDom.duration) * 100
        }%`;
    }, 1000);
    const handleTimeUpdate = () => {
        handleTimeUpdateThrootle();
    };
    useEffect(() => {
        console.log(musicDom.currentTime);
        musicDom.addEventListener("timeupdate", handleTimeUpdate);
        return () => {
            musicDom.removeEventListener("timeupdate", handleTimeUpdate);
        };
    }, []);
    return (
        <div className={style["player"]}>
            <div className={style["player__progress-bar"]}>
                <div
                    className={style["player__progress-bar--current"]}
                    ref={currentProgressBar}
                >
                    <div
                        className={style["player__progress-bar__circle"]}
                    ></div>
                </div>
            </div>
            {music.currentSong ? (
                <div className={style["player__song-info"]}>
                    <img
                        className={style["player__song-info__cover"]}
                        src={music.currentSong.album.artist.img1v1Url}
                        alt=""
                    />
                    <div>
                        <div className={style["player__song-info__name"]}>
                            {music.currentSong.name}
                            <span
                                className={style["player__song-info__author"]}
                            >
                                {music.currentSong.artists[0].name}
                            </span>
                        </div>
                        <div className={style["player__song-info__progress"]}>
                            {parseTimestampIntoMinute(musicDom.currentTime*1000)}/{parseTimestampIntoMinute(music.currentSong.duration)}
                        </div>
                    </div>
                </div>
            ) : (
                ""
            )}

            <div className={style["player__media-control"]}>
                <MediaControl></MediaControl>
            </div>
            <div className={style["player__control-list"]}>control list</div>
        </div>
    );
};
export default Player;
