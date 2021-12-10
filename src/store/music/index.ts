import { IAction } from "../data";
import { IStoreState } from "./data";

type Action = { type: "SET_MUSIC"; payload: any };

const reducer = (state: any, action: IAction) => {
    switch (action.type) {
        case "SET_MUSIC":
            return {...state,...action.payload}

        default:
            return state;
    }
};

export default reducer;
