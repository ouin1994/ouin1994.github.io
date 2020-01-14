import { observable, action, computed } from "mobx";
import { axios } from "&";

function DateFormat(str) {
    let date = new Date(str)
    let year = date.getFullYear();
    let month = date.getMonth() + 1;
    month = month < 10 ? "0" + month : month
    let day = date.getDate()
    day = day < 10 ? "0" + day : day
    let today = `${year}-${month}-${day}`;
    return today
}


class Report {
    @observable list = []
    @observable visible = false
    @observable orderNum = []
    @observable reportObj = {}
    @observable onlyRead = {}
    @observable onlyVisible = false


    @action changeOnlyVisible = value => {
        this.onlyVisible = value
    }

    @action changeOnly = (item) => {
        this.onlyRead = item
    }

    @action resetReportObj = () => {
        this.reportObj = {}
    }

    @action pushReport = async ({ url, value }) => {
        let res = await axios.post(url, value)
        res.data.result.map((item, i) => {
            item.time = DateFormat(item.time)
            return item
        })
        this.list = res.data.result
        console.log(res.data.result)
    }

    @action changeReportObj = (type, value) => {
        this.reportObj[type] = value
    }



    @action getOrderNum = async ({ url, date }) => {

        let res = await axios.post(url, date)
        let arr = []
        res.data.result.map((item, i) => {
            return arr.push(item.order)

        })
        let newArr = []
        arr.map((item, i) => {
            return newArr = newArr.concat(item)
        })
        let one = {
            outCount: 0
        },
            two = {
                outCount: 0
            },
            three = {
                outCount: 0
            },
            four = {
                outCount: 0
            },
            five = {
                outCount: 0
            },
            six = {
                outCount: 0
            };
        let list = []
        newArr.forEach((item, i) => {
            switch (item.key) {
                case "1":
                    one["product"] = item.name.title
                    one["outCount"] += item.name.num
                    one["price"] = item.price
                    one["freight"] = item.freight
                    one["incidentals"] = item.incidentals
                    one["key"] = item.key
                    return one
                    break;
                case "2":
                    two["product"] = item.name.title
                    two["outCount"] += item.name.num * 1
                    two["price"] = item.price
                    two["freight"] = item.freight
                    two["incidentals"] = item.incidentals
                    two["key"] = item.key
                    return two
                    break;
                case "3":
                    three["product"] = item.name.title
                    three["outCount"] += item.name.num * 1
                    three["price"] = item.price
                    three["freight"] = item.freight
                    three["incidentals"] = item.incidentals
                    three["key"] = item.key
                    return three
                    break;
                case "4":
                    four["product"] = item.name.title
                    four["outCount"] += item.name.num * 1
                    four["price"] = item.price
                    four["freight"] = item.freight
                    four["incidentals"] = item.incidentals
                    four["key"] = item.key
                    return four
                    break;
                case "5":
                    five["product"] = item.name.title
                    five["outCount"] += item.name.num * 1
                    five["price"] = item.price
                    five["freight"] = item.freight
                    five["incidentals"] = item.incidentals
                    five["key"] = item.key
                    return five
                    break;
                case "6":
                    six["product"] = item.name.title
                    six["outCount"] += item.name.num * 1
                    six["price"] = item.price
                    six["freight"] = item.freight
                    six["incidentals"] = item.incidentals
                    six["key"] = item.key
                    return six
                    break;
                default:
                    return
                    break;
            }
        })
        if (one.product) {
            list.push(one)
        }
        if (two.product) {
            list.push(two)
        }
        if (three.product) {
            list.push(three)
        }
        if (four.product) {
            list.push(four)
        }
        if (five.product) {
            list.push(five)
        }
        if (six.product) {
            list.push(six)
        }
        this.orderNum = list
    }

    @action getProductName = async (url) => {
        let res = await axios.post(url)
        res.data.result.map((item, i) => {
            return this.productName.push(item.name.title)
        })
    }

    @action changeVisible = value => {
        this.visible = value
    }
    @action getList = async ({ url, type }) => {
        let res = await axios.post(url, type)
        res.data.result.map((item, i) => {
            item.time = DateFormat(item.time)
            return item
        })
        this.list = res.data.result
    }
    @action changeList = (res) => {
        res.data.result.map((item, i) => {
            item.time = DateFormat(item.time)
            return item
        })
        this.list = res.data.result
    }

    @action getSearchList = async ({ url, data }) => {
        let res = await axios.post(url, data)
        res.data.result.map((item, i) => {
            item.time = DateFormat(item.time)
            return item
        })
        this.list = res.data.result
    }
}


export default new Report()

