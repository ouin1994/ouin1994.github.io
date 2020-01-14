
import axios from "axios";
import { message } from "antd"
const baseURL = 'http://47.105.83.238:1993/'
let token = "";
axios.defaults.baseURL = baseURL;
axios.defaults.headers.common['token'] = token;   // req.headers.token 
axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded';



// axios  拦截器  Interceptors
// request 请求发送之前的拦截器
export function loadingToast(msg, time) {
    msg = msg || "请求中...";
    time = time || 1;
    message.loading(msg, time, () => {
        message.destroy();
        console.log(msg);
    });
}

export function fail(msg) {
    message.warning(msg, 1, () => {
        message.destroy();
        console.log(msg);
    });
}

export function offline(msg) {
    message.error(msg, 1, () => {
        message.destroy();
    });
}

export function success(msg) {
    message.destroy();
    message.success(msg, 1, () => {})
}
// axios  拦截器  Interceptors
// request 请求发送之前的拦截器
axios.interceptors.request.use(function (config) {
    // 配置动画
    loadingToast();
    return config;
}, function (error) {
    // 请求失败错误提示 
    offline("请求失败-网络异常");
    return Promise.reject(error);
});



// response 响应 完成 的拦截器
axios.interceptors.response.use(function (response) {
    console.log(response)
    // if (response.data.code === "3000") {
    //     // 跳转 登录 
    // }
    // type  不存在    success
    // type = 0  fail
    // type = 1  success 
    if (!!response.data.type) {
        success(response.data.msg);
    } else {
        if (response.data.type === 0) {
            fail(response.data.msg)
        } else {
            success(response.data.msg)
        }
    }


    // 成功的响应
    return response;
}, function (error) {
    // 失败的响应 
    fail("响应失败-服务器异常")
    return Promise.reject(error);
});
export { axios, baseURL }