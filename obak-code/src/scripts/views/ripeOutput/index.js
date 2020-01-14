import React, { Component } from 'react';
import BreadcrumbCustom from '../../components/breadcrumb';
import { Row, Col, Card, Input, Button, Icon, Radio, message } from 'antd';
import GoodsTable from '../../components/goodsTable';
import { connect } from 'react-redux';
import GoodAdd from '../../components/addGoods';
import {
    changeOrderInfo,
    changeFreight,
    changeIncidentals,
    changeClientName,
    changePhone,
    changeCompany,
    changeValue,
    changeVisible,
    changePrice,
    resetOrderInfo
} from '../../redux/actions';
import { axios } from "&"
import immutable from "immutable"
@connect(
    state => {
        return {
            order: state.get("order"),
            orderInfo: state.getIn(["order", "orderInfo"]),
            visible: state.getIn(["list", "visible"])
        }
    }
)
class RipeOutput extends Component {

    handleChangeName = (e) => {
        var clientName = e.target.value
        this.props.dispatch(changeClientName(clientName))
    };
    handleChangePhone = (e) => {
        var phone = e.target.value
        this.props.dispatch(changePhone(phone))
    }
    handleChangeCompany = (e) => {
        var company = e.target.value
        this.props.dispatch(changeCompany(company))
    }
    onChange = e => {
        var value = e.target.value
        this.props.dispatch(changeValue(value))
    };

    showModal = () => {
        this.props.dispatch(changeVisible(true))
    };
    handleChangePrice = (e) => {
        var totalPrice = e.target.value * 1;
        this.props.dispatch(changePrice(totalPrice))
    }
    handleChangeFreight = (e) => {
        var totalFreight = e.target.value * 1;
        this.props.dispatch(changeFreight(totalFreight))
    }
    handleChangeIncidentals = (e) => {
        var totalIncidentals = e.target.value * 1;
        this.props.dispatch(changeIncidentals(totalIncidentals))
    }

    handleSubmitTable = (newOrderInfo) => {
        var pReg = /^1(3|4|5|6|7|8|9)[0-9]{9}$/
        if (pReg.test(newOrderInfo.phone) && newOrderInfo.clientName !== "" && newOrderInfo.phone !== "") {
            if (newOrderInfo.order.length > 0) {
                axios.post("/react/orderList", newOrderInfo)
                    .then(data => {
                        this.props.dispatch(resetOrderInfo())

                    })
            } else {
                message.error("产品列表不能为空")
            }

        } else {
            message.error("请填写真实有效的客户姓名和联系方式")
        }

    }
    handleResetTable = () => {
        this.props.dispatch(resetOrderInfo())
    }
    render() {
        const {
            orderInfo
        } = this.props
        let newOrderInfo;
        if(immutable.Map.isMap(orderInfo)==true){
            newOrderInfo = orderInfo.toJS()
        }else{
            newOrderInfo = orderInfo
        }
        return (
            <div>
                <BreadcrumbCustom first={'工作单'} second={"成品出库"} />
                <div>
                    <Row gutter={24}>
                        <Col span={24}>
                            <Card title="成品出库" headStyle={{ fontWeight: 500, fontSize: 24 }}>
                                <Card type="inner" title="单据信息">
                                    <div style={{ marginBottom: 16, display: "flex", justifyContent: "space-around" }}>
                                        <Input
                                            addonBefore={<p>姓 名<Icon type="user" style={{ color: 'rgba(0,0,0,.25)', marginLeft: 5 }} /></p>}
                                            defaultValue=""
                                            value={newOrderInfo.clientName}
                                            onChange={this.handleChangeName}
                                        />
                                        <Input
                                            value={newOrderInfo.phone}
                                            addonBefore={<p>电 话<Icon type="phone" style={{ color: 'rgba(0,0,0,.25)', marginLeft: 5 }} /></p>}
                                            defaultValue=""
                                            onChange={this.handleChangePhone}
                                            maxLength={11}
                                        />
                                    </div>
                                    <div style={{ marginBottom: 16 }}>
                                        <Input
                                            value={newOrderInfo.company}
                                            addonBefore="公司名称"
                                            defaultValue=""
                                            onChange={this.handleChangeCompany}
                                        />
                                    </div>
                                    <div style={{ marginBottom: 16, display: "flex", justifyContent: "space-around" }}>
                                        <Input prefix="￥" type="number" step="100" min="0" addonBefore="成交价" defaultValue="" value={newOrderInfo.totalPrice} onChange={this.handleChangePrice} />
                                        <Input prefix="￥" type="number" step="100" min="0" addonBefore="运费" defaultValue="" value={newOrderInfo.totalFreight} onChange={this.handleChangeFreight} />
                                        <Input prefix="￥" type="number" step="100" min="0" addonBefore="杂费" defaultValue="" value={newOrderInfo.totalIncidentals} onChange={this.handleChangeIncidentals} />
                                    </div>
                                    <div style={{ marginBottom: 16, display: "flex", justifyContent: "left" }}>
                                        <span style={{ marginRight: 20 }}>出库方式</span>
                                        <Radio.Group onChange={this.onChange} value={newOrderInfo.value}>
                                            <Radio value={1}>生产出库</Radio>
                                            <Radio value={2}>销售出库</Radio>
                                        </Radio.Group>
                                    </div>
                                </Card>
                                <Card
                                    type="inner"
                                    title="出库成品信息"
                                    extra={<span onClick={this.showModal} style={{ backgroundColor: "#007aff", color: "#fff", padding: 5 }}><Icon type="plus" />添加产品</span>}
                                >
                                    <GoodAdd />
                                    <GoodsTable />
                                </Card>
                                <Card>
                                    <div style={{ width: "100%", display: "flex", justifyContent: "center", alignItems: "center" }}>
                                        <Button type="primary" onClick={()=>this.handleSubmitTable(newOrderInfo)} >确定</Button>
                                        <Button type="danger" onClick={this.handleResetTable} style={{ marginLeft: 20 }}>重置</Button>
                                    </div>
                                </Card>
                            </Card>
                        </Col>
                    </Row>

                </div>

            </div>
        );
    }
}

export default RipeOutput;