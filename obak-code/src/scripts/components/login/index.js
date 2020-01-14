import { Form, Icon, Input, Button } from 'antd';
import React from "react";
import { axios } from "&";
import "./index.scss";
let mReg = /^1(3|4|5|7|8|9)[0-9]{9}$/;
let cReg = /^\d{4}$/;
let timer = null;
class NormalLoginForm extends React.Component {
  state = {
    codeFlag: false,
    loginFlag: false,
    toggleFlag: true,
    txt: "发送验证码",
    count: 60,
  }
  handleSubmit = e => {
    e.preventDefault();
    this.props.form.validateFields((err, values) => {
      if (!err) {
        axios.post("/react/checkCode", values)
          .then(res => {
            if (!!res.data.type) {
              sessionStorage.token = res.data.token;
              sessionStorage.mobile = this.mobile.state.value;
              this.props.history.push("/destiny")
            } else {
              sessionStorage.token = "";
              sessionStorage.mobile = "";
            }
          })
        console.log('Received values of form: ', values);
      }
    });
  };
  handleCheckMobile = (v) => {
    var mobile = v.target.value;
    var code = this.code.state.value;
    if (this.state.toggleFlag) {
      this.setState({
        codeFlag: mReg.test(mobile),
        loginFlag: mReg.test(mobile) && cReg.test(code)
      })
    }
  }
  handleCheckCode = (v) => {
    var code = v.target.value;
    this.setState({
      loginFlag: cReg.test(code)
    })
  }
  start = () => {
    if (this.state.count > 1) {
      let count = this.state.count;
      --count
      this.setState({
        count,
        txt: `剩余 ${this.state.count} S`,
        codeFlag: false,
        toggle: false
      })
    } else {
      clearInterval(timer);
      timer = null;
      this.setState({
        count: 60,
        txt: '发送验证码',
        codeFlag: true,
        toggle: true
      })
    }
  }
  computedTime = () => {
    this.start();
    timer = setInterval(this.start, 1000)
  }
  handleSendCode = () => {

    let mobile = this.mobile.state.value;
    this.computedTime()
    axios.post("/react/sendSms", { mobile })
      .then(res => {
        console.log(res)
      })
  }

  render() {
    const { getFieldDecorator } = this.props.form;
    const {
      codeFlag,
      loginFlag,
      txt
    } = this.state;
    return (
      <Form onSubmit={this.handleSubmit} className="login-form">
        <Form.Item>
          {getFieldDecorator('mobile', {
            rules: [{ required: true, message: 'Please input your mobile!' }],
          })(
            <Input
              prefix={<Icon type="phone" style={{ color: 'rgba(0,0,0,.25)' }} />}
              placeholder="Mobile"
              onChange={this.handleCheckMobile}
              ref={el => this.mobile = el}
            />,
          )}
        </Form.Item>
        <Form.Item>
          {getFieldDecorator('code', {
            rules: [{ required: true, message: 'Please input your Code!' }],
          })(
            <div className="code">
              <Input
                prefix={<Icon type="code" style={{ color: 'rgba(0,0,0,.25)' }} />}
                type="text"
                placeholder="Code"
                className="codeInput"
                ref={el => this.code = el}
                onChange={this.handleCheckCode}
              />
              <Button type="danger" onClick={this.handleSendCode} disabled={!codeFlag} className="login-form-button code-btn">
                {txt}
              </Button>
            </div>,
          )}
        </Form.Item>
        <Form.Item>
          <Button type="primary" disabled={!loginFlag} htmlType="submit" className="login-form-button submit-btn">
            Log in
          </Button>
        </Form.Item>
      </Form>
    );
  }
}
const WrappedNormalLoginForm = Form.create({ name: 'normal_login' })(NormalLoginForm);
export default WrappedNormalLoginForm