import React from "react";
import { FC } from "react";
import style from "./index.module.less";
import MediaControl from "../MediaControl";
import { useStoreState } from "@/Store";
const Player: FC = () => {
    const { music } = useStoreState();
    return (
        <div className={style["player"]}>
            <div className={style["player__progress-bar"]}>
                <div className={style["player__progress-bar--current"]}>
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
                            00:00/04:55
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
