import React, { Component } from 'react';
import { List, Avatar, Card } from 'antd';
import { observer } from 'mobx-react';
import LinkMan from "~/mobx/link";
@observer
class ArtList extends Component {

    componentDidMount() {
        LinkMan.getArtList({
            url: "/react/getArtList"
        })
    }
    render() {
        const {
            artList
        } = LinkMan
        return (
            <Card
                title="大家发布"
            >
                <List
                    itemLayout="horizontal"
                    dataSource={artList}
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
        );
    }
}

export default ArtList;