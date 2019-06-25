var express = require('express');
var router = express.Router();
const {getList} = require('../controller/blog.js')
const {
  SuccessModel,
  ErrorModel
} = require('../model/resModel')

router.get('/list', function (req, res, next) {
  const author = req.query.author || ''
  const keyword = req.query.keyword || ''
  // const listData = getList(author, keyword)
  // return new SuccessModel(listData)
  // if (req.query.isadmin) {
  //   // 管理员界面
  //   const loginCheckResult = loginCheck(req)
  //   if (loginCheckResult) {
  //     // 未登录
  //     return loginCheckResult
  //   }
  //   // 强制只允许查询自己的博客
  //   author = req.session.username
  // }
  const result = getList(author, keyword)
  return result.then(listData => {
    res.json(
      new SuccessModel(listData)
      )
  })
});

router.get('/detail', function (req, res, next) {
  res.json({
    errno: 0,
    data: 'OK'
  });
});

module.exports = router;