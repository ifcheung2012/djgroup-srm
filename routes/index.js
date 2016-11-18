var express = require('express');
var router = express.Router();
var data = require('../public/data/news.json');
/* GET home page. */
var list_news = data.list_news;
var list_xj = data.list_xj;
var list_zb = data.list_zb;

router.get('/', function(req, res) {
  res.render('index', { title: '大吉铁塔制造有限公司供应商门户-首页',list:list_news});
});
router.get('/list_xj', function(req, res) {
  res.render('list_xj', { title: '大吉铁塔制造有限公司供应商门户-询价列表',list:list_xj,count:list_xj.length });
});
router.get('/list_zb', function(req, res) {
  res.render('list_zb', { title: '大吉铁塔制造有限公司供应商门户-招标列表',list:list_zb,count:list_zb.length });
});
module.exports = router;
