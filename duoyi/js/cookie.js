'use strict';

// 设置
// 删除
// 获取cookie列表
// 获取指定的cookie


function setCookie(name, content, iDay) {
  // 写入cookie

  var date = new Date();

  var day = date.getDate();
  var hours = date.getHours();

  date.setDate(day + iDay);
  date.setHours(hours - 8);

  document.cookie = name + '=' + encodeURIComponent(content) + ';path=/;expires=' + date;
}

// setCookie('test', '我是cookie', 7);
// setCookie('asdas', '我是cookie', 7);

function removeCookie(name) {
  // 删除cookie
  setCookie(name, '', -1);
}

// document.onclick = function () {
//   removeCookie('test');
// }


function getCookieList() {
  // cookie列表
  var list = [];

  var cookie = document.cookie;
  if (!cookie) {
    return list;
  }

  list = cookie.split('; ');

  list = list.map(function (value) {
    return {
      name: value.split('=')[0],
      content: decodeURIComponent(value.split('=')[1])
    };
  });

  return list;
}

// console.log(getCookieList());

function getCookie(name) {
  var list = getCookieList();

  var res = list.filter(function (value) {
    return value.name === name;
  })[0];

  if (res) {
    return decodeURIComponent(res.content);
  } else {
    return '';
  }
}