//app.js
App({
  onLaunch: function() {
    require('./utils/sdk-v1.0.10.js')
    let clientId = 'cb08919107cdabb8548a'
    wx.BaaS.init(clientId)
  },

  getUserInfo: function(cb) {
    var that = this
    if (this.globalData.userInfo) {
      typeof cb == "function" && cb(this.globalData.userInfo)
    } else {
      //调用登录接口
      wx.getUserInfo({
        withCredentials: false,
        success: function(res) {
          that.globalData.userInfo = res.userInfo
          typeof cb == "function" && cb(that.globalData.userInfo)
        }
      })
    }
  },
  
  globalData: {
    userInfo: null
  }
})
