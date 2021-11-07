import React, {
    createContext,
    Dispatch,
    FC,
    useCallback,
    useContext,
    useMemo,
    useReducer,
} from "react";
import { IStoreState } from "./data";

const initialState: IStoreState = { music: { isPlayingMusic: false } };
const StoreContext = createContext<{
    state: IStoreState;
    dispatch?: Dispatch<Action>;
}>({
    state: initialState,
});

type Action = { type: "switchPlay"; payload: IStoreState };
const reducer = (state: IStoreState, action: Action) => {
    switch (action.type) {
        case "switchPlay":
            return action.payload;
        default:
            return state;
    }
};

const Store: FC = ({ children }) => {
    const [state, dispatch] = useReducer(reducer, initialState);

    return (
        <StoreContext.Provider value={{ state, dispatch }}>
            { children }
        </StoreContext.Provider>
    );
};

export const useStoreState = () => {
    const { state } = useContext(StoreContext);

    const music = useMemo(() => {
        return state.music;
    }, [state]);

    return { music };
};

export const useStoreActions = () => {
    const { dispatch } = useContext(StoreContext);
    if (dispatch === undefined) {
        throw new Error("error information");
    }

    const switchPlayStatus = useCallback(
        (status: boolean) => {
            dispatch({
                type: "switchPlay",
                payload: { music: { isPlayingMusic: status } },
            });
        },
        [dispatch]
    );
    return { switchPlayStatus };
};

export default Store;
