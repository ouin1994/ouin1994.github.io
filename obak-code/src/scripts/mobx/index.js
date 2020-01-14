import { observable, action, computed } from "mobx"
import { axios } from "&"
import { observer } from "mobx-react"


class Orders {
    @observable orderList = []
    @observable goodsList = []
    @observable phoneList = []
    @observable visible = false
    @observable newOrder = {}

    @action getOrderList = async (url) => {
        let res = await axios.post(url)
        res.data.result.map((item, i) => {
            item["key"] = i
            return item
        })
        this.orderList = res.data.result
        let array = []
        res.data.result.map((item, i) => {
            let obj = {}
            obj["text"] = item.phone
            obj["value"] = item.phone
            obj["key"] = i
            array.push(obj)
            return array
        })
        this.phoneList = array

    }
    @action getGoodsList = async (url) => {
        let res = await axios.post(url)
        let array = []

        res.data.result.map((item, i) => {
            let obj = {}
            obj["text"] = item.name.title;
            obj["value"] = item.name.title;
            obj["key"] = i
            array.push(obj)
            return array
        })
        this.goodsList = array
    }

    @action deleteOrders = async ({ url, data }) => {
        let res = await axios.post(url, data)
        res.data.result.map((item, i) => {
            item["key"] = i
            return item
        })
        this.orderList = res.data.result
    }
    @action changeVisible = flag => {
        return this.visible = flag
    }
    @action changeNewOrder = record => {
        
        return this.newOrder = record
    }
    @action changeValue = newVal => {
        return this.newOrder["value"] = newVal
    }
    @action updateOrder =async ({url,order}) =>{
        let res = await axios.post(url,order)
        res.data.result.map((item, i) => {
            item["key"] = i
            return item
        })
        this.orderList = res.data.result
    }
}


export default new Orders()