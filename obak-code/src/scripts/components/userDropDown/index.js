import { Menu, Dropdown, Button } from 'antd';
import React, { Component } from 'react';




class UserDropMenu extends Component {
    handleClick = () => {
        sessionStorage.token = "";
        sessionStorage.mobile = "";
        this.props.history.push("/login")
    }
    render() {
        const menu = (
            <Menu>
                <Menu.Item key="1">
                    <span>个人信息</span>
                </Menu.Item>
                <Menu.Item
                    key="2"
                    onClick={this.handleClick}
                >
                    <span>退出</span>
                </Menu.Item>
                <Menu.Item key="3">
                    <span>联系管理员</span>
                </Menu.Item>
            </Menu>
        )
        const { text } = this.props
        console.log(this.props)
        return (
            <Dropdown
                overlay={menu}
                placement="bottomCenter"
            >
                <div
                    style={{ color: "#fff", marinLeft: 10, height: 64 }}
                >{text}</div>
            </Dropdown>
        );
    }
}

export default UserDropMenu;
