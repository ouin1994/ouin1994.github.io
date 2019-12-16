'use strict';

$('.header').load('./layout/header.html');
$('#footer').load('./layout/footer.html');

var key = '';
var timeout = void 0;

$(document).on('input', '#search-txt', function () {
    key = this.value;
    clearTimeout(timeout);
    timeout = setTimeout(function () {
        clearTimeout(timeout);
        renderList('', 'normal', key);
    }, 600);
});

renderList('', 'normal', key);
var count = 0;
$(document).on('click', '.sort', function () {
    count++;
    if (count % 3 == 1) {
        $('.sort span').html('👆');
        renderList('goods_price', 'asc', key);
    }
    if (count % 3 == 2) {
        $('.sort span').html('👇');
        renderList('goods_price', 'desc', key);
    }
    if (count % 3 == 0) {
        $('.sort span').html('默认');
        renderList('', 'normal', key);
    }
});

function renderList(order, orderType, key) {
    $.ajax({
        type: 'get',
        url: 'http://' + (location.host.indexOf(':5500') > -1 ? 'localhost' : location.host) + '/project/goods-list.php',
        data: {
            order: order,
            orderType: orderType,
            key: key
        },
        dataType: 'json',
        success: function success(data) {
            data = data.data;
            layui.use(['laypage', 'layer'], function () {
                var laypage = layui.laypage,
                    layer = layui.layer;
                //总页数大于页码总数
                laypage.render({
                    elem: 'demo1',
                    count: data.length //数据总数
                    , limit: 12,
                    theme: '#FF5722',
                    jump: function jump(obj) {
                        var thisData = data.concat().splice(obj.curr * obj.limit - obj.limit, obj.limit);
                        var list = '';
                        thisData.forEach(function (_ref) {
                            var id = _ref.id,
                                goods_image = _ref.goods_image,
                                goods_name = _ref.goods_name,
                                goods_price = _ref.goods_price;

                            list += '\n                            <div class="layui-col-md3 layui-col-sm3 layui-col-xs4 box">\n                                <div>\n                                    <a href="./html/goods-detail.html?id=' + id + '">\n                                        <img src="' + goods_image + '"\n                                                alt="">\n                                        <div class="mess">\n                                            <p class="desc sl">' + goods_name + '</p>\n                                            <p class="price">\uFFE5<span>' + goods_price + '</span></p>\n                                        </div>\n                                        </a>\n                                    </div>\n                                </div>';
                        });
                        $('.bigBox').html(list);
                    }
                });
            });
        }
    });
}