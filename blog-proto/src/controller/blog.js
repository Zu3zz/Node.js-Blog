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

module.exports = {
  getList
}