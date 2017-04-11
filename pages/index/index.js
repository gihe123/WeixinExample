//index.js
//获取应用实例
var param = {
  data:{
    mytext:"My first Program"
  }
}
//创建一个页面，注册一个页面，param里面带有一个参数
//这个参数就会传到index.wxml文件中，把param.data.mytext替换成index.wxml里面的mytext
Page(param);
