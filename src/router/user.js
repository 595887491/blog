const { loginCheck } = require('../controller/user')
const { SuccessModel , ErrorModel }  = require('../model/resModel');

const handleUserRouter = (req,res) => {
    const method = req.method
    // const url = req.url
    // const path = url.split('?')[0]

    //登录
    if(method === 'POST' && req.path === '/api/user/login') {
        const {username,password} = req.body
        const result = loginCheck(username,password)

        if(result) {
            return new SuccessModel()
        }
        return new ErrorModel('账号或密码错误')
    }
}
module.exports = handleUserRouter;
