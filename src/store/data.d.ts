export interface IAction {
    type: string;
    payload: any;
}

export interface IStoreState {
    music: any;
    loading?: {
        isLoading: boolean;
    };
}
