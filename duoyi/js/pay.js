'use strict';

$('.header').load('../layout/header.html');
$('#footer').load('../layout/footer.html');
var layer = void 0;
layui.use('layer', function () {
    layer = layui.layer;
});

var username = getCookie('userLogin');
$.ajax({
    type: 'get',
    url: 'http://' + (location.host.indexOf(':5500') > -1 ? 'localhost' : location.host) + '/project/cart-list.php',
    data: {
        username: username
    },
    dataType: 'json',
    success: function success(data) {
        var num = localStorage.getItem("id");
        num = num.split('=');
        var newData = [];
        data.data.forEach(function (value, index) {
            for (var i = 0; i < num.length; i++) {
                if (value.goods_id == num[i]) {
                    newData.push(value);
                }
            }
        });
        if (newData[0]) {
            var list = '';
            newData.forEach(function (_ref) {
                var goods_name = _ref.goods_name,
                    goods_price = _ref.goods_price,
                    goods_desc = _ref.goods_desc,
                    goods_img = _ref.goods_img,
                    goods_count = _ref.goods_count;

                list += '\n                <ul>\n                    <li class="goods">\n                        <div class="left">\n                            <img src=' + goods_img + '>\n                        </div>\n                        <div class="right">\n                            <h4 class="goods-name sl">' + goods_name + '</h4>\n                            <p class="desc">' + goods_desc + '</p>\n                        </div>\n                    </li>\n                    <li class="prices">' + goods_price + '</li>\n                    <li class="numbers">' + goods_count + '</li>\n                    <li class="total">' + (Number(goods_price) * Number(goods_count)).toFixed(2) + '</li>\n                </ul>';
            });
            $('.goods-list').html(list);
            var _num = 0;
            var money = 0;
            for (var i = 0; i < $('.numbers').length; i++) {
                _num += $($('.numbers')[i]).html() * 1;
                money += $($('.total')[i]).html() * 1;
            }
            // console.log(num,money)
            $('.goods-total').html(_num);
            $('.price-total').html(money);
            $('.must-pay span').html('\uFFE5' + money);
        }
    }
});

//agree协议
$(document).on('click', '.agreement i', function () {
    if ($(this).attr('class') == 'active') {
        $(this).attr('class', '');
    } else {
        $(this).attr('class', 'active');
    }
});

// 新增收货地址
$(document).on('click', '.setAddress', function () {
    $('.div').show();
    var API = 'http://api.yytianqi.com/citylist/id/2';
    var APIKEY = 'l314qu5kf3pgwgkq';
    $.ajax({
        type: 'get',
        url: API,
        data: {},
        dataType: 'json',
        success: function success(data) {
            data = data.list;
            fn(data);
        }
    });
    $(document).on('click', '.add-title span', function () {
        $('.div').css({
            display: 'none'
        });
        $('#username').val('');
        $('#phone').val('');
        $('#province .show').text('请选择省份');
        $('#city .show').text('请选择城市');
        $('#area .show').text('请选择区域');
        $('#street').val('');
    });
    $(document).on('click', '#cancel', function () {
        $('.div').css({
            display: 'none'
        });
        $('#username').val('');
        $('#phone').val('');
        $('#province .show').text('请选择省份');
        $('#city .show').text('请选择城市');
        $('#area .show').text('请选择区域');
        $('#street').val('');
    });
    $(document).on('click', '.default i', function () {
        if ($(this).attr('class') == 'active') {
            $(this).removeClass('active');
        } else {
            $(this).addClass('active');
        }
    });
    $(document).on('click', '#sure', function () {
        var self = this;
        var locked = $(self).attr('data-click') * 1;
        if (!locked) {
            return;
        }
        $(self).attr('data-click', 0);
        // 取对应值
        var addName = $('#username').val();
        if (addName != '') {
            addName = addName;
        } else {
            layer.msg('请填写名称');
            $(self).attr('data-click', 1);
            return;
        }
        var phoneNum = $('#phone').val();
        if (phoneNum.length == 11 && /^1[0-9]{10}$/ig.test(phoneNum)) {
            phoneNum = phoneNum;
        } else {
            layer.msg('请填写正确的电话号码');
            $(self).attr('data-click', 1);

            return;
        }
        var address = $('#province .show').html() + '省' + $('#city .show').html() + '市' + $('#area .show').html() + '区' + $('#street').val();
        if ($('#area .show').html() != '请选择区域' && $('#street').val()) {
            address = address;
        } else {
            layer.msg('请填写正确的地址');
            $(self).attr('data-click', 1);

            return;
        }
        var defaultMess = void 0;
        if ($('.default i').attr('class') == 'active') {
            defaultMess = '默认';
        } else {
            defaultMess = '';
        }
        var defaultNews = defaultMess.length != 0 ? true : false;
        ajax('http://' + (location.host.indexOf(':5500') > -1 ? 'localhost' : location.host) + '/project/address-add.php', username, addName, phoneNum, address, defaultNews);
    });
});

