import React, { Component } from 'react';
import BreadcrumbCustom from '../../components/breadcrumb';
import { Col, Row, Card } from 'antd';
import { Switch, Route } from 'react-router-dom';
import lazyload from "&/lazyload";

class LinkMan extends Component {
    toPost = () => {
        this.props.history.push("/destiny/linkman/postArt")
    }
    toMine=()=>{
        this.props.history.push("/destiny/linkman/minePost")
    }
    render() {

        return (
            <div>
                <BreadcrumbCustom first={'互动广场'} />
                <Row gutter={24}>
                    <Col spa={24}>
                        <Card
                            title="互动广场"
                            headStyle={{ fontSize: 24, fontWeight: 500 }}
                            extra={[
                                <span key="post" onClick={this.toPost} style={{ color: "#0099cc", marginRight: 10, cursor: "pointer" }}>我要发布</span>,
                                <span key="mine" onClick={this.toMine} style={{ color: "#0099cc", cursor: "pointer" }}>我的发布</span>
                            ]}
                        >
                            <Switch>
                                <Route path="/destiny/linkman" exact component={lazyload(() => import("../../views/linkMan/artList"))} />
                                <Route path="/destiny/linkman/postArt" component={lazyload(() => import("../../views/linkMan/postArt"))} />
                                <Route path="/destiny/linkman/minePost" component={lazyload(() => import("../../views/linkMan/minePost"))} />
                            </Switch>
                        </Card>
                    </Col>
                </Row>
            </div>
        );
    }
}

export default LinkMan;