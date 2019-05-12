const handleUserRouter = (req, res) => {
  const method = req.method
  const url = req.url
  const path  = url.split('?')[1]

  // 登录
  if (method === 'POST' && url === '/api/user/login') {
    return {
      msg: '这是登录的接口'
    }
  }
}

module.exports = handleUserRouter