// 封装函数经常用对象·方法来进行封装
let kits = {};
// 封装日期函数
kits.formatDate = function() {
  let date = new Date();
  // 把年月日时分秒获取
  let year = date.getFullYear();
  let month = date.getMonth() + 1;
  month = this.dispatchZero(month);
  let day = date.getDate();
  day = this.dispatchZero(day);
  let hour = date.getHours();
  hour = this.dispatchZero(hour);
  let minute = this.dispatchZero(date.getMinutes());
  let second = this.dispatchZero(date.getSeconds());
  return (
    year + "-" + month + "-" + day + " " + hour + ":" + minute + ":" + second
  );
};
// 封装如果日期不够进行补0
kits.dispatchZero = function(num) {
  if (num < 10) {
    num = "0" + num;
  }
  return num;
};
// 封装了一个从0到n的随机整数
kits.randomZero = function(n) {
  return Math.floor(Math.random() * (n + 1));
};
// 封装一个从n到m的随机整数
kits.randomInt = function(n, m) {
  return Math.floor(Math.random() * (m - n + 1) * n);
};
// 封装了一个随机生成的id
kits.getId = function() {
  // 构造函数创建一个新的今天的日期
  let date = new Date();
  // getTime得到的是从1970年1月1日到今天为止的毫秒总数
  let time = date.getTime();
  // 回调之前的函数randomInt或取一个比较不容易重复的随机整数
  let r = this.randomInt(100000, 999999);
  // 将两个数字连接，获取新的id
  let id = time + "" + r;
  return id;
};
// 封装了一个随机生成十六进制颜色的函数
kits.randomHaxColor = function() {
  // 定义一个可以存放构成十六进制颜色值的值
  let colorValue = "0,1,2,3,4,5,6,7,8,9,a,b,c,d,e,f";
  // 将字符串分割为字符数组
  let colorArray = colorValue.split(",");
  // 定义一个字符串变量用来存储字符串变量，先将#存放进去
  let color = "#";
  // 生成一个字符长度为16的随机数组
  colorArray[Math.floor(Math.random() * 16)];
  // 遍历该数组用来存储新的十六进制的颜色
  for (let i = 0; i < 6; i++) {
    color = color + colorArray[Math.floor(Math.random() * 16)];
  }
  // console.log(colorArray);
  // console.log(color);
  return color;
};
// 封装了一个随机生成rgb颜色的函数
kits.randomRgbColor = function() {
  // 由于之前的随机整数已经封装，所以直接调用即可，用来生成从0到255的随机整数
  let rgbColor = this.randomZero(255);
  let rgbColor1 = this.randomZero(255);
  let rgbColor2 = this.randomZero(255);
  // 再将随机数字用字符串拼接，得到一个rgb的随机颜色
  let rgb = "(" + rgbColor + "," + rgbColor1 + "," + rgbColor2 + ")";
  return rgb;
};
// 封装了一个驼峰命名法则
// 输入的实参必须是字符串，并且用逗号隔开
kits.randomString = function(string) {
  // 将切割好的字符串存到新的数组里面
  let arr = string.split(",");
  // console.log(arr);
  // 取出数组每个元素的第一个字母
  // console.log(arr[i].charAt(0));
  // 取出数组每个元素的第一个字母，将第一个字母转换为大写
  // console.log(arr[i].charAt(0).toUpperCase(1));
  // 获取每个大写字母后面的元素
  // console.log(arr[i].substring(1));
  for (let i = 1; i < arr.length; i++) {
    arr[i] = arr[i].charAt(0).toUpperCase(1) + arr[i].substring(1);
  }
  // 将数组用字符串连接起来
  return arr.join("");
};
// 封装了一个可以循环倒计时的函数
kits.randomInterval = function(element) {
  // 定义一个时间的变量
  let time = 60;
  // 禁用按钮
  element.disabled = true;
  // 为了保证点下的一瞬间就计时，先在点的瞬间修改文字一次
  element.value = "获取验证码(" + time + ")";
  // 每隔一段时间，修改文字，即用循环定时
  let intervalId = setInterval(function() {
    // 修改时间
    time--;
    // 修改文字
    btn.value = "获取验证码(" + time + ")";
    // 如果计时到0了，需要停止
    if (time === 0) {
      // 停止倒计时
      clearInterval(intervalId);
      // 让按钮恢复原状
      element.disabled = false;
      element.value = "获取验证码";
    }
  }, 1000);
};
// 本地存储中读取数据
/**
 * 
 * @description 
 * @param {string}
 * @returns {object}
*/
// 从本地存储中读取数据
kits.getArrayLocalStorage = function(key) {
  // 通过键来读取本地存储中的数据
  let json = localStorage.getItem(key);
  // 将其转换为json格式的对象
  let arr = JSON.parse(json);
  // 如果本地存储中没有数据就返回一个空数组，如果有数据就返回它自身
  return arr || [];
};
/**
 * @description 
 * @param {string}    是字符串
 * @param {object}    是一个对象
 * 
*/
// 把数据存储到本地存储里面
kits.getsetLocalStorage = function(key,obj){
  // 将对象转换为json格式的字符串
  let json = JSON.stringify(obj);
  // 将json格式的字符串存储到本地存储中
  localStorage.setItem(key,json);
};
// 向本地存储中追加一个数据对象
kits.appendDataIntoArray = function(key,data) {
  // 通过本地存储的键来读取本地存储的数据
  let arr = kits.getArrayLocalStorage(key);
  // 将新的内容添加到本地存储中
  kits.getsetLocalStorage(key,data);
}
// 通过id删除本地存储的数据
kits.deleteLocalDataById = function(key,id) {
  // 通过键来读取本地存储的数据，返回一个伪数组
  let arr = kits.getArrayLocalStorage(key);
  // 遍历伪数组
  arr.forEach((e,i) =>{
    // 判断当输入的id和本地存储中的id相等时删除数据
    if(e.id == id){
      // 通过数组对象中的方法实现删除
      arr.splice(i,1);
    }
  })
  // 覆盖到本地存储中
  kits.getsetLocalStorage(key,arr);
}
// 修改本地存储中的数据
kits.modifyLocalDataById =function(key,id,data) {
  // 通过本地存储已有的键来读取数据
  let arr = kits.getArrayLocalStorage(key);
  // 遍历获得的伪数组
 arr.forEach((e,i) => {
  //  判断输入的id是否和本地存储中的id相等，如果相等就修改本地存储中的数据
   if(e.id == id) {
    //  修改本地存储的数据
     arr[i] = data;
   }
 })
//  覆盖回本地存储
  kits.getsetLocalStorage(key,arr);
}