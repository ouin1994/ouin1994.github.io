import React, { Component } from 'react';

import "./index.scss";
import WrappedNormalLoginForm from '../../components/login';
class Login extends Component {
    render() {
        return (
            <div className='login'>
                <div className='flex login-header'>
                    <div className='login-header-logo'>Destiny</div>
                    <div className='login-header-href'>
                        <a target='_blank' href="https://github.com/chengllNice" rel="noopener noreferrer">GitHub</a>
                    </div>
                </div>
                <div className='flex login-content'>
                    <div className="outbox">
                        <div className="title">
                            <p>登录</p>
                        </div>
                        <div className="Box">
                            <WrappedNormalLoginForm
                            {...this.props}
                            />
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Login;