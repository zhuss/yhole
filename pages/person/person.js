// person.js
var app = getApp();
Page({

  /**
   * 页面的初始数据
   */
  data: {
    userInfo:{}
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    if (app.globalData.userInfo){
      console.log(app.globalData.userInfo);
       this.setData({
         userInfo:app.globalData.userInfo
       });
    }else{
      app.getUserInfo((userInfo)=> {
        this.setData({
          userInfo: userInfo
        });
      });
    }
  },
  aboutCellClick(){
    wx.navigateTo({
      url: './../../pages/about/about'
    })
  }
})