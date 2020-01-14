import immutable from "immutable";
const defaultState = immutable.fromJS({
    goodsList: [],
    visible: false
})

export const list = (state = defaultState, action) => {
    switch (action.type) {
        case "getList":
            return state.set("goodsList", action.payload)
            break;

        case "changeVisible":
            return state.set("visible", action.payload)
            break;
        default:
            return state;
            break;
    }
}