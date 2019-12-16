'use strict';

/**
 * 轮播图效果
 */
layui.use('carousel', function () {
    var carousel = layui.carousel;
    //建造实例
    carousel.render({
        elem: '#test1',
        width: '100%' //设置容器宽度
        , arrow: 'hover' //始终显示箭头
        //,anim: 'updown' //切换动画方式
        , height: '440px'
    });
});

/**
 * 返回顶部
 */
window.onscroll = function () {
    var scroll = $(document).scrollTop();
    if (scroll > 0) {
        $('.backTop').css({
            'opacity': '1',
            'transition': '2s'
        });
    } else {
        $('.backTop').css({
            'opacity': '0',
            'transition': '2s'
        });
    }
};