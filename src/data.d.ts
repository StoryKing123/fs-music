export interface IMusic {
    isPlayingMusic: boolean;
    musicInfo?: {
        id: number;
        name: string;
        coverUrl: string;
        length: number;
        currentLength: number;
    };
}
export interface IStoreState {
    music: IMusic;
}
