import React, { RefObject, useEffect, useRef, useState } from "react";
import { FC } from "react";
import style from "./index.module.less";
import MediaControl from "../MediaControl";
import { useStoreState } from "@/store/index";
import { throttle } from "lodash";
import { parseTimestampIntoMinute } from "@/utils/";
import PlayList from "../PlayList";
const Player: FC = () => {
    const { music } = useStoreState();
    const musicDom: HTMLVideoElement = document.getElementById(
        "music"
    ) as HTMLVideoElement;
    const [isShowPlayList, setIsShowPlayList] = useState(false);
    const currentProgressBar = useRef<HTMLDivElement>(null);
    const currentTime = useRef(musicDom.currentTime);
    const handleTimeUpdateThrootle = throttle(() => {
        (currentProgressBar as any).current.style.width = `${
            (musicDom.currentTime / musicDom.duration) * 100
        }%`;
    }, 1000);
    const handleTimeUpdate = () => {
        handleTimeUpdateThrootle();
    };
    const handlePlayListClick = () => {
        setIsShowPlayList((isShowPlayList) => !isShowPlayList);
    };
    useEffect(() => {
        musicDom.addEventListener("timeupdate", handleTimeUpdate);
        return () => {
            musicDom.removeEventListener("timeupdate", handleTimeUpdate);
        };
    }, []);
    return (
        <div className={`${style["player"]} relative` }>
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
                            {parseTimestampIntoMinute(
                                musicDom.currentTime * 1000
                            )}
                            /
                            {parseTimestampIntoMinute(
                                music.currentSong.duration
                            )}
                        </div>
                    </div>
                </div>
            ) : (
                ""
            )}

            <div className={style["player__media-control"]}>
                <MediaControl></MediaControl>
            </div>
            <div className={style["player__control-list"]}>
                <svg
                    t="1637195606393"
                    className="icon"
                    viewBox="0 0 1024 1024"
                    version="1.1"
                    xmlns="http://www.w3.org/2000/svg"
                    p-id="2200"
                    width="32"
                    height="32"
                    onClick={handlePlayListClick}
                >
                    <path
                        d="M42.666667 106.666667a21.333333 21.333333 0 0 1 21.333333-21.333334h896a21.333333 21.333333 0 0 1 0 42.666667H64a21.333333 21.333333 0 0 1-21.333333-21.333333z m576 746.666666H64a21.333333 21.333333 0 0 0 0 42.666667h554.666667a21.333333 21.333333 0 0 0 0-42.666667z m341.333333-384H64a21.333333 21.333333 0 0 0 0 42.666667h896a21.333333 21.333333 0 0 0 0-42.666667z m9.673333 383.333334l-117.333333-80a26.666667 26.666667 0 0 0-41.686667 22v160a26.666667 26.666667 0 0 0 41.686667 22l117.333333-80a26.666667 26.666667 0 0 0 0-44.066667z"
                        fill="#5C5C66"
                        p-id="2201"
                    ></path>
                </svg>
                control list
            </div>
            {isShowPlayList ? <PlayList></PlayList>:''}

        </div>
    );
};
export default Player;
