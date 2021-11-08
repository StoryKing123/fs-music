export interface IMusic {
    isPlayingMusic: boolean;
    musicInfo?: {
        id: number;
        name: string;
        coverUrl: string;
        length: number;
        currentLength: number;
        author: string;
    };
}

export interface IStoreState {
    music: IMusic;
}
