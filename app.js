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
        let url = getSessionKey;
        let data = {
            companyId: this.globalData.authContext.companyId,
            accountId: this.globalData.authContext.accountId,
            code:res.code
        }
        return httpRequest.postRequest(url,data);    
    },error=>{
        console.log(error)
    }).then(res=>{
        console.log('成功了',res.data);
        wx.setStorageSync("sessionid", res.header["Set-Cookie"]);  //登录后存储session信息
        var wxSetting = wxUtil.wxSetting();
        return wxSetting()
    },error=>{
        console.log(error);
    }).then(res=>{
    })
    
  },
  globalData: {
    userInfo: null,
    //小程序上下文信息
    authContext:{
        companyId:'sa',
        accountId:'sa'
    }
  }
})