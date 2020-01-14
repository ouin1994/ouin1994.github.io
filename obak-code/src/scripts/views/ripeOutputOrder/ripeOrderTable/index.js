import { Table, Icon, Button } from "antd";
import React, { Component } from 'react';
import Orders from "~/mobx";
import { observer } from "mobx-react";
import "./index.scss"
import { connect } from "react-redux";
import UpdateOrder from "../updateOrder";
import { updateOrderInfo } from "../../../redux/actions";
console.log(Orders)
let count = 0;
@connect()
@observer
class OrderTable extends Component {
    state = {
        sortedInfo: {},
        filteredInfo: {}
    }
    setPriceSort = () => {
        this.handleSort("allPrice")
    }
    setTimeSort = () => {
        this.handleSort("time")
    }
    handleSort = (columnKey) => {
        count++
        if (count % 2 == 0) {
            this.setState({
                sortedInfo: {
                    order: 'descend',
                    columnKey
                }
            })
        } else {
            this.setState({
                sortedInfo: {
                    order: 'ascend',
                    columnKey,
                }
            })
        }
    }
    handleChange = (pagination, filters, sorter) => {
        console.log('Various parameters', pagination, filters, sorter);
        this.setState({
            filteredInfo: filters,
            sortedInfo: sorter,
        });
    };
    componentDidMount() {
        Orders.getOrderList("/react/getOrderList")
        Orders.getGoodsList("react/getGoodsList")

    }
    clearFilters = () => {
        this.setState({
            filteredInfo: {}
        })
    }
    clearAll = () => {
        this.setState({
            filteredInfo: {},
            sortedInfo: {}
        })
    }
    handleFormatDate = (option) => {
        let time = new Date(option);
        let year = time.getFullYear();
        let month = time.getMonth() + 1;
        month = month < 10 ? "0" + month : month
        let day = time.getDate();
        day = day < 10 ? "0" + day : day
        let hours = time.getHours();
        hours = hours < 10 ? "0" + hours : hours
        let mins = time.getMinutes();
        mins = mins < 10 ? "0" + mins : mins
        let secs = time.getSeconds();
        secs = secs < 10 ? "0" + secs : secs
        let str = `${year}年${month}月${day}日  ${hours}:${mins}:${secs}`
        return str
    }

    handleDeleteOrder = (record) => {
        console.log(record)
        Orders.deleteOrders({
            url: "/react/deleteOrders",
            data: { _id: record._id }
        })
    }
    handleChangeOrder = (record) => {
        console.log(record)
        this.props.dispatch(updateOrderInfo(record))
        Orders.changeVisible(true)
        Orders.changeNewOrder(record)
    }

    render() {
        const {
            orderList,
            goodsList,
            phoneList
        } = Orders
        const { sortedInfo, filteredInfo } = this.state;
        console.log(orderList)
        let columns = [
            {
                align: "center",
                title: '姓名',
                dataIndex: 'clientName',
                key: 'clientName',
            },
            {
                align: "center",
                title: '电话',
                dataIndex: 'phone',
                key: 'phone',
                filters: phoneList,
                filteredValue: filteredInfo.phone || null,
                onFilter: (value, record) => {
                    return record.phone.indexOf(value) === 0
                },
                filterMultiple: false,
            },
            {
                align: "center",
                title: '公司名称',
                dataIndex: 'company',
                key: 'company',
            },
            {
                align: "center",
                title: '产品名称',
                dataIndex: 'product',
                key: 'product',
                filters: goodsList,
                filteredValue: filteredInfo.product || null,
                onFilter: (value, record) => {
                    return record.order[0].name.title.indexOf(value) === 0
                },
                ellipsis: true,
                render: (text, item) => {
                    let name = item.order[0].name.title;
                    return (
                        <span>{name}</span>
                    )
                }
            },
            {
                align: "center",
                title: '总价[元]',
                key: 'allPrice',
                dataIndex: 'allPrice',
                sorter: (a, b) => {
                    let aPrice = a.totalPrice + a.totalFreight + a.totalIncidentals;
                    let bPrice = b.totalPrice + b.totalFreight + b.totalIncidentals;
                    return aPrice - bPrice
                },
                sortOrder: sortedInfo.columnKey === 'allPrice' && sortedInfo.order,
                render: (text, item) => {
                    return (
                        <div> {item.totalPrice + item.totalFreight + item.totalIncidentals} </div>
                    )
                }
            },
            {
                align: "center",
                title: '成交时间',
                key: 'time',
                dataIndex: 'time',
                sorter: (a, b) => {
                    let aTime = new Date(a.time)
                    let bTime = new Date(b.time)
                    return aTime - bTime
                },
                sortOrder: sortedInfo.columnKey === 'time' && sortedInfo.order,
                render: (option) => {
                    let time = this.handleFormatDate(option)
                    return (
                        <div> {time} </div>
                    )
                }
            },
            {
                align: "center",
                title: '操作',
                key: 'action',
                dataIndex: 'action',
                render: (text, record) => {
                    return (
                        <div style={{ display: "flex", justifyContent: "space-around", alignItems: "center" }}>
                            <Button type="danger" onClick={() => this.handleDeleteOrder(record)} >删除</Button>
                            <Button style={{ marginLeft: 5 }} type="primary" onClick={() => this.handleChangeOrder(record)}>修改</Button>
                        </div>
                    )
                }
            },
        ]
        return (
            <div>
                <div className="table-operations">
                    <Button onClick={this.setPriceSort}>价格排序</Button>
                    <Button onClick={this.setTimeSort}>时间排序</Button>
                    <Button onClick={this.setProductFilters}>产品筛选</Button>
                    <Button onClick={this.setPhoneFilters}>电话筛选</Button>
                    <Button onClick={this.clearFilters}>清除筛选</Button>
                    <Button onClick={this.clearAll}>清除筛选和排序</Button>
                </div>
                <Table columns={columns} dataSource={orderList} onChange={this.handleChange} pagination={false}>
                </Table>
                <UpdateOrder />
            </div>
        );
    }
}

export default OrderTable;