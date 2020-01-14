import React, { Component } from 'react';
import { Modal, Row, Col, Input, DatePicker, Table, Icon, Card, Button, message } from 'antd';
import { observer } from 'mobx-react';
import Report from "~/mobx/report";
import moment from 'moment';
import TextArea from 'antd/lib/input/TextArea';

@observer
class CreateTable extends Component {
    state = {
        format: "YYYY-MM-DD",
        data: [],
        loading: false,
        date: new Date(),
        flag:false
    }
    setModalVisible() {
        Report.resetReportObj()
        Report.changeVisible(false)
    }
    componentDidMount() {
        if (Report.orderNum.length <= 0) {
            Report.getOrderNum({
                url: "/react/getOrderNum"
            })
        }
    }
    getDate = (moment, dateString) => {
        Report.getOrderNum({
            url: "/react/getOrderNum",
            date: {
                date:dateString
            }
        })
        console.log(Report.orderNum)
        Report.changeReportObj("time", dateString)
    }
    handleChangeTitle = (e) => {
        let title = e.target.value
        Report.changeReportObj("title", title)
        if(title.length>0){
            this.setState({
                flag:true
            })
        }
    }
    handleChangeContent = (e) => {
        let content = e.target.value;
        Report.changeReportObj("content", content)
    }
    handleSubmit = () => {
        if (!this.state.flag) {
            message.warning("标题不能为空！")
        } else {
            Report.pushReport({
                url:"/react/pushReport",
                value:Report.reportObj
            })
            console.log(Report.orderNum)
            console.log(Report.reportObj)
            this.setModalVisible()
        }
    }
    render() {
        const {
            orderNum,
            reportObj,
        } = Report
        let columns = [
            {
                align: "center",
                title: '产品名称',
                width: 100,
                dataIndex: 'product',
                key: 'product',
                fixed: 'left',

            },
            {
                align: "center",
                title: '出库数量',
                dataIndex: 'content',
                key: 'outCount',
                width: 100,
                render: (item, record) => <div>{record.outCount}匝</div>,
            },
            {
                align: "center",
                title: '成交价[元/匝]',
                dataIndex: 'content',
                key: 'price',
                width: 150,
                render: (item, record) => <div>{record.price}</div>,
            },
            {
                align: "center",
                title: '运费[元/匝]',
                dataIndex: 'content',
                key: 'freight',
                width: 150,
                render: (item, record) => <div>{record.freight}</div>,
            },
            {
                align: "center",
                title: '杂费[元/匝]',
                dataIndex: 'content',
                key: 'incidentals',
                width: 150,
                render: (item, record) => <div>{record.incidentals}</div>,
            },
            {
                align: "center",
                title: '总价[元]',
                dataIndex: 'content',
                key: 'totalPrice',
                width: 150,
                render: (item, record) => {
                    let totalPrice = record.outCount * (record.price + record.freight + record.incidentals)
                    return (
                        <span>{totalPrice}</span>
                    )
                }
            },
        ]
        return (
            <div>
                <Modal
                    title="新建报表"
                    width="70%"
                    style={{ width: "60%", top: 20 }}
                    visible={Report.visible}
                    onOk={() => this.setModalVisible()}
                    onCancel={() => this.setModalVisible()}
                    footer={[
                        <Button key="back" onClick={this.setModalVisible}>
                            取消
                        </Button>,
                        <Button
                            key="submit"
                            type="primary"
                            loading={this.state.loading}
                            onClick={this.handleSubmit}
                        >
                            确定
                        </Button>,
                    ]}
                >
                    <Row gutter={24}>
                        <Col span={10}>
                            <Input
                                addonBefore="标题"
                                placeholder="请输入标题"
                                value={reportObj.title}
                                onChange={this.handleChangeTitle}
                            />
                        </Col>
                        <Col span={4}>
                        </Col>
                        <Col span={10}>
                            <div>
                                <span style={{ marginRight: 10 }}>选择日期:</span>
                                <DatePicker
                                    defaultValue={moment(this.state.date, this.state.format)}
                                    format={this.state.format}
                                    onChange={this.getDate}
                                />
                            </div>
                        </Col>
                    </Row>
                    <Row gutter={24}>
                        <Col span={24}>
                            <Table
                                columns={columns}
                                dataSource={orderNum}
                                scroll={{ x: 800, y: 300 }}
                                pagination={false}
                            />
                        </Col>
                    </Row>
                    <Row gutter={24} style={{ marginTop: 10 }}>
                        <Col span={24}>
                            <Card
                                title="备注"
                            >
                                <TextArea
                                    value={reportObj.content}
                                    rows="5"
                                    onChange={this.handleChangeContent}
                                    placeholder="请输入备注，如无需要，请不必输入"
                                ></TextArea>
                            </Card>
                        </Col>
                    </Row>
                </Modal>
            </div>
        );
    }
}

export default CreateTable;
