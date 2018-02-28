//index.js
//获取应用实例
const app = getApp()
//import { wxNavigateTo } from '../utils/wxUtil.js'

Page({
  data: {
      motto: '小程序基础框架',
    userInfo: {},
    hasUserInfo: false,
    canIUse: wx.canIUse('button.open-type.getUserInfo')
  },
  //事件处理函数
  bindViewTap:function() {
    wx.navigateTo({
      url: './pages/logs/logs'
    })
    //wxNavigateTo('./pages/logs/logs');
  },
  onLoad: function () {
    if (app.globalData.userInfo) {
      this.setData({
        userInfo: app.globalData.userInfo,
        hasUserInfo: true
      })
    } else if (this.data.canIUse){
      // 由于 getUserInfo 是网络请求，可能会在 Page.onLoad 之后才返回
      // 所以此处加入 callback 以防止这种情况
      app.userInfoReadyCallback = res => {
        this.setData({
          userInfo: res.userInfo,
          hasUserInfo: true
        })
      }
    } else {
      // 在没有 open-type=getUserInfo 版本的兼容处理
      wx.getUserInfo({
        success: res => {
          app.globalData.userInfo = res.userInfo
          this.setData({
            userInfo: res.userInfo,
            hasUserInfo: true
          })
        }
      })
    }
  },
  getUserInfo: function(e) {
    console.log(e)
    app.globalData.userInfo = e.detail.userInfo
    this.setData({
      userInfo: e.detail.userInfo,
      hasUserInfo: true
    })
  },
  login:function(e){
    wx.login({
      success:function(res){
        console.log(res);
      },
      fail:function(err){
        console.log(err);
      }
    })
  },
  getuserinfo:function(){
    wx.authorize({
      scope: 'scope.userInfo',
      success:function() {
        // 用户已经同意小程序使用录音功能，后续调用 wx.startRecord 接口不会弹窗询问
        wx.startRecord()
        wx.getUserInfo({
          success: function (res) {
            console.log(res);
          },
          fail: function (error) {
            console.log(error)
          }
        })
      },fail:function(error){
        console.log('12',error)
      }
    })

  }
})
