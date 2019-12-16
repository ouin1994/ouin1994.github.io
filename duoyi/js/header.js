'use strict';

//  选项卡
layui.use('element', function () {
    var element = layui.element;

    //…
});
// 获取登录状态
setTimeout(function () {
    if (getCookie('userLogin')) {
        $('.login a').html('战盟用户');
        $('#register a').html('退出');
    }
}, 500);

// 弹出登录及注册页面
$(document).on('click', '.login', function () {
    if (!getCookie('userLogin')) {
        layui.use('layer', function () {
            var layer = layui.layer;
            layer.open({
                type: 1,
                title: false,
                closeBtn: 0,
                shadeClose: true,
                skin: 'yourclass',
                content: ' \n                        <div class="login-tab">\n                            <div class="layui-tab layui-tab-brief login-box">\n                                <ul class="layui-tab-title tab-menu-login">\n                                    <li>\u6218\u76DF\u5FEB\u6377\u767B\u5F55</li>\n                                    <li class="layui-this">\u6218\u76DF\u8D26\u53F7\u767B\u5F55</li>\n                                </ul>\n                                <div class="layui-tab-content">\n                                    <div class="layui-tab-item   login-code">\n                                        <div class="fastLogin">\n                                            <div class="img">\n                                                <img src="data:image/gif;base64,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"\n                                                    alt="">\n                                            </div>\n                                            <p class="text">\u4F7F\u7528<span>\u591A\u76CA\u6218\u76DFAPP</span>\u626B\u7801\u5B89\u5168\u767B\u5F55</p>\n                                        </div>\n                                        <div class="link-menu">\n                                            <a href="">\u4E0B\u8F7D\u591A\u76CA\u6218\u76DF</a>\n                                            <span>|</span>\n                                            <a href="#" class="btn-register">\u6CE8\u518C\u6218\u76DF\u8D26\u53F7</a>\n                                            <span>|</span>\n                                            <a href="">\u5FD8\u8BB0\u5BC6\u7801</a>\n                                        </div>\n                                    </div>\n                                    <div class="layui-tab-item layui-show login-code">\n                                        <div class="passLogin">\n                                            <div class="ipt-box" id="ipt-box-account">\n                                                <label for="account" class="field-icon">\n                                                    <i class="icon icon-email"></i>\n                                                </label>\n                                                <input type="text" placeholder="\u6218\u76DF\u8D26\u53F7" autocomplete="off" id="account" class="ipt-txt">\n                                                <span></span>\n                                                <p class="error uer-error"></p>\n                                            </div>\n                                            <div class="ipt-box" id="ipt-box-password">\n                                                <label for="password" class="field-icon">\n                                                    <i class="icon icon-email"></i>\n                                                </label>\n                                                <input type="text" placeholder="\u5BC6\u7801" autocomplete="off" id="password" class="ipt-txt">\n                                                <span></span>\n                                                <p class="error pass-error"></p>\n                                            </div>\n                                            <div class="ipt-w hide" id="ipt-w-captcha">\n                                               \n                                            </div>\n                                            <div style="margin-top:33px">\n                                                <input type="button" value="\u767B \u5F55" id="btn-login" class="u-btn">\n                                            </div>\n                                            <div class="link-menu">\n                                                <a href="">\u4E0B\u8F7D\u591A\u76CA\u6218\u76DF</a>\n                                                <span>|</span>\n                                                <a href="#" id="btn-register">\u6CE8\u518C\u6218\u76DF\u8D26\u53F7</a>\n                                                <span>|</span>\n                                                <a href="">\u5FD8\u8BB0\u5BC6\u7801</a>\n                                            </div>\n                                        </div>\n                                    </div>\n                                </div>\n                            </div>\n                        </div>\n                        ',
                area: ['460px', '536px']
            });
        });
    }
});
$(document).on('click', '#register', function () {
    if (!getCookie('userLogin')) {
        layui.use('layer', function () {
            var layer = layui.layer;
            layer.open({
                type: 1,
                title: false,
                closeBtn: 0,
                shadeClose: true,
                skin: 'yourclass',
                area: ['460px', '557px'],
                content: '\n                    <div class="register">\n                        <div class="title">\u6CE8\u518C\u6218\u76DF\u8D26\u53F7</div>\n                            <div class="nav">\n                                <span>\u666E\u901A\u8D26\u53F7</span>\n                            </div>\n                        <div class="register-box">\n                            <div class="username">\n                                <span class="name">\u8D26\u53F7</span>\n                                <input type="text" autocomplete="off" placeholder="\u8BF7\u8F93\u5165\u624B\u673A\u53F7\u6216\u5E38\u7528\u90AE\u7BB1" class="write" id="username"\n                                    autofocus="autofocus">\n                                <span class="icon error"></span>\n                                <p class="text">\u8BF7\u786E\u4FDD\u90AE\u7BB1\u771F\u5B9E\u6709\u6548\uFF0C\u7528\u4E8E\u6CE8\u518C\u540E\u7684\u9A8C\u8BC1</p>\n                            </div>\n                            <div class="yanzheng hide">\n                                <p class="name">\u5B8C\u6210\u9A8C\u8BC1</p>\n                                <span class="btn-captcha"><a href="#">\u70B9\u51FB\u6309\u94AE\u5B8C\u6210\u9A8C\u8BC1</a></span>\n                            </div>\n                            <div class="phone hide">\n                                <span class="name">\u624B\u673A\u9A8C\u8BC1\u7801</span>\n                                <input type="text" autocomplete="off" placeholder="\u8BF7\u8F93\u5165\u624B\u673A\u9A8C\u8BC1\u7801" class="write" style="width:150px">\n                                <button class="u-btn btn-getCode">\u83B7\u53D6\u9A8C\u8BC1\u7801</button>\n                            </div>\n                            <div class="password">\n                                <span class="name">\u767B\u5F55\u5BC6\u7801</span>\n                                <input type="text" autocomplete="off" placeholder="\u8BF7\u8F93\u51656-16\u4F4D\u6570\u5B57\u6216\u5B57\u6BCD" class="write" id="loginPass">\n                                <span class="icon error"></span>\n                                <p class="text"></p>\n                            </div>\n                            <div class="password-two">\n                                <span class="name">\u786E\u8BA4\u5BC6\u7801</span>\n                                <input type="text" autocomplete="off" placeholder="\u8BF7\u518D\u6B21\u8F93\u5165\u767B\u5F55\u5BC6\u7801" class="write" id="passEnter">\n                                <span class="icon error"></span>\n                                <p class="text"></p>\n                            </div>\n                            <div class="protocol">\n                                <label for="">\n                                    <span>\n                                        <input checked type="checkbox" id="agree" class="ipt-chk">\n                                    </span>\n                                    \u5DF2\u9605\u8BFB\u5E76\u540C\u610F\n                                    <a href="" class="link" target="_blank">\u670D\u52A1\u6761\u6B3E</a>\n                                </label>\n                            </div>\n                            <div class="submit">\n                                <input type="button" value="\u7ACB\u5373\u6CE8\u518C" class="u-btn btn-register">\n                            </div>\n                        </div>\n                    </div>'
            });
        });
    }if (getCookie('userLogin')) {
        removeCookie('userLogin');
        console.log(666);
        $('.login a').html('登录');
        $('#register a').html('注册');
    }
});

