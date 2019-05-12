const handleBlogRouter = (req, res) => {
  const method = req.method // GET POST
  const url = req.url
  const path = url.split('?')[0]
  // 获取博客列表
  if (method === 'GET' && path === '/api/blog/list') {
    return {
      msg: "这是获取博客列表的接口"
    }
  }
  // 获取博客详情
  if (method === 'GET' && path === '/api/blog/detail') {
    return {
      msg: "这是获取博客详情的接口"
    }
  }
  // 新建一篇博客
  if (method === 'POST' && path === '/api/blog/update') {
    return {
      msg: "这是更新博客的接口"
    }
  }
  // 删除一篇博客
  if (method === 'POST' && path === '/api/blog/del') {
    return {
      msg: '这是删除博客的接口'
    }
  }
}
module.exports = handleBlogRouter