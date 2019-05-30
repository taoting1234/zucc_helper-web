ajax = function (url, method, data) {
  // Default options are marked with *
  return fetch(url, {
    body: JSON.stringify(data), // must match 'Content-Type' header
    cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
    credentials: 'include', // include, same-origin, *omit
    headers: {
      'content-type': 'application/json; charset=utf-8'
    },
    method: method, // *GET, POST, PUT, DELETE, etc.
    mode: 'cors', // no-cors, cors, *same-origin
    redirect: 'follow', // manual, *follow, error
    referrer: 'client', // *client, no-referrer
  })
    .then(response => response.json()) // parses response to JSON
};
//获取参数
let $_GET = (function () {
  let url = window.document.location.href.toString();
  let u = url.split("?");
  if (typeof (u[1]) === "string") {
    u = u[1].split("&");
    let get = {};
    for (let i in u) {
      let j = u[i].split("=");
      get[j[0]] = j[1];
    }
    return get;
  } else {
    return {};
  }
})();
//百度统计
// var _hmt = _hmt || [];
// (function () {
//   var hm = document.createElement("script");
//   hm.src = "https://hm.baidu.com/hm.js?dc176619693087fee7b4215201acf0f8";
//   var s = document.getElementsByTagName("script")[0];
//   s.parentNode.insertBefore(hm, s);
// })();
