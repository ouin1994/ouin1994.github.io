import React, { Component } from 'react';
import BreadcrumbCustom from '../../components/breadcrumb';
import { Row, Col, Card, Input, message } from 'antd';
import { observer } from 'mobx-react';
import Report from "~/mobx/report";
import CreateTable from "./modelview"
import LoadMoreList from './reportList';
import Search from 'antd/lib/input/Search';
import { connect } from 'react-redux';
@connect(
    state => {
        return {
            pic: state.getIn(["avatar", "pic"])
        }
    }
)
@observer
class Daily extends Component {
    state = {
        date: new Date()
    }
    componentDidMount() {
        let obj = {
            type: "daily"
        }
        if (Report.list.length <= 0) {
            Report.getList({
                url: "/react/getReport",
                type: obj
            })
        }
    }
    handleSearch = (text) => {
        if(text.length>0){
            Report.getSearchList({
                url: "/react/searchReport",
                data: {
                    type: "daily",
                    text
                }
            })
        }else{
            message.warning("请输入关键字")
        }
        
    }
    handleOpenTable = () => {
        Report.changeVisible(true)
        Report.changeReportObj("time", this.state.date)
        Report.changeReportObj("type", "daily")
        Report.changeReportObj("tables", Report.orderNum)
        Report.changeReportObj("avatar", this.props.pic)
    }
    render() {
        return (
            <div>
                <BreadcrumbCustom first={'报表'} second={"日报表"} />
                <Row gutter={24}>
                    <Col span={24}>
                        <Card>
                            <Search
                                placeholder="请输入您要搜索的内容,例如标题，内容"
                                loading={false}
                                enterButton
                                onSearch={this.handleSearch}
                            />
                        </Card>
                    </Col>
                </Row>
                <Row gutter={24}>
                    <Col span={24}>
                        <Card
                            title="日报表"
                            headStyle={{ fontSize: 26, fontWeight: 500 }}
                            extra={<span style={{ color: "#0099CC" }} onClick={this.handleOpenTable}>新建报表</span>}
                        >
                            {
                                Report.list.length <= 0 && <div>暂无报表，点击右上角新建报表</div>
                            }
                            <LoadMoreList />
                        </Card>
                    </Col>
                </Row>
                <CreateTable />
            </div>
        );
    }
}

export default Daily;