const getList = (author, keyword) => {
  // 先返回假数据
  return [
    {
      id: 1,
      title: '标题A',
      content: '内容A',
      createtime: 1557752316582,
      author: '3z'
    },
    {
      id: 2,
      title: '标题B',
      content: '内容B',
      createtime: 1557752523278,
      author: '4y'
    }
  ]
}

const getDetail = (id) => {
  // 先返回假数据
  return {
    id: 1,
    title: '标题A',
    content: '内容A',
    createtime: 1557752316582,
    author: '3z'
  }
}

const newBlog = (blogData = {}) => {
  // blogData是一个博客对象 包含 title content 属性
  console.log('new blogData', blogData)
  return {
    id: 3 //表示新建博客， 插入到数据表中的id值
  }
}
module.exports = {
  getList,
  getDetail,
  newBlog
}