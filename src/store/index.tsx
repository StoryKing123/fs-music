// import { IStoreState } from "@/data";
import React, {
    createContext,
    Dispatch,
    FC,
    useCallback,
    useContext,
    useMemo,
    useReducer,
} from "react";
import musicReducer from "./music";
import loadingReducer from "./loading";
import { IStoreState } from "./data";

const combineReducers = (reducers: Record<string, any>) => {
    return (state: any = {}, action: any) => {
        const newState: any = {};
        for (let key in reducers) {
            newState[key] = reducers[key](state[key], action);
        }
        return newState;
    };
};
// const combineReducers = (slices: any) => (state: any, action: any) =>
//     Object.keys(slices).reduce(
//         // use for..in loop, if you prefer it
//         (acc, prop) => ({
//             ...acc,
//             [prop]: slices[prop](acc[prop], action),
//         }),
//         state
//     );

type Action =
    | { type: "SWITCH_PLAY"; payload: IStoreState }
    | { type: "SET_MUSIC"; payload: IStoreState }
    | { type: "SET_LOADING"; payload: IStoreState };

const initialState: IStoreState = {
    music: { isPlayingMusic: false },
    loading: { isLoading: false },
};
export const StoreContext = createContext<{
    state: IStoreState;
    dispatch?: Dispatch<Action>;
}>({
    state: initialState,
});
const Store: FC = ({ children }) => {
    const [state, dispatch] = useReducer(
        combineReducers({ loading: loadingReducer, music: musicReducer }),
        initialState
    );
    return (
        <StoreContext.Provider value={{ state, dispatch }}>
            {children}
        </StoreContext.Provider>
    );
};

export const useStoreState = () => {
    const { state } = useContext(StoreContext);
    // console.log(state);
    const music = useMemo(() => {
        return state.music;
    }, [state]);
    const loading = useMemo(() => {
        return state.loading;
    }, [state]);
    return { music, loading };
};

export const useStoreActions = () => {
    const { dispatch } = useContext(StoreContext);
    if (dispatch === undefined) {
        throw new Error("error information");
    }

    const switchPlayStatus = useCallback(
        (payload) => {
            dispatch({
                type: "SWITCH_PLAY",
                payload: payload,
            });
        },
        [dispatch]
    );

    const setMusic = useCallback(
        (payload) => {
            dispatch({
                type: "SET_MUSIC",
                payload: payload,
            });
        },
        [dispatch]
    );
    const setLoading = useCallback(
        (payload) => {
            dispatch({
                type: "SET_LOADING",
                payload: payload,
            });
        },
        [dispatch]
    );

    return { switchPlayStatus, setMusic, setLoading };
};

export default Store;
