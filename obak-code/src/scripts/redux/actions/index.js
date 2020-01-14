import { axios } from "&"

export async function pushAvatar({ url, data, params, cb }) {
    let res = await axios.post(url, data, { params })
    cb(res.data.pic)
    return {
        type: "pushAvatar",
        payload: res.data.pic
    }
}

export const changePic = (payload) => {
    return {
        type: "changePic",
        payload
    }
}


export const changeOrderInfo = (payload) => {
    return {
        type: "changeOrderInfo",
        payload
    }
}

export const changeClientName = (payload) => {
    return {
        type: "changeClientName",
        payload
    }
}

export const changePhone = (payload) => {
    return {
        type: "changePhone",
        payload
    }
}
export const changeCompany = (payload) => {
    return {
        type: "changeCompany",
        payload
    }
}
export const changeValue = (payload) => {
    return {
        type: "changeValue",
        payload
    }
}


export async function getList({ url }) {
    let res = await axios.get(url)
    return {
        type: "getList",
        payload: res.data.result
    }
}

export const changeVisible = (payload) => {
    return {
        type: "changeVisible",
        payload
    }
}

export const changeOrderDetails = (payload) => {
    return {
        type: "changeOrderDetails",
        payload
    }
}

export const changeOrderList = (payload) => {
    return {
        type: "changeOrderList",
        payload
    }
}

export const changePrice = (payload) => {
    return {
        type: "changePrice",
        payload
    }
}

export const changeFreight = (payload) => {
    return {
        type: "changeFreight",
        payload
    }
}

export const changeIncidentals = (payload) => {
    return {
        type: "changeIncidentals",
        payload
    }
}

export const deleteOrderList = (payload) => {
    return {
        type: "deleteOrderList",
        payload
    }
}

export const resetOrderInfo = () => {
    return {
        type: "resetOrderInfo"
    }
}

export const updateOrderInfo = (payload) => {
    return {
        type: "updateOrderInfo",
        payload
    }
}
