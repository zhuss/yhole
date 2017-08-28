//index.js
//获取应用实例
var app = getApp()
var util = require('./../../utils/util.js')
Page({
  data: {
    list:[],
    page:0, //当前页码
    total:0
  },
  onLoad: function () {
    this.loadData();
  },
  onShareAppMessage(){
    return {
      title: "我们都在玩 YHOLE，一起来啊！",
      path: 'pages/index/index'
    }
  },
  onPullDownRefresh:function(){
    this.setData({
      page:0
    });
    this.loadData(true);
  },
  onReachBottom:function(){
    let limit = 10;
    if ((this.data.page+1) * limit < this.data.total){
      this.setData({
        page: this.data.page + 1
      });
      this.loadData();
    }else{
      console.log("end");
      return false;
    }
  },
  loadData:function(isUp){
    let limit = 10;
    let objects = {
      tableID: 1108,
      limit: limit,
      offset: limit * this.data.page,
      order_by: '-created_at'
    };
    wx.BaaS.getRecordList(objects)
      .then((res) => {
        for (let i = 0; i < res.data.objects.length;i++){
          let created_at = res.data.objects[i].created_at*1000;
          res.data.objects[i].created_at = util.formatTime(new Date(created_at));
        }
        if (isUp){
          wx.stopPullDownRefresh();
          this.setData({
            list: res.data.objects,
            total: res.data.meta.total_count
          });
        }else{
          this.setData({
            list: this.data.list.concat(res.data.objects),
            total: res.data.meta.total_count
          });
          
        }
      }, (err) => {
        console.log(err);
    });
  }
})
