import immutable from "immutable";
const baseURL = "http://47.105.83.238:1993";
const defaultState = immutable.fromJS({
    pic: require("@/assets/images/Pikachu.jpg"),
})

export const avatar = (state = defaultState, action) => {
    switch (action.type) {
        case "pushAvatar":
            return state.set("pic", action.payload.replace(/public/, baseURL))
            break;
        case "changePic":
            return state.set("pic", action.payload)
            break;
        default:
            return state;
            break;
    }
}