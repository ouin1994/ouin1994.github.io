import { Table, Icon } from "antd";
import React, { Component } from 'react';
import { connect } from "react-redux";
import {
    deleteOrderList,
    changePrice,
    changeFreight,
    changeIncidentals
} from "../../redux/actions";
import immutable from "immutable";

@connect(
    state => {
        return {
            tables: state.get("tables"),
            data: state.getIn(["tables", "data"]),
            orderInfo: state.getIn(["order", "orderInfo"]),
            orderDetails: state.getIn(["order", "orderDetails"])
        }
    }
)
class GoodsTable extends Component {
    state = {
        columns: [
            {
                align: "center",
                title: '名字---编号---匝数',
                dataIndex: 'name',
                key: 'name',
                render: text => (
                    <div style={{ display: "flex", justifyContent: "space-around", alignItems: "center" }}>
                        <span>{text.title}</span>
                        <span>编号{text.serialNum}</span>
                        <span>{text.num}匝</span>
                    </div>
                )
            },
            {
                align: "center",
                title: '厚度[cm]',
                dataIndex: 'thickness',
                key: 'thickness',
            },
            {
                align: "center",
                title: '总平方[m²]',
                dataIndex: 'square',
                key: 'square',
            },
            {
                align: "center",
                title: '成交价[元]',
                key: 'price',
                dataIndex: 'price',
                render: text => <a>{text}</a>,
            },
            {
                align: "center",
                title: '运费[元]',
                key: 'freight',
                dataIndex: 'freight',
                render: text => <a>{text}</a>,
            },
            {
                align: "center",
                title: '杂费[元]',
                key: 'incidentals',
                dataIndex: 'incidentals',
                render: text => <a>{text}</a>,
            },
            {
                align: "center",
                title: '操作',
                key: 'action',
                render: (text) => {
                    return (
                        <span onClick={() => this.handleDelete(text)}>
                            <Icon type="delete" />
                        </span>
                    )
                }
            },
        ]
    }
    handleDelete = (text) => {
        console.log(text)
        let arr = this.props.orderInfo.order || this.props.orderInfo.toJS().order;
        arr = arr.filter((item, i) => item.key !== text.key)
        this.props.dispatch(deleteOrderList(arr))
        console.log(this.props.orderInfo)
        let totalPrice = text.name.num * text.price;
        let totalFreight = text.name.num * text.freight
        let totalIncidentals = text.name.num * text.incidentals
        this.props.dispatch(changePrice(-totalPrice))
        this.props.dispatch(changeFreight(-totalFreight))
        this.props.dispatch(changeIncidentals(-totalIncidentals))
    }
    render() {
        const {
            orderInfo,
        } = this.props
        let newOrderInfo;
        if (immutable.Map.isMap(orderInfo) == true) {
            newOrderInfo = orderInfo.toJS()
        } else {
            newOrderInfo = orderInfo
        }
        const {
            columns
        } = this.state
        return (
            <div>
                <Table
                    columns={columns}
                    dataSource={newOrderInfo.order}
                    pagination={false}
                >
                </Table>
            </div>
        );
    }
}

export default GoodsTable;