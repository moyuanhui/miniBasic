import { showBusy, showSuccess } from "../../../utils/util.js"
import wxRequest from "../../../utils/httpUtil.js"
import config from "../../../utils/apiUtil.js"

//获取应用实例
const app = getApp();
Page({

  /**
   * 页面的初始数据
   */
  data: {
    
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    showBusy("成功了")
    // var url = config.loginUrl;   //接口地址
    // var params = {               //参数
    //     appid: "wxed78****2d465",
    //     secret: "e9c5e4c*****9ecc5ebd811",
    //     js_code: res.code,
    //     grant_type: "authorization_code"
    // }
    // wxRequest.getRequest(url, params).then(res).then(res => {

    // })
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
    //showBusy("繁忙")
  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {
    
  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {
    
  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {
    
  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {
    
  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {
    
  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {
    
  }
})