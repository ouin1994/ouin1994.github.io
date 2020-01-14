import React, { Component } from 'react';
import { Row, Col, Card, List, Avatar } from 'antd';
import { observer } from 'mobx-react';
import LinkMan from "~/mobx/link";
@observer
class MinePost extends Component {
    goBack = () => {
        this.props.history.push("/destiny/linkman")
    }
    componentDidMount() {
        LinkMan.getMineArt({
            url: "/react/getMineList",
            data: sessionStorage.mobile
        })
    }
    render() {
        const {
            mineArt
        } = LinkMan
        return (
            <div>
                <Row gutter={24}>
                    <Col span={24}>
                        <Card
                            title="我的发布"
                            extra={<span onClick={this.goBack} style={{ color: "#0099cc" }}>返回</span>}
                        >
                            <List
                                itemLayout="horizontal"
                                dataSource={mineArt}
                                renderItem={item => (
                                    <List.Item>
                                        <List.Item.Meta
                                            avatar={<Avatar src={item.avatar} />}
                                            title={<span>{item.title}</span>}
                                        />
                                        <div>{item.time}</div>
                                    </List.Item>
                                )}
                            />
                        </Card>
                    </Col>
                </Row>
            </div>
        );
    }
}

export default MinePost;