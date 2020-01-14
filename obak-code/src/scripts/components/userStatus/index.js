import React, { Component } from 'react';
import { Badge, Avatar } from 'antd';
import { connect } from 'react-redux';
import { baseURL } from "&"
import { pushAvatar, changePic } from '../../redux/actions';
import UserDropMenu from "../userDropDown"
@connect(
    state => {
        return {
            avatar: state.get("avatar"),
            pic: state.getIn(["avatar", "pic"])
        }
    }
)
class UserStatus extends Component {
    handlePushAva = () => {
        this.inp.click()
    }
    handleChangeAva = () => {
        let file = this.inp.files[0];
        if (!file) return
        let data = new FormData();
        data.append("avatar", file)
        let params = {};
        params["mobile"] = sessionStorage.mobile;
        this.props.dispatch(pushAvatar({
            url: "/react/uploadImg",
            data,
            params,
            cb: (val) => {
                val = val.replace(/public/, baseURL)
                let userInfo = {
                    mobile: sessionStorage.mobile,
                    pic: val
                }
                localStorage.setItem("avatar", JSON.stringify(userInfo));
            }
        }))
    }
    getSeverPic = () => {
        let data = {};
        if (sessionStorage.mobile) {
            data["mobile"] = sessionStorage.mobile;

            this.props.dispatch(pushAvatar({
                url: "/react/getAvatar",
                data,
                cb: () => {

                }
            }))
        }

    }
    componentDidMount() {
        if (localStorage.avatar) {
            let mobile = JSON.parse(localStorage.getItem("avatar")).mobile;
            let localPic = JSON.parse(localStorage.getItem("avatar")).pic;
            if (mobile === sessionStorage.mobile) {
                this.props.dispatch(changePic(localPic))
            } else {
                this.getSeverPic()
            }
        } else {
            this.getSeverPic()
        }
    }
    render() {
        const {
            pic
        } = this.props
        return (
            <div className="head-user">
                <span>
                    <Badge status="success" offset={[-10, 53]}>
                        <Avatar src={pic} icon="user" onClick={this.handlePushAva} size={48} />
                        <input type="file" ref={el => this.inp = el} onChange={this.handleChangeAva} style={{ display: "none" }} />
                    </Badge>
                </span>
                <div style={{marginLeft:10,color:"#fff",height:64}}>
                    <UserDropMenu
                        text={sessionStorage.mobile ? sessionStorage.mobile : "游客"}
                        {...this.props}
                    />
                </div>
            </div>
        );
    }
}

export default UserStatus;


