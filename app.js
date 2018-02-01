import wxUtil from 'utils/wxUtil.js'
import httpRequest from 'utils/httpUtil.js'
import { getSessionKey } from 'utils/apiUtil.js'

//app.js
App({
  onLaunch: function () {
    // 展示本地存储能力
    var logs = wx.getStorageSync('logs') || []
    logs.unshift(Date.now())
    wx.setStorageSync('logs', logs)

    // 登录
    
    var wxLogin = wxUtil.wxLogin()
    wxLogin().then(res => {
        console.log(res.code);
        let url = getSessionKey+'/'+res.code;
        return httpRequest.getRequest(url);    
    }).then(res=>{
        console.log('成功了',res.data);
        var wxSetting = wxUtil.wxSetting();
        return wxSetting()
    }).then(res=>{
        // if (res.authSetting['scope.userInfo']) {          
        //     wxUtil.wxGetUserInfo(true).then(res=>{
        //          this.globalData.userInfo = res.userInfo
        //      })
        // }else{
        //     wx.wxAuthorize('scope.userInfo').then(res=>{
        //         wxUtil.wxGetUserInfo(true).then(res => {
        //             this.globalData.userInfo = res.userInfo
        //         })
        //     })
        // }
    })
    
  },
  globalData: {
    userInfo: null
  }
})