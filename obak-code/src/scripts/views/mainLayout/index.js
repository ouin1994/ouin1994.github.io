import { Layout, Icon } from 'antd';
import React, { Component } from "react";
import "./index.scss";

import { RenderMenuItem, } from '../renderMenu';
import routes from "~/routes";
import MainRoute from '../../components/mainRoute';
import UserStatus from '../../components/userStatus';
const { Header, Content, Footer, Sider } = Layout;
const { menus } = routes


class SiderDemo extends Component {
    state = {
        collapsed: false,
        logoWidth: "20%",
    };
    onCollapse = collapsed => {
        this.setState({ collapsed });
        if (collapsed) {
            this.setState({
                logoWidth: "100%"
            })
        } else {
            this.setState({
                logoWidth: "20%"
            })
        }
    };
    toggle = () => {
        this.setState({
            collapsed: !this.state.collapsed,
        });
        let collapsed = this.state.collapsed
        if (!collapsed) {
            this.setState({
                logoWidth: "100%"
            })
        } else {
            this.setState({
                logoWidth: "20%"
            })
        }
    }
    render() {
        const {
            collapsed
        } = this.state
        return (
            <Layout style={{ minHeight: '100vh' }}>
                <Sider
                    className="sider-main"
                    style={{
                        height: '100vh',
                        position: 'fixed',
                        left: 0,
                        zIndex: 100
                    }}
                    breakpoint="lg"
                    collapsedWidth="80"
                    collapsible
                    collapsed={this.state.collapsed}
                    trigger={null}
                    onCollapse={this.onCollapse}
                >
                    <div className="logo" style={{ backgroundColor: "#fff", lineHeight: "36px" }}>
                        <a id="logo" href="/">
                            <img style={{ width: this.state.logoWidth, marginLeft: "5%" }} alt="logo" src="https://gw.alipayobjects.com/zos/rmsportal/KDpgvguMpGfqaHPjicRK.svg" />
                            {
                                !this.state.collapsed && <img style={{ width: "60%", marginLeft: "5%" }} alt="Ant Design" src="https://gw.alipayobjects.com/zos/rmsportal/DkKNubTaaVsKURhcVGkh.svg" />
                            }
                        </a>
                    </div>
                    <RenderMenuItem
                        {...this.props}
                        menus={menus}
                    />
                </Sider>
                <Layout>
                    <Header
                        style={{
                            background: '#001529',
                            padding: 0,
                            position: 'fixed',
                            top: 0,
                            zIndex: 99,
                            width: "100%"
                        }}
                        id="header"
                    >
                        <Icon
                            className="trigger"
                            type={this.state.collapsed ? 'menu-unfold' : 'menu-fold'}
                            onClick={this.toggle}
                            style={{ left: collapsed ? "90px" : "210px", }}
                        />
                        <UserStatus
                        {...this.props}
                        />
                    </Header>
                    <Content
                        style={{
                            width:"80%",
                            margin: '64px 16px 0px 0px',
                            marginLeft: collapsed ? "90px" : "210px",
                            overflowX: "hidden"
                        }}
                    >
                        <MainRoute />
                    </Content>
                    <Footer style={{ textAlign: 'center' }}>Ou Destiny ©2017 Created by ODestiny</Footer>
                </Layout>
            </Layout>
        );
    }
}

export default SiderDemo