import Promise from "../plugin/promise"

let wxPromisify = fn => {
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
Promise.prototype.finally = callback => {
    let P = this.constructor;
    return this.then(
        value => P.resolve(callback()).then(() => value),
        reason => P.resolve(callback()).then(() => { throw reason })
    );
}

/**
 * 微信请求get方法
 * url
 * data 以对象的格式传入
 */
let getRequest = (url, data) => {
    var getRequest = wxPromisify(wx.request)
    return getRequest({
        url: url,
        method: 'GET',
        data: data,
        header: {
            'Cookie':  wx.getStorageSync("sessionid")
        }
    })
}

/**
 * 微信请求post方法封装
 * url
 * data 以对象的格式传入
 */
let postRequest = (url, data) => {
    var postRequest = wxPromisify(wx.request)
    return postRequest({
        url: url,
        method: 'POST',
        data: data,
        header: {
            'Cookie': wx.getStorageSync("sessionid")
        }
    })
}

module.exports = {
    postRequest: postRequest,
    getRequest: getRequest
}
