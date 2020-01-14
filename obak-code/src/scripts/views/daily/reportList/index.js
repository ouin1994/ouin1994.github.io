import { List, Avatar, Button, Skeleton, message } from 'antd';
import React, { Component } from 'react';
import { observer } from 'mobx-react';
import Report from "~/mobx/report"
import { axios } from "&"
import OnlyReadReport from '../onlyRead';

let count = 1;

@observer
class LoadMoreList extends Component {
    state = {
        initLoading: true,
        loading: false,
    };

    componentDidMount() {
        this.setState({
            initLoading: false,
        });
        if (sessionStorage.mobile) {

        } else {

        }
    }

    onLoadMore = () => {
        count++
        this.setState({
            loading: true,
        });
        axios.post("/react/getReport", {
            type: "daily",
            count
        }).then(res => {
            if (res.data.result.length <= (5 * (count - 1))) {
                this.setState({
                    loading: true,
                });
                message.warning("没有更多数据了")
                return
            }
            Report.changeList(res)
            this.setState({
                loading: false,
            });
        })
    };
    handleSeeMore = (item) => {
        Report.changeOnly(item)
        Report.changeOnlyVisible(true)
    }
    render() {
        const { initLoading, loading } = this.state;
        const loadMore =
            !initLoading && !loading ? (
                <div
                    style={{
                        textAlign: 'center',
                        marginTop: 12,
                        height: 32,
                        lineHeight: '32px',
                    }}
                >
                    <Button onClick={this.onLoadMore}>loading more</Button>
                </div>
            ) : null;
        return (
            <List
                className="demo-loadmore-list"
                loading={initLoading}
                itemLayout="horizontal"
                loadMore={loadMore}
                dataSource={Report.list}
                renderItem={item => (
                    <List.Item
                        actions={[<a onClick={() => this.handleSeeMore(item)} key="list-loadmore-more">详情</a>]}
                    >
                        <Skeleton avatar title={false} loading={item.loading} active>
                            <List.Item.Meta
                                avatar={<Avatar src={item.avatar} />}
                                title={<a href="https://ant.design">{item.title}</a>}
                            />
                            <div>{item.time}</div>
                        </Skeleton>
                    </List.Item>
                )}
            >
                <OnlyReadReport />
            </List>
        );
    }
}
export default LoadMoreList