// pages/qa/qa.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
      name:'Corday',
      condition:true,
      array:['张三','李四','王五'],
  },
  /**
   * 
   * 改名
   */
  changeName:function(){
      this.setData({
        name:"kedai"
      })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
      console.log("调用qa的onLoad")
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
      console.log("调用qa的onReady")
  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {
      console.log("调用qa的onShow")
  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {
      console.log("调用qa的onHide")
  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {
      console.log("调用qa的onUnload")
  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {
      console.log("调用onPullDownReflesh")
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