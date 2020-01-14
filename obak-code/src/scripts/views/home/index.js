import "./index.scss";
import React from 'react';
import BreadcrumbCustom from '~/components/breadcrumb';
import { Row, Col, Card, Calendar } from "antd"
import { Link } from "react-router-dom";
import 'moment/locale/zh-cn';


const gridStyle = {
    width: '33.33%',
    textAlign: 'center',
    marginTop: 10
};

class Home extends React.Component {
    onPanelChange = (value, mode) => {
        console.log(value, mode);
    }
    render() {
        return (
            <div className="home-content">
                <BreadcrumbCustom />
                <Row gutter={16} className="content-row">
                    <Col span={16}>
                        <Card
                            title="快捷导航"
                            bordered={false}
                            className="content-card"
                        >
                            <Card.Grid style={gridStyle}>
                                <Link
                                    className="backlog"
                                    to="/destiny/worksheet/rawoutorder"
                                >
                                    <span style={{ fontSize: 20 }}>原料出库单</span>
                                </Link>
                            </Card.Grid>
                            <Card.Grid style={gridStyle}>
                                <Link
                                    className="backlog"
                                    to="/destiny/worksheet/rawwareorder"
                                >
                                    <span style={{ fontSize: 20 }}>原料入库单</span>
                                </Link>
                            </Card.Grid>
                            <Card.Grid style={gridStyle}>
                                <Link
                                    className="backlog"
                                    to="/destiny/worksheet/ripeoutorder"
                                >
                                    <span style={{ fontSize: 20 }}>成品出库单</span>
                                </Link>
                            </Card.Grid>
                            <Card.Grid style={gridStyle}>
                                <Link
                                    className="backlog"
                                    to="/destiny/worksheet/ripewareorder"
                                >
                                    <span style={{ fontSize: 20 }}>成品入库单</span>
                                </Link>
                            </Card.Grid>
                            <Card.Grid style={gridStyle}>
                                <Link
                                    className="backlog"
                                    to="/destiny/worksheet/ripeout"
                                >
                                    <span style={{ fontSize: 20 }}>成品出库</span>
                                </Link>
                            </Card.Grid>
                            <Card.Grid style={gridStyle}>
                                <Link
                                    className="backlog"
                                    to="/destiny/report/daily"
                                >
                                    <span style={{ fontSize: 20 }}>日报表</span>
                                </Link>
                            </Card.Grid>
                        </Card>
                    </Col>
                    <Col span={8}>
                        <Card
                            title="日历"
                            bordered={false}
                            className="content-card"
                        >
                            <Calendar fullscreen={false} onPanelChange={this.onPanelChange} />
                        </Card>
                    </Col>
                </Row>
            </div>
        )
    }
}

export default Home;