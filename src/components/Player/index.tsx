import React from "react";
import { FC } from "react";
import style from "./index.module.less";
import MediaControl from "../MediaControl";
const Player: FC = () => {
    return (
        <div className={style["player"]}>
            <div className={style["player__song-info"]}></div>
            <div>
                <img
                    src="http://p2.music.126.net/sVTf399sAAY8hrbI5ZlOUQ==/109951165161505639.jpg?param=130y130"
                    alt=""
                />
            </div>
            <div>
                <div>Take You Dancing</div>
                <div>00:00/04:55</div>
            </div>
            <div className={style["player__media-control"]}>
                <MediaControl></MediaControl>
            </div>
            <div className={style["player__control-list"]}>control list</div>
        </div>
    );
};
export default Player;
