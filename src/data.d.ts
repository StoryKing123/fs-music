export interface IMusic {
    isPlayingMusic: boolean;
    list?: {
        id: number;
        name: string;
        coverUrl: string;
        songs: ISong[];
    };
    searchResult?: ISearchResult;
    currentSong?: ICurrentSong;
}

export interface ICurrentSong extends ISong {
    url: string;
}
export interface ISearchResult {
    hasMore: boolean;
    songCount: number;
    songs: ISong[];
}

export interface ISong {
    id: number;
    name: string;
    artists: IArtist[];
    album: IAlbum;
    copyrightId: number;
    duration: number;
    fee: number;
    ftype: number;
    mark: number;
    mvid: number;
    rUrl: string;
    rtype: number;
    status: number;
}
export interface IAlbum {
    id: number;
    name: string;
    artist: IArtist;
}

export interface IArtist {
    id: number;
    name: string;
    picUrl: string;
    alias: any[];
    albumSize: number;
    picId: number;
    img1v1Url: string;
    img1v1: number;
    trans: any;
}

export interface IAlbum {
    id: number;
    name: string;
    artist: IArtist;
    publishTime: number;
    size: number;
    copyrightId: number;
    status: number;
    picId: number;
    alia: string[];
    mark: number;
}

export interface IStoreState {
    music: IMusic;
}
