import React, { Component } from 'react';
import { Modal, Row, Col, Input, DatePicker, Table, Icon, Card, Button, message } from 'antd';
import { observer } from 'mobx-react';
import Report from "~/mobx/report";
import moment from 'moment';
import TextArea from 'antd/lib/input/TextArea';
console.log(Report.onlyRead)
@observer
class OnlyReadReport extends Component {
    state = {
        format: "YYYY-MM-DD",
        data: [],
        loading: false,
    }
    setModalVisible() {
        Report.changeOnlyVisible(false)
        Report.changeOnly({})
    }
    handleSubmit = () => {
        this.setModalVisible()
    }
    render() {
        const {
            onlyRead
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
                    visible={Report.onlyVisible}
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
                                value={onlyRead.title}
                                disabled
                            />
                        </Col>
                        <Col span={4}>
                        </Col>
                        <Col span={10}>
                            <div>
                                <span style={{ marginRight: 10 }}>选择日期:</span>
                                <DatePicker
                                    value={moment(moment(onlyRead.time), this.state.format)}
                                    format={this.state.format}
                                    disabled
                                />
                            </div>
                        </Col>
                    </Row>
                    <Row gutter={24}>
                        <Col span={24}>
                            <Table
                                columns={columns}
                                dataSource={onlyRead.tables}
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
                                    value={onlyRead.content}
                                    rows="5"
                                    disabled
                                ></TextArea>
                            </Card>
                        </Col>
                    </Row>
                </Modal>
            </div>
        );
    }
}

export default OnlyReadReport;
