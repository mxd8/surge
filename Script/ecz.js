var body = $response.body;
var url = $request.url;

console.log(url);
// console.log(body);

try {
  // 尝试将响应体解析为 JSON 对象
  var obj = JSON.parse(body);
  const p1 = "v5_0/home/tab-data?area_code";//首页
  if (url.indexOf(p1) != -1) {
    console.log("URL 包含 P1 内容");
    obj.data.head[4] = "";//首页     205
    obj.data.head[3] = "";//首页定位 207
    obj.data.head[2] = "";//观影福利 204
    obj.data.head[0] = "";//观影福利 1
    // obj.data.head[0].data.type = "[]";//观影福利 1
    obj.data.feed[4] = "";//六福珠宝 
    obj.data.feed[0] = "";//首页 


    // 这里可以添加你的逻辑，当 URL 中包含 P1 内容时执行
  } else {
    console.log("URL 不包含 P1 内容");
    // 这里可以添加你的逻辑，当 URL 中不包含 P1 内容时执行
  }
  // 对 JSON 对象进行操作，比如修改某些字段的值
  // 这里假设你想要将某个字段的值修改为 "modified"
  // obj.someField = "modified";
  // 将修改后的 JSON 对象转换回字符串形式
  body = JSON.stringify(obj);
} catch (error) {
  console.log("解析响应体为 JSON 对象时出错：", error.message);
}

// 如果没有出现异常，则继续执行并返回修改后的响应体
$done({ body });


// GET https://qianfanapi.0550.com/v5_0/home/tab-data?area_code=&channel_id=0&city=&cursor=0&page=1&tab_id=1 HTTP/2


// var x = 0;
// var i = 0;

// const p1 = "/init/start_ad";
// const p2 = "area_code=&channel_id=0&city=&cursor=0&page=1&tab_id=1";
// const p3 = "v5_0/home/tab-data?area_code";
// const p4 =
//   "/v5_0/wap/view-thread-advance?tid=1386709&isSeeMaster=0&replyOrder=0&viewpid=0&supportOrder=2&isAdmin=0";

// var obj = JSON.parse(body);

// // var datar1 =  datar.data.data
// // datar1.innerHTML

// //            var a1 =document.getElementsByClassName("ad-detail")
// //            a1[0].innerHTML=""
// //            console.log(a1)

// if (url.indexOf(p4) != -1) {
//   console.log("APP-E滁州-清除首页广告");
//   //console.log(body)
// }

// if (url.indexOf(p2) != -1) {
//   //var body = $response.body;
//   //var obj = JSON.parse(body);
//   obj.data.head[0].data = ""; //清除首页顶部广告
//   obj.data.head[2].data.items = ""; //清除首页轮播广告
//   obj.data.head[3] = ""; //清除首页天气定位
//   obj.data.head[4].data.items = ""; //清除每日打卡
//   obj.data.feed[6].data = ""; //清除广告
//   //body = JSON.stringify(obj);
//   console.log("APP-E滁州-清除首页广告");
//   //console.log(body)
// }

// // var keleyijson=obj.data.feed;
// // var s=JSON.stringify(keleyijson);
// // //document.write("json对象的元素个数是："+JSONLength(keleyijson))
// var myObj,
//   i,
//   x = "";
// for (i in obj.data.feed) {
//   var neirong = obj.data.feed[i].data["desc_tag_text"];
//   //document.write(obj.data.feed[i].data['desc_tag_text']  + "<br>");//屏幕打印

//   if (neirong == "广告") {
//     obj.data.feed[i] = "";
//   }
// }

// body = JSON.stringify(obj);
// console.log("APP-E滁州-净化");
// //console.log(body)
// $done(body);
