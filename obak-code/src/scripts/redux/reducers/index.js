import { combineReducers } from "redux-immutable";
import { avatar } from "./avatar";
import { tables } from "./tables";
import { order } from "./goodOrder";
import { list } from "./goodsList"

export const reducers = combineReducers({
    avatar: avatar,
    tables: tables,
    order: order,
    list: list
})