import React, { Component } from 'react';
import { Menu, Icon } from "antd"
import { Link } from 'react-router-dom';
// const { SubMenu } = Menu;// item.route 菜单单独跳转的路由
export class RenderMenuItem extends Component {
    renderMenuItem = ({ key, icon, title, }) => {
        return (
            <Menu.Item key={key}>
                <Link to={key}>
                    {icon && <Icon type={icon} />}
                    <span>{title}</span>
                </Link>
            </Menu.Item>
        )
    }
    renderSubMenu = ({ key, icon, title, subs }) => {
        return (
            <Menu.SubMenu key={key} title={<span>{icon && <Icon type={icon} />}<span>{title}</span></span>}>
                {
                    subs && subs.map(item => {
                        return item.subs && item.subs.length > 0 ? this.renderSubMenu(item) : this.renderMenuItem(item)
                    })
                }
            </Menu.SubMenu>
        )
    }

    render() {
        return (
            <Menu
                theme="dark"
                defaultSelectedKeys={['1']}
                mode="inline"
            >
                {
                    this.props.menus && this.props.menus.map(item => {
                        return item.subs && item.subs.length > 0 ? this.renderSubMenu(item) : this.renderMenuItem(item)
                    })
                }
            </ Menu>
        )
    }
    
}