//登录跳转注册
$(document).on('click', '#btn-register', function () {
    layui.use('layer', function () {
        var layer = layui.layer;
        layer.closeAll(); //疯狂模式，关闭所有层
    });
    $('#register').trigger('click');
});

//  登录页面Js
$(document).on('click', '#btn-login', function () {
    var userReg = /^(1\d{10})$|^(\w+@\w+(\.\w+)+)$/ig;
    if (userReg.test($('#account').val())) {
        $('.uer-error').html('');
        var username = $('#account').val();
        var password = $('#password').val();
        $.ajax({
            type: 'get',
            url: 'http://' + (location.host.indexOf(':5500') > -1 ? 'localhost' : location.host) + '/project/login.php',
            data: {
                username: username,
                password: password
            },
            dataType: 'json',
            success: function success(data) {
                if (data.data) {
                    layui.use('layer', function () {
                        var layer = layui.layer;
                        layer.closeAll(); //疯狂模式，关闭所有层
                    });
                    setCookie('userLogin', username, 7);
                    // 获取登录状态
                    setTimeout(function () {
                        if (getCookie('userLogin')) {
                            $('.login a').html('战盟用户');
                            $('#register a').html('退出');
                        }
                    }, 1000);
                } else {
                    layui.use('layer', function () {
                        var layer = layui.layer;
                        layer.msg(data.msg);
                    });
                }
            }
        });
    } else {
        $('.uer-error').html('用户名或密码错误');
    }
});

//  注册页面Js
var flag = false;
var flag1 = false;
var flag2 = false;
$(document).on('blur', '#username', function () {
    var userReg = /^(1\d{10})|(\w+@\w+(\.\w+)+)$/ig;
    if (userReg.test(this.value)) {
        $(this).next().html('√').css({
            'color': 'green'
        }).next().html('');

        flag = true;
    } else {
        $(this).siblings('p').html('请输入正确的手机号或邮箱').css({
            'color': 'red'
        });
        flag = false;
    }
});

$(document).on('blur', '#loginPass', function () {
    var reg = /^[A-Za-z][a-zA-Z0-9]{5,15}$/ig;
    if (reg.test(this.value)) {
        $(this).next().html('√').css({
            'color': 'green'
        });
        $(this).siblings('p').html('');
        flag1 = true;
    } else {
        $(this).siblings('p').html('密码包含非法字符').css({
            'color': 'red'
        });
        $(this).next().html('');
        flag1 = false;
    }
});

$(document).on('blur', '#passEnter', function () {
    if (this.value == $('#loginPass').val() && this.value != '') {
        $(this).next().html('√').css({
            'color': 'green'
        });
        $(this).siblings('p').html('');
        flag2 = true;
    } else {
        $(this).siblings('p').html('两次密码不一致').css({
            'color': 'red'
        });
        $(this).next().html('');
        flag2 = false;
    }
});

$(document).on('click', '.btn-register', function () {
    if (flag && flag1 && flag2 && $('#agree')[0].checked) {

        var username = $('#username').val();
        var password = $('#loginPass').val();
        $.ajax({
            type: 'get',
            url: 'http://' + (location.host.indexOf(':5500') > -1 ? 'localhost' : location.host) + '/project/register.php',
            data: {
                username: username,
                password: password
            },
            dataType: 'json',
            success: function success(data) {
                if (data.data) {
                    layui.use('layer', function () {
                        var layer = layui.layer;
                        layer.closeAll();
                        $('.login').trigger('click');
                        layer.msg('注册成功!请登录');
                    });
                } else {
                    layui.use('layer', function () {
                        var layer = layui.layer;

                        layer.msg(data.msg);
                    });
                }
            }
        });
    } else {
        layui.use('layer', function () {
            var layer = layui.layer;
            layer.msg('请注意红色提示文字');
        });
    }
});

//  购物车
$(document).on('click', '.cart', function () {
    if (getCookie('userLogin')) {
        location.href = '/html/goods-cart.html';
    } else {
        $('.login').trigger('click');
    }
});