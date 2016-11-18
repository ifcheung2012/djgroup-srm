// var data = require("../data/news.json");
// console.log(data.news_list[2].xjmc);
$(document).ready(function() {
  // console.log($("#tab-nav li"))
  var lineimg = $('.lineimg');

  $('#tab-nav li').bind('click', function() {

    var index = $(this).index();
    // console.log($(this).index());
    var divs = $('#tabs-body > div');
    $(this).parent().children('li').attr('class', 'tab-nav-title-unchecked'); //将所有选项置为未 选中
    $(this).attr('class', 'tab-nav-title'); //设置当前选中项为选中样式
    if(index===0){
      lineimg.attr('src','../images/headline.png');
    } else {
      lineimg.attr('src','../images/headline2.png');
    }
    divs.hide(); //隐藏所有选中项内容
    divs.eq(index).show(); //显示选中项对应内容
  });

});
