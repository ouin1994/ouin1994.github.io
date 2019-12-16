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

        if (data.data[0]) {
            $('.no-goods').css({
                display: 'none'
            });
            $('.has-goods').css({
                display: 'block'
            });
            var list = '';
            data.data.forEach(function (_ref) {
                var goods_name = _ref.goods_name,
                    goods_price = _ref.goods_price,
                    goods_desc = _ref.goods_desc,
                    goods_img = _ref.goods_img,
                    goods_count = _ref.goods_count,
                    goods_id = _ref.goods_id;

                list += '\n                        <ul>\n                            <li class="select">\n                                <i class="other"></i>\n                            </li>\n                            <li class="goods">\n                                <div class="left">\n                                    <img src=' + goods_img + '>\n                                </div>\n                                <div class="right">\n                                    <h4 class="goods-name sl">' + goods_name + '</h4>\n                                    <p class="desc">' + goods_desc + '</p>\n                                </div>\n                            </li>\n                            <li class="prices">' + goods_price + '</li>\n                            <li class="numbers" data_id="' + goods_id + '">\n                                <span class="reduce" data-click="1"><i></i></span>\n                                <input class=\'count\' type="text" value=\'' + goods_count + '\'>\n                                <span class="add" data-click="1"><i></i></span>\n                            </li>\n                            <li class="total">' + (Number(goods_price) * Number(goods_count)).toFixed(2) + '</li>\n                            <li class="handle">\n                                <i class="delete"></i>\n                            </li>\n                        </ul>';
            });
            $('.goods-list').html(list);
        } else {
            $('.no-goods').css({
                display: 'block'
            });
            $('.has-goods').css({
                display: 'none'
            });
        }
    }
});

// 全选和反选
$(document).on('click', '.bar-01 i', function () {
    checkAll();
    goPay();
});
$(document).on('click', '.select i', function () {
    if ($(this).attr('class') == 'active') {
        $(this).removeClass('active');
        $(this).addClass('other');
    } else {
        $(this).addClass('active');
        $(this).removeClass('other');
    }
    if ($('.select i').filter('.other').length == 0) {
        $('.bar-01 i').addClass('active');
        $('.bar-01 i').removeClass('other');
    }
    if ($('.select i').filter('.active').length < $('.select i').length) {
        $('.bar-01 i').addClass('other');
        $('.bar-01 i').removeClass('active');
    }
    getTotal();
    goPay();
});

//增加和减少
$(document).on('click', '.add', function () {
    var self = this;
    var locked = $(self).attr('data-click') * 1;
    if (!locked) {
        return;
    }
    $(self).attr('data-click', 0);
    var goods_id = $(self).parent().attr('data_id') * 1;
    var count = $(self).prev().val() * 1;
    var price = $(self).parent().prev().html() * 1;
    addAndReduce(goods_id, count, 1, function (newCount) {
        $(self).attr('data-click', 1);

        $(self).prev().val(newCount);
        $(self).parent().next().html((newCount * price).toFixed(2));
        getTotal();
    });
});
$(document).on('click', '.reduce', function () {
    var self = this;
    var locked = $(self).attr('data-click') * 1;
    if (!locked) {
        return;
    }
    $(self).attr('data-click', 0);
    var goods_id = $(self).parent().attr('data_id') * 1;
    var count = $(self).next().val() * 1;
    var price = $(self).parent().prev().html() * 1;
    if (count <= 1) {
        $(self).next().html('1');
        $(self).attr('data-click', 1);
    } else {
        addAndReduce(goods_id, count, -1, function (newCount) {
            $(self).attr('data-click', 1);
            $(self).next().val(newCount);
            $(self).parent().next().html((newCount * price).toFixed(2));
            getTotal();
        });
    }
});

function addAndReduce(goods_id, count, symbol, fn) {
    var goods_count = 1 * symbol;
    $.ajax({
        type: 'get',
        url: 'http://' + (location.host.indexOf(':5500') > -1 ? 'localhost' : location.host) + '/project/cart-add.php',
        data: {
            username: username,
            goods_id: goods_id,
            goods_count: goods_count
        },
        dataType: 'json',
        success: function success(data) {
            if (data.data) {
                var newCount = void 0;
                newCount = count + goods_count;
                fn(newCount);
            } else {
                layer.msg(data.msg);
                $('.add').attr('data-click', 1);
                $('.reduce').attr('data-click', 1);
            }
        }
    });
}

//删除
$(document).on('click', '.delete', function () {
    var self = this;
    var goods_id = $(self).parent().prev().prev().attr('data_id');
    $.ajax({

        type: 'get',
        url: 'http://' + (location.host.indexOf(':5500') > -1 ? 'localhost' : location.host) + '/project/cart-delete.php',
        data: {
            username: username,
            goods_id: goods_id

        },
        dataType: 'json',
        success: function success(data) {
            if (data.data) {
                layer.msg(data.msg);
                if ($('.select i').filter('.other').length == 0) {
                    $('.bar-01 i').addClass('active');
                    $('.bar-01 i').removeClass('other');
                }
                if ($('.select i').filter('.active').length < $('.select i').length) {
                    $('.bar-01 i').addClass('other');
                    $('.bar-01 i').removeClass('active');
                }

                $(self).parent().parent().remove();
                getTotal();
            } else {
                layer.msg(data.msg);
            }
        }

    });
});

// 跳转结算页
$(document).on('click', '.go-pay', function () {
    var key = $('.select .active').parent().siblings('.numbers');
    var value = '';
    key.each(function () {
        value += $(this).attr('data_id') + '=';
    });
    value = value.substring(0, value.length - 1);
    localStorage.setItem('id', value);
    location.href = './goods-pay.html';
});
// 小计
function getTotal() {
    var money = 0;
    var num = 0;
    for (var i = 0; i < $('.select .active').length; i++) {
        num += $($('.select .active')[i]).parent().siblings('.numbers').find('.count').val() * 1;
        money += $($('.select .active')[i]).parent().siblings('.total').html() * 1;
    }
    $('.goods-num span').html(num);
    $('.money span').html('\uFFE5' + money.toFixed(2));
}
//全选
function checkAll() {
    if ($('.bar-01 i').attr('class') == 'active') {
        $('.bar-01 i').removeClass('active');
        $('.select i').removeClass('active');
        $('.select i').addClass('other');
    } else {
        $('.bar-01 i').addClass('active');
        $('.select i').addClass('active');
        $('.select i').removeClass('other');
    }

    getTotal();
    goPay();
}

goPay();

function goPay() {
    var count = 0;
    $('.select i').each(function () {
        if (this.className == 'active') {
            count++;
        }
    });
    if (count > 0) {
        $('.go-pay').prop({
            disabled: false
        }).css({
            cursor: 'pointer',
            backgroundPosition: '-172px -60px'
        });;
    } else {
        $('#go-pay').prop({
            disabled: true
        }).css({
            cursor: 'default',
            backgroundPosition: '0 0'
        });
    }
}