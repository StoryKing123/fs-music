import React, { FC, useState } from "react";
import style from "./index.module.less";
import { useStoreActions, useStoreState } from "../../store/index";

const MediaControl: FC = () => {
    const musicDom: HTMLVideoElement = document.getElementById(
        "music"
    ) as HTMLVideoElement;

    const state = useStoreState();
    const { switchPlayStatus, setMusic } = useStoreActions();
    const handlePlayMusic = () => {
        // console.log(musicDom.duration);
        // console.log(musicDom.currentTime);
        // switchPlayStatus(!state.music.isPlayingMusic);
        setMusic({
            ...state.music,
            isPlayingMusic: !state.music.isPlayingMusic,
        });
        if (state.music.isPlayingMusic) {
            musicDom.play();
        } else {
            musicDom.pause();
        }
        console.log(state);

        // console.log(state.music.isPlayingMusic);
    };

    return (
        <div className="flex">
            <div>
                <svg
                    className="icon"
                    viewBox="0 0 1024 1024"
                    version="1.1"
                    xmlns="http://www.w3.org/2000/svg"
                    p-id="2192"
                    width="32"
                    height="32"
                >
                    <path
                        d="M357.3 324v376c0 17.6-14.4 32-32 32s-32-14.4-32-32V324c0-17.6 14.4-32 32-32s32 14.4 32 32zM400.5 512c0 9 4.4 17.4 11.7 22.6l275.2 192.6c8.4 5.9 19.4 6.5 28.5 1.9 9.1-4.7 14.8-14.1 14.8-24.4V319.4c0-10.3-5.7-19.6-14.8-24.4-9.1-4.7-20.1-4-28.5 1.9L412.3 489.5a27.29 27.29 0 0 0-11.8 22.5z"
                        fill="#d81e06"
                        p-id="2193"
                    ></path>
                </svg>
                &nbsp;
            </div>
            <div>
                {state.music.isPlayingMusic ? (
                    <svg
                        className="icon"
                        onClick={handlePlayMusic}
                        viewBox="0 0 1024 1024"
                        version="1.1"
                        xmlns="http://www.w3.org/2000/svg"
                        p-id="1486"
                        width="32"
                        height="32"
                    >
                        <path
                            d="M512 78.8c-239.3 0-433.2 194-433.2 433.2 0 239.3 194 433.2 433.2 433.2 239.3 0 433.2-194 433.2-433.2 0.1-239.2-193.9-433.2-433.2-433.2z m183.3 447.9L455.1 720c-12.3 9.9-30.5 1.1-30.5-14.6V318.7c0-15.7 18.2-24.5 30.5-14.6l240.2 193.4c9.4 7.5 9.4 21.7 0 29.2z"
                            p-id="1487"
                            data-spm-anchor-id="a313x.7781069.0.i5"
                            className="selected"
                            fill="#d81e06"
                        ></path>
                    </svg>
                ) : (
                    <svg
                        className="icon"
                        viewBox="0 0 1024 1024"
                        version="1.1"
                        onClick={handlePlayMusic}
                        xmlns="http://www.w3.org/2000/svg"
                        p-id="1643"
                        width="32"
                        height="32"
                    >
                        <path
                            d="M512 42.666667C252.793333 42.666667 42.666667 252.793333 42.666667 512s210.126667 469.333333 469.333333 469.333333 469.333333-210.126667 469.333333-469.333333S771.206667 42.666667 512 42.666667z m106.666667 682.666666a21.333333 21.333333 0 0 1-21.333334-21.333333V320a21.333333 21.333333 0 0 1 42.666667 0v384a21.333333 21.333333 0 0 1-21.333333 21.333333z m-213.333334 0a21.333333 21.333333 0 0 1-21.333333-21.333333V320a21.333333 21.333333 0 0 1 42.666667 0v384a21.333333 21.333333 0 0 1-21.333334 21.333333z"
                            fill="#d81e06"
                            p-id="1644"
                            data-spm-anchor-id="a313x.7781069.0.i0"
                            className="selected"
                        ></path>
                    </svg>
                )}
                &nbsp;
            </div>
            <div>
                <svg
                    className="icon"
                    viewBox="0 0 1024 1024"
                    version="1.1"
                    xmlns="http://www.w3.org/2000/svg"
                    p-id="3138"
                    width="32"
                    height="32"
                >
                    <path
                        d="M655.706179 465.602819L332.053897 218.588294c-38.414608-29.327534-93.791393-1.929039-93.791392 46.396277v494.029051c0 48.325316 55.376785 75.725617 93.791392 46.398084l323.652282-247.014525c30.602722-23.357989 30.602722-69.436372 0-92.794362zM781.064814 780.798397V451.684117v-164.562559c0-19.628152 5.904521-60.475733-17.057907-75.841215-25.523642-17.068744-59.747828 1.210165-59.747828 31.919454v493.676839c0 19.628152-5.915358 60.473927 17.047069 75.841215 25.532673 17.068744 59.758666-1.211971 59.758666-31.919454z"
                        fill="#d81e06"
                        p-id="3139"
                    ></path>
                </svg>
            </div>
        </div>
    );
};

export default MediaControl;
