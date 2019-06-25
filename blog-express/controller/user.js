const { exec, escape } = require('../db/mysql')
const { genPassword } = require('../utils/crpy')

const login = (username, password) => {
  username = escape(username)
  //生成加密密码
  password = genPassword(password)
  password = escape(password)
  // 先使用假数据
  const sql =  `select username, realname from users where username=${username} and password=${password} `
  return exec(sql).then(rows => {
    return rows[0] || {}
  })
}

module.exports = {
  login
}