// 渲染收货地址
renderAddress();
function renderAddress() {
    $.ajax({
        type: 'get',
        url: 'http://' + (location.host.indexOf(':5500') > -1 ? 'localhost' : location.host) + '/project/address-list.php',
        data: {
            username: username
        },
        dataType: 'json',
        success: function success(data) {
            data = data.data;
            if (data) {
                var html = '';
                data.forEach(function (_ref2) {
                    var addname = _ref2.addname,
                        addplace = _ref2.addplace,
                        addtel = _ref2.addtel,
                        defaultnews = _ref2.defaultnews,
                        id = _ref2.id;


                    if (defaultnews == 'true') {
                        defaultnews = '默认';
                    } else {
                        defaultnews = '普通';
                    }
                    html += '\n                    <div class="item">\n                        <div class="item-left">\n                            <i class=""></i>\n                            <span class="add-name">' + addname + '</span>\n                            <span class="place">' + addplace + '</span>\n                            <span class="tel">' + addtel + '</span>\n                            <span class="default-select active">' + defaultnews + '</span>\n                        </div>\n                        <div class="item-right">\n                            <span class="edit" data-id="' + id + '">\u7F16\u8F91</span>\n                            <span class="del" data-id="' + id + '">\u5220\u9664</span>\n                        </div>\n                    </div>';
                });
                $('.address-list').html(html);
            } else {
                $('.address-list').empty();
            }
        }
    });
}

// 地址的删除修改及选中操作
//选中
$(document).on('click', '.item-left i', function () {
    if ($(this).attr('class') == 'active') {
        $(this).removeClass('active');
    } else {
        $(this).addClass('active');
    }
});
// 删除
$(document).on('click', '.del', function () {
    var id = $(this).attr('data-id') * 1;
    $.ajax({
        type: 'get',
        url: 'http://' + (location.host.indexOf(':5500') > -1 ? 'localhost' : location.host) + '/project/address-del.php',
        data: {
            username: username,
            id: id
        },
        dataType: 'json',
        success: function success(data) {
            layer.msg(data.msg);
            renderAddress();
        }
    });
});
// 修改
$(document).on('click', '.edit', function () {
    $('.setAddress').trigger('click');
});

// ajax请求
function ajax(url, username, addName, phoneNum, address, defaultNews) {
    var id = arguments.length > 6 && arguments[6] !== undefined ? arguments[6] : '';

    $.ajax({
        type: 'get',
        url: url,
        data: {
            username: username,
            addName: addName,
            phoneNum: phoneNum,
            address: address,
            defaultNews: defaultNews
        },
        dataType: 'json',
        success: function success(data) {
            renderAddress();
            layer.msg('设置成功');
            $('#sure').attr('data-click', 1);
            $('.div').hide();
            $('#username').val('');
            $('#phone').val('');
            $('#province .show').text('请选择省份');
            $('#city .show').text('请选择城市');
            $('#area .show').text('请选择区域');
            $('#street').val('');
        }
    });
}

function fn(data) {
    var provinceList = formateData(data);
    var html = '';
    provinceList.forEach(function (_ref3) {
        var city_id = _ref3.city_id,
            name = _ref3.name;
        return html += '<li city_id="' + city_id + '">' + name + '</li>';
    });
    $('#province ul').html(html);

    $('#province').on('click', function () {
        console.log(6666);
        $('#province ul').show();
        $('#city .show').text('请选择城市');
        $('.select-city').html('');
        $('#area .show').text('请选择区域');
        $('.select-area').html('');
    });
    $('.select-prov').off('click').on('click', 'li', function (e) {
        var ev = event || e;
        ev.stopPropagation();
        $('.select-prov').hide();
        $('#province .show').text($(this).html());

        var city_id = $(this).attr('city_id');

        var provinceObj = provinceList.filter(function (value) {
            return value.city_id == city_id;
        })[0];
        var cityList = provinceObj.list;

        renderCity(cityList);

        $('#area').on('click', function () {
            $('.select-area').show();
        });
        $('.select-area').on('click', 'li', function (e) {
            var ev = event || e;
            ev.stopPropagation();
            $('#area .show').text($(this).html());
            $('.select-area').hide();
        });
    });
}

function renderCity(cityList) {
    var html = '';
    cityList.forEach(function (_ref4) {
        var city_id = _ref4.city_id,
            name = _ref4.name;
        return html += '<li city_id="' + city_id + '">' + name + '</li>';
    });

    $('.select-city').html(html);

    $('#city').on('click', function () {
        $('.select-city').show();
        $('#area .show').text('请选择区域');
        $('.select-area').html('');
    });
    $('.select-city').off('click').on('click', 'li', function (e) {
        var ev = event || e;
        ev.stopPropagation();
        $('.select-city').hide();
        $('#city .show').text($(this).html());
        var city_id = $(this).attr('city_id');
        var cityObj = cityList.filter(function (value) {
            return value.city_id == city_id;
        })[0];

        var areaList = cityObj.list;

        var html = '';
        areaList.forEach(function (_ref5) {
            var city_id = _ref5.city_id,
                name = _ref5.name;

            html += '<li city_id="' + city_id + '">' + name + '</li>';
        });
        $('.select-area').html(html);
    });
}

function formateData(data) {
    var list = data.filter(function (_ref6) {
        var city_id = _ref6.city_id;
        return city_id == 'CH01' || city_id == 'CH02' || city_id == 'CH03' || city_id == 'CH04';
    });

    var municipalities = {
        city_id: "CH98",
        name: "直辖市",
        en: '',
        list: list
    };

    var list = data.filter(function (_ref7) {
        var city_id = _ref7.city_id;
        return city_id == "CH32" || city_id == "CH33";
    });

    var Sar = {
        city_id: "CH99",
        name: "特别行政区",
        en: '',
        list: list
    };

    var provinceList = data.filter(function (_ref8) {
        var city_id = _ref8.city_id;
        return !(city_id == "CH01" || city_id == "CH02" || city_id == "CH03" || city_id == "CH04" || city_id == "CH32" || city_id == "CH33");
    });
    provinceList.unshift(municipalities, Sar);
    return provinceList;
}