const {
  exec
} = require('../db/mysql')

const getList = (author, keyword) => {
  let sql = `select * from blogs where 1=1 `
  if (author) {
    sql += `and author = '${author}' `
  }
  if (keyword) {
    sql += `and title like '%${keyword}%' `
  }
  sql += `order by createtime desc;`

  // 返回promise
  return exec(sql)
}

const getDetail = (id) => {
  const sql = `select * from blogs where id='${id}' `
  return exec(sql).then(rows => {
    return rows[0]
  })
}

const newBlog = (blogData = {}) => {
  // blogData是一个博客对象 包含 title content author 属性
  const title = blogData.title
  const content = blogData.content
  const author = blogData.author
  const createtime = Date.now()

  const sql = `
    insert into blogs (title, content, createtime, author)
    values ('${title}', '${content}', ${createtime}, '${author}');
  `
  return exec(sql).then(insertData => {
    // console.log(insertData)
    return {
      id: insertData.insertId
    }
  })
}

const updataBlog = (id, blogData = {}) => {
  // id 就是要更新的博客的 id
  // blogData是一个博客对象 包含 title content 属性
  const title = blogData.title
  const content = blogData.content

  const sql = `
    update blogs set title='${title}', content='${content}' where id=${id}
  `
  return exec(sql).then(updateDate => {
    // console.log(updateDate)
    if (updateDate.affectedRows > 0) {
      return true
    }
    return false
  })
}

const delBlog = (id, author) => {
  // id就是要删除博客的id
  const sql = `delete from blogs where id='${id}' and author='${author}'`
  return exec(sql).then(deleteData => {
    // console.log(updateDate)
    if (deleteData.affectedRows > 0) {
      return true
    }
    return false
  })
}
module.exports = {
  getList,
  getDetail,
  newBlog,
  updataBlog,
  delBlog
}