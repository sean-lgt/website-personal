/*
 * @Author: your name
 * @Date: 2020-01-27 22:31:54
 * @LastEditTime : 2020-01-27 22:32:47
 * @LastEditors  : Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \Resume website personal\js\index.js
 */




//轮播图部分
// 动态获取所有的li的宽度同时赋值给ul

var lis = document.querySelectorAll('#wrapper li')
// js原生的属性offsetWidth获取元素的宽度
var ulWidth = 0;
// 循环遍历li的宽度并叠加的操作
for (var i = 0; i < lis.length; i++) {
    console.log(lis[i].offsetWidth)
    ulWidth += lis[i].offsetWidth
}
console.log(ulWidth)
$('#wrapper ul').css({
    width: ulWidth
})
console.log(lis[1].offsetWidth)
var myScroll = new IScroll('#wrapper', {
    scrollX: true
});