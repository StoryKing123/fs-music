import { IAction } from "../data";

type Action = { type: "SET_LOADING"; payload: any };

const reducer = (state: any, action: IAction) => {
    switch (action.type) {
        case "SET_LOADING":
            // console.log("set loading");
            // console.log(action)
            // console.log({ ...state, ...action.payload });
            return { ...state, ...action.payload };

        default:
            return state;
    }
};
export default reducer;
