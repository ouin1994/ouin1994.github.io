import immutable from "immutable";
const defaultState = immutable.fromJS({
    data: [
        {
            key: '1',
            name: {
                title: "大花白",
                goodsAvatar: "",
                serialNum: "B12536",
                num: 3
            },
            thickness: 40.05,
            square: 10.00,
            price: 1200.00,
            freight: 100.00,
            incidentals: 50.00
        },
        {
            key: '2',
            name: {
                title: "16盘螺",
                goodsAvatar: "",
                serialNum: "B128874",
                num: 5
            },
            thickness: 40.05,
            square: 10.00,
            price: 3600.00,
            freight: 100.00,
            incidentals: 50.00
        },
        {
            key: '3',
            name: {
                title: "大花白",
                goodsAvatar: "",
                serialNum: "B12536",
                num: 3
            },
            thickness: 40.05,
            square: 10.00,
            price: 1200.00,
            freight: 100.00,
            incidentals: 50.00
        },
    ]
})


export const tables = (state = defaultState, action) => {
    switch (action.payload) {

        default:
            return state
            break;
    }
}