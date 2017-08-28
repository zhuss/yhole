// edit.js
var app = getApp();
Page({

  /**
   * 页面的初始数据
   */
  data: {
    text:''
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    app.getUserInfo();
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
  
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
  
  },
  bindKeyInput(e){
    this.setData({
      text: e.detail.value
    });
  },
  editBtnClick(){
    let nikeName = app.globalData.userInfo.nickName;
    let data = {
      name: nikeName,
      content:this.data.text
    };
    let objects = { tableID: 1108,data};

    wx.showLoading({
      title: '提交中',
    });

    wx.BaaS.createRecord(objects)
    .then((res)=>{
      this.setData({
        text:''
      });
      wx.hideLoading();
    },(err)=>{
      console.log(err);
    });
  }

})