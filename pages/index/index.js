//index.js
//获取应用实例
const app = getApp()
const url = 'http://192.168.1.188:8063/'
Page({
  data: {
    ischecked: true,
    banner: [],
    p2p_biz: [],
    risk_list: [],
    voucher_valid_times: '0'
  },
  //事件处理函数
  bindViewTap: function() {
    wx.navigateTo({
      url: '../logs/logs'
    })
  },
  onLoad: function() {
    wx.request({
      url: url + '/wpn/entry/',
      success: res => {
        console.log(res.data)
        const {
          banner,
          p2p_biz,
          risk_list
        } = res.data.data
        this.setData({
          banner,
          p2p_biz,
          risk_list
        })
      }
    })
  },
  lookDetail() {
    wx.navigateTo({
      url: '/pages/details/eport-details'
    })
  },
  opf_for() {
    let ischecked = !this.data.ischecked
    this.setData({
      ischecked
    })
  }
})