// pages/details/eport-details.js
const url = 'http://192.168.1.188:8063/'
Page({

  /**
   * 页面的初始数据
   */
  data: {
    base_info: {},
    user_info: {},
    risk_court: {},
    risk_netloan: {},
    plat_netloan: [],
    netloat_relate: {},
    risk_debt: {},
    risk_overdue: {},
    risk_cheat: {},
    expire_tips: '',
    warm_tips1: '',
    warm_tips2: ''
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {
    wx.request({
      url: url + '/wpn/examplereport/',
      success: res => {
        console.log(res.data.data)
        const {
          base_info,
          user_info,
          risk_court,
          risk_netloan,
          plat_netloan,
          netloat_relate,
          risk_debt,
          risk_overdue,
          risk_cheat,
          expire_tips,
          warm_tips1,
          warm_tips2
        } = res.data.data
        this.setData({
          base_info,
          user_info,
          risk_court,
          risk_netloan,
          plat_netloan,
          netloat_relate,
          risk_debt,
          risk_overdue,
          risk_cheat,
          expire_tips,
          warm_tips1,
          warm_tips2
        })

      }
    })
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function() {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function() {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function() {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function() {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function() {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function() {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function() {

  }
})