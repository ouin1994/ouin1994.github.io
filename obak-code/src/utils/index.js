
export { axios, baseURL } from "./axios";

export const commonCss = {
    all: {
        margin: 0,
        padding: 0
    },
    two: {
        fontSize: 15,
        color: "orange",
        width: 200,
        height: 200
    }

}


export const commonJs = {
    todo: function () {
        console.log(this)   // undefined
    },
    doNow: function () {
        console.log(this)   // 指向commonJs
    }

}
