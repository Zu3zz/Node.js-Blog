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
  return {
    id: 3 //表示新建博客， 插入到数据表中的id值
  }
}

const updataBlog = (id, blogData = {}) => {
  // id 就是要更新的博客的 id
  // blogData是一个博客对象 包含 title content 属性
  return true
}

const deleteBlog = (id) => {
  // id就是要删除博客的id
  return true
}
module.exports = {
  getList,
  getDetail,
  newBlog,
  updataBlog,
  deleteBlog
}