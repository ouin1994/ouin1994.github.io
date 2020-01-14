import immutable from "immutable";
const defaultState = immutable.fromJS({
    orderInfo: {
        clientName: "",
        phone: "",
        company: "",
        totalPrice: 0,
        totalFreight: 0,
        totalIncidentals: 0,
        value: 1,
        order: []
    },
    orderDetails: []
})

export const order = (state = defaultState, action) => {
    switch (action.type) {
        case "changeOrderInfo":
            var obj = { ...state.toJS().orderInfo, ...{ orderInfo: state.toJS().orderInfo, orderInfo: action.payload } };
            return immutable.fromJS(obj);
            break;

        case "changeClientName":
            return state.setIn(["orderInfo", "clientName"], action.payload)
            break;
        case "changePhone":
            return state.setIn(["orderInfo", "phone"], action.payload)
            break;
        case "changeCompany":
            return state.setIn(["orderInfo", "company"], action.payload)
            break;
        case "changeValue":
            return state.setIn(["orderInfo", "value"], action.payload)
            break;

        case "changeOrderDetails":
            var array = state.toJS().orderDetails;
            array[0] = action.payload;
            return state.set("orderDetails", array);
            break;

        case "changeOrderList":
            var array = state.toJS().orderInfo.order;
            let newArr = array.concat(action.payload)
            var result = [];
            var obj = {};
            for (var i = 0; i < newArr.length; i++) {
                if (!obj[newArr[i].key]) {
                    result.push(newArr[i]);
                    obj[newArr[i].key] = true;
                }
            }
            // array.concat(action.payload);
            return state.setIn(["orderInfo", "order"], result)
            break;
        case "changePrice":
            console.log(action.payload)
            return state.updateIn(["orderInfo", "totalPrice"], x => x = x + action.payload)
            break;
        case "changeFreight":
            return state.updateIn(["orderInfo", "totalFreight"], x => x = x + action.payload)
            break;
        case "changeIncidentals":
            return state.updateIn(["orderInfo", "totalIncidentals"], x => x = x + action.payload)
            break;
        case "deleteOrderList":
            return state.setIn(["orderInfo", "order"], action.payload)
            break;

        case "resetOrderInfo":
            var obj = immutable.fromJS({
                clientName: "",
                phone: "",
                company: "",
                totalPrice: 0,
                totalFreight: 0,
                totalIncidentals: 0,
                value: 1,
                order: []
            })
            return state.update("orderInfo", x => x = obj)
            break;
        case "updateOrderInfo":
            return state.update("orderInfo", x => x = action.payload)
            break;

        default:
            return state;
            break;
    }
}