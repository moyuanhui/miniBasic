import Promise from "../plugin/promise.js"

let wxPromisify = (fn) => {
    return function (obj = {}) {
        return new Promise((resolve, reject) => {
            obj.success = function (res) {
                resolve(res)
            }
            obj.fail = function (res) {
                reject(res)
            }
            fn(obj)
        })
    }
}
//无论promise对象最后状态如何都会执行
Promise.prototype.finally = (callback) => {
    let P = this.constructor;
    return this.then(
        value => P.resolve(callback()).then(() => value),
        reason => P.resolve(callback()).then(() => { throw reason })
    );
};
/**
 * 微信用户登录,获取code
 */
let wxLogin = () => {
    return wxPromisify(wx.login)
}
/**
 * 获取微信用户信息
 * 注意:须在登录之后调用
 */
let wxGetUserInfo = () => {
    return wxPromisify(wx.getUserInfo)
}
/**
 * 获取系统信息
 */
let wxGetSystemInfo = () => {
    return wxPromisify(wx.getSystemInfo)
}

/**
 * 保留当前页面，跳转到应用内的某个页面
 * url:'../index/index'
 * params:{key:value1}
 */
let wxNavigateTo = (url, params) => {
    var wxNavigateTo = wxPromisify(wx.navigateTo)
    const serializedParams = this.paramSerializer(params)
    if (serializedParams.length > 0) {
        url += ((url.indexOf('?') == -1) ? '?' : '&') + serializedParams
    }
    return wxNavigateTo({
        url: url
    })
}
module.exports = {
    wxPromisify,
    wxLogin,
    wxGetUserInfo,
    wxGetSystemInfo,
    wxNavigateTo
}
