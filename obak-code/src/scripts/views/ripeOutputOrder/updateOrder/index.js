import { Drawer, Form, Button, Col, Row, Input, Select, DatePicker, Icon, Radio, Card } from 'antd';
import React, { Component } from 'react';
import { observer } from 'mobx-react';
import Orders from "~/mobx"
import GoodAdd from '../../../components/addGoods';
import GoodsTable from '../../../components/goodsTable';
import { connect } from "react-redux";
import { updateOrderInfo, resetOrderInfo, changeVisible, changePrice, changeFreight, changeIncidentals } from '../../../redux/actions';
const { Option } = Select;
@connect(
    state => {
        return {
            orderInfo: state.getIn(["order", "orderInfo"]),
            visible: state.getIn(["list", "visible"]),
        }
    }
)
@observer
class DrawerForm extends Component {

    handleSubmit = e => {
        e.preventDefault();
        this.props.form.validateFields((err, values) => {
            if (!err) {
                values["order"] = this.props.orderInfo.order;
                values["time"] = this.props.orderInfo.time;
                this.props.dispatch(updateOrderInfo(values))
                Orders.updateOrder({
                    url: "/react/updateOrder",
                    order: values
                })
                this.onClose()
                console.log('Received values of form: ', values);
            }
        });
    };
    showDrawer = () => {
        Orders.changeVisible(true)
    };
    onClose = () => {
        Orders.changeVisible(false)
        this.props.dispatch(resetOrderInfo())
    };
    onChangeValue = (e) => {
        let value = this.props.form.getFieldValue("value") * 1
        Orders.changeValue(e.target.value)
    }
    handleAddProduct = () => {
        this.props.dispatch(changeVisible(true))
    }
    handleCheckPrice = (e) => {
        var totalPrice = e.target.value * 1;
        this.props.dispatch(changePrice(totalPrice))
        console.log(this.props.orderInfo)
    }
    handleCheckFreight = (e) => {
        var totalFreightPrice = e.target.value * 1;
        this.props.dispatch(changeFreight(totalFreightPrice))
    }
    handleCheckIncidentals = (e) => {
        var totalIncidentalsPrice = e.target.value * 1;
        this.props.dispatch(changeIncidentals(totalIncidentalsPrice))
    }
    render() {
        const { getFieldDecorator } = this.props.form;
        const { visible, newOrder } = Orders
        const { orderInfo } = this.props
        return (
            <div>
                <Drawer
                    title="订单修改"
                    width={720}
                    onClose={this.onClose}
                    visible={visible}
                    bodyStyle={{ paddingBottom: 80 }}
                >
                    <Form layout="vertical" hideRequiredMark>
                        <Row gutter={16}>
                            <Col span={12}>
                                <Form.Item label="姓名">
                                    {getFieldDecorator('clientName', {
                                        rules: [{ required: true, message: 'Please enter clientName' }],
                                        initialValue: newOrder.clientName
                                    })(<Input placeholder="Please enter clientName" />)}
                                </Form.Item>
                            </Col>
                            <Col span={12}>
                                <Form.Item label="手机号码">
                                    {getFieldDecorator('phone', {
                                        rules: [{ required: true, message: 'Please enter phone' }],
                                        initialValue: newOrder.phone
                                    })(
                                        <Input
                                            placeholder="Please enter phone"
                                        />,
                                    )}
                                </Form.Item>
                            </Col>
                        </Row>
                        <Row gutter={16}>
                            <Col span={12}>
                                <Form.Item label="公司名称">
                                    {getFieldDecorator('company', {
                                        rules: [{ required: true, message: 'Please enter company' }],
                                        initialValue: newOrder.company
                                    })(<Input placeholder="Please enter company" />)}
                                </Form.Item>
                            </Col>
                            <Col span={12}>
                                <Form.Item label="出库方式">
                                    {getFieldDecorator('value', {
                                        rules: [{ required: true, message: 'Please choose the approver' }],
                                        initialValue: Orders.newOrder.value
                                    })(
                                        <div style={{ display: "flex", alignItems: "center", justifyContent: "left" }}>
                                            <span style={{ marginRight: 20 }}>出库方式</span>
                                            <Radio.Group onChange={this.onChangeValue} style={{ height: 32 }} value={Orders.newOrder.value}>
                                                <Radio style={{ lineHeight: "32px" }} value={1}>生产出库</Radio>
                                                <Radio style={{ lineHeight: "32px" }} value={2}>销售出库</Radio>
                                            </Radio.Group>
                                        </div>,
                                    )}
                                </Form.Item>
                            </Col>
                        </Row>
                        <Row gutter={16}>
                            <Col span={8}>
                                <Form.Item label="成交价">
                                    {getFieldDecorator('totalPrice', {
                                        rules: [{ required: true, message: 'Please enter price' }],
                                        initialValue: orderInfo.totalPrice + orderInfo.totalFreight + orderInfo.totalIncidentals
                                    })(
                                        <div style={{ marginBottom: 16, display: "flex", justifyContent: "space-around" }}>
                                            <Input prefix="￥" type="number" step="100" min="0" addonBefore="成交价" value={orderInfo.totalPrice} onChange={this.handleCheckPrice} />
                                        </div>,
                                    )}
                                </Form.Item>
                                </Col>
                                <Col span={8}>
                                <Form.Item label="总运费">
                                    {getFieldDecorator('totalFreight', {
                                        rules: [{ required: true, message: 'Please enter price' }],
                                        initialValue:orderInfo.totalFreight
                                    })(
                                        <div style={{ marginBottom: 16, display: "flex", justifyContent: "space-around" }}>
                                            <Input prefix="￥" type="number" step="100" min="0" addonBefore="运费" value={orderInfo.totalFreight} onChange={this.handleCheckFreight} /> 
                                        </div>,
                                    )}
                                </Form.Item>
                                </Col>
                                <Col span={8}>
                                <Form.Item label="总杂费">
                                    {getFieldDecorator('totalIncidentals', {
                                        rules: [{ required: true, message: 'Please enter price' }],
                                        initialValue: orderInfo.totalIncidentals
                                    })(
                                        <div style={{ marginBottom: 16, display: "flex", justifyContent: "space-around" }}>
                                            <Input prefix="￥" type="number" step="100" min="0" addonBefore="杂费" value={orderInfo.totalIncidentals} onChange={this.handleCheckIncidentals} />
                                        </div>,
                                    )}
                                </Form.Item>
                            </Col>
                        </Row>
                        <Row gutter={16}>
                            <Col span={24}>
                                <Card
                                    type="inner"
                                    title="出库成品信息"
                                    extra={<span onClick={this.handleAddProduct} style={{ backgroundColor: "#007aff", color: "#fff", padding: 5 }}><Icon type="plus" />添加产品</span>}
                                >
                                    <GoodAdd />
                                    <GoodsTable />
                                </Card>
                            </Col>
                        </Row>
                    </Form>
                    <div
                        style={{
                            position: 'absolute',
                            right: 0,
                            bottom: 0,
                            width: '100%',
                            borderTop: '1px solid #e9e9e9',
                            padding: '10px 16px',
                            background: '#fff',
                            textAlign: 'right',
                            zIndex: 99
                        }}
                    >
                        <Button onClick={this.onClose} style={{ marginRight: 8 }}>
                            取消
                        </Button>
                        <Button onClick={this.handleSubmit} type="primary">
                            提交
                        </Button>
                    </div>
                </Drawer>
            </div>
        );
    }
}

const UpdateOrder = Form.create()(DrawerForm);
export default UpdateOrder;