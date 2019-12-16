'use strict';

$('.header').load('../layout/header.html');
$('#footer').load('../layout/footer.html');

//  放大镜
$(document).on('mouseenter', '.small-box', function () {
    $('.show').css({
        display: 'block'
    }).prev().css({
        display: 'none'
    });
    $('.big-box').css({
        display: 'block'
    });

    $(this).on('mousemove', function (e) {
        // console.log(this)
        var ev = event || e;
        var target = ev.target || ev.srcElement;

        var _$$offset = $('.small-box').offset(),
            y = _$$offset.top,
            x = _$$offset.left;

        var maxLeft = $('.small-box').outerWidth() - $('.show').outerWidth();
        var maxTop = $('.small-box').outerHeight() - $('.show').outerHeight();
        var scaleX = ($('.big-box img').outerWidth() - $('.big-box').outerWidth()) / maxLeft;
        var scaleY = ($('.big-box img').outerHeight() - $('.big-box').outerHeight()) / maxTop;
        var left = ev.pageX - $('.show').width() / 2 - x;
        var top = ev.pageY - $('.show').height() / 2 - y;

        if (left < 0) left = 0;
        if (left > maxLeft) left = maxLeft;
        if (top < 0) top = 0;
        if (top > maxTop) top = maxTop;

        $('.show').css({
            left: left,
            top: top
        });
        $('.big-box img').css({
            left: -(left * scaleX),
            top: -(top * scaleY)
        });
    });
});
$(document).on('mouseleave', '.small-box', function () {
    $('.show').css({
        display: 'none'
    }).prev().css({
        display: 'block'
    });
    $('.big-box').css({
        display: 'none'
    });
});
$(document).on('click', '.img-list li img', function () {
    $(this).css({
        border: '2px solid #f35356'
    }).parent().siblings().children().css({
        border: 'none'
    });
    $('.small-box img').attr({
        src: this.src
    });
    $('.big-box img').attr({
        src: this.src
    });
});

//  数量加减
var count = 1;
$(document).on('click', '#add', function () {
    count++;
    if (count >= 5) count = 5;
    $(this).prev().val(count);
}).on('click', '#reduce', function () {
    count--;
    if (count <= 1) count = 1;
    $(this).next().val(count);
});

//  数据请求
var str = location.search;
var id = str.split('=')[1];
$.ajax({
    type: 'get',
    url: 'http://' + (location.host.indexOf(':5500') > -1 ? 'localhost' : location.host) + '/project/goods-detail.php',
    data: {
        id: id
    },
    dataType: 'json',
    success: function success(_ref) {
        var code = _ref.code,
            _ref$data = _ref.data,
            goods_name = _ref$data.goods_name,
            goods_price = _ref$data.goods_price,
            goods_image = _ref$data.goods_image,
            goods_desc = _ref$data.goods_desc,
            goods_images = _ref$data.goods_images;

        var images = JSON.parse(goods_images);
        document.title = goods_name;
        $('.small-box img').attr({ src: goods_image });
        $('.big-box img').attr({ src: goods_image });
        $('.price').html('\uFFE5' + goods_price);
        $('.goods-name').html(goods_name);
        $('.goods-desc').html(goods_desc);
        var list = '';
        images.forEach(function (images) {
            list += ' <li><img src=' + images + ' alt=""></li>';
        });
        $('.img-list').html(list);
    }
});

//  点击立即购买
$(document).on('click', '#buy-now', function () {
    if (getCookie('userLogin')) {
        var username = getCookie('userLogin');
        var goods_id = id,
            goods_name = $('.goods-name').html(),
            goods_price = $('.price').html().split('￥')[1],
            goods_desc = $('.goods-desc').html(),
            goods_img = $('.small-box img').attr('src'),
            goods_count = $('.count').val();
        $.ajax({
            type: 'get',
            url: 'http://' + (location.host.indexOf(':5500') > -1 ? 'localhost' : location.host) + '/project/detail-add.php',
            data: {
                username: username,
                goods_id: goods_id,
                goods_name: goods_name,
                goods_price: goods_price,
                goods_desc: goods_desc,
                goods_img: goods_img,
                goods_count: goods_count
            },
            dataType: 'json',
            success: function success(data) {
                localStorage.setItem('id', id);
                location.href = './goods-pay.html';
            }
        });
    } else {
        $('.login').trigger('click');
        layui.use('layer', function () {
            var layer = layui.layer;
            layer.msg('请先登录');
        });
    }
});

//  加入购物车
$(document).on('click', '#join-cart', function () {
    if (getCookie('userLogin')) {
        var username = getCookie('userLogin');
        var goods_id = id,
            goods_name = $('.goods-name').html(),
            goods_price = $('.price').html().split('￥')[1],
            goods_desc = $('.goods-desc').html(),
            goods_img = $('.small-box img').attr('src'),
            goods_count = $('.count').val();
        $.ajax({
            type: 'get',
            url: 'http://' + (location.host.indexOf(':5500') > -1 ? 'localhost' : location.host) + '/project/detail-add.php',
            data: {
                username: username,
                goods_id: goods_id,
                goods_name: goods_name,
                goods_price: goods_price,
                goods_desc: goods_desc,
                goods_img: goods_img,
                goods_count: goods_count
            },
            dataType: 'json',
            success: function success(data) {
                console.log(data);
                layui.use('layer', function () {
                    var layer = layui.layer;
                    if (data.data) {
                        layer.msg(data.msg);
                    } else {
                        layer.msg(data.msg);
                    }
                });
            }
        });
    } else {
        $('.login').trigger('click');
        layui.use('layer', function () {
            var layer = layui.layer;
            layer.msg('请先登录');
        });
    }
});