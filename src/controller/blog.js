const getList = (author,keyword) =>{
    //先返回假数据
    return [
        {
            id:1,
            title:'标题A',
            content:'内容A',
            createTime:1596258210333,
            author:'zhangsan'
        },
        {
            id:2,
            title:'标题B',
            content:'内容B',
            createTime:1596259210333,
            author:'lisi'
        }
    ]
}


const getDetail = (id)=>{
    return  {
        id:1,
        title:'标题A',
        content:'内容A',
        createTime:1596258210333,
        author:'zhangsan'
    }
}

const newBlog = (blogData = {}) =>{
     //blogData是一个博客对象，包含title content 属性
    console.log('newBlog ..',blogData)
    return {
        id:3 //表示新建博客，插入到数据表里面的id
    }
}

const updateBlog = (id,blogData = {}) =>{
    //id 就是需要更新博客的id
    //blogData是一个博客对象，包含title content 属性
    console.log('update blog',id,blogData)
    return true
}

const delBlog = (id)=>{
    //id就是要删除博客的 id
    return true
}
module.exports = {
    getList,
    getDetail,
    newBlog,
    updateBlog,
    delBlog
}
