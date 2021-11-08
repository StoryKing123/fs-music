import React from "react";
import { FC } from "react";
import style from "./index.module.less";
import MediaControl from "../MediaControl";
const Player: FC = () => {
    return (
        <div className={style["player"]}>
            <div className={style["player__progress-bar"]}>
                <div className={style["player__progress-bar--current"]}>
                    <div
                        className={style["player__progress-bar__circle"]}
                    ></div>
                </div>
            </div>
            <div className={style["player__song-info"]}></div>
            <img
                className={style["player__song-info__cover"]}
                src="http://p2.music.126.net/sVTf399sAAY8hrbI5ZlOUQ==/109951165161505639.jpg?param=130y130"
                alt=""
            />
            <div>
                <div className={style["player__song-info__name"]}>
                    Take You Dancing
                    <span className={style["player__song-info__author"]}>
                        jason derulo
                    </span>
                </div>
                <div className={style["player__song-info__progress"]}>
                    00:00/04:55
                </div>
            </div>
            <div className={style["player__media-control"]}>
                <MediaControl></MediaControl>
            </div>
            <div className={style["player__control-list"]}>control list</div>
        </div>
    );
};
export default Player;
