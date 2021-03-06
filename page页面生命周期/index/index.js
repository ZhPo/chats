Page({

  /**
   * 页面的初始数据
   */
  data: {
    username: 'POPO',
    container: {
      country: 'China',
      city: '重庆'
    },
    place: [
      '江津', '渝北', '九龙坡'
    ]
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {
    /**
     * 后台修改数据麻烦方式（复杂的数据常用）
     * 取对象->修改数据>设置对象
     */
    var username = this.data.username;
    username = '张芃';
    this.setData({
      username: username
    })
    /**
     * 简单易操作方式
     */
    this.setData({
      'container.city': '成都'
    })
    /**
     * 数组下标式修改数据
     */
    this.setData({
      'place.[3]': '射洪'
    })
    console.log('onLoad!')
  },
  onShow: function(e) {
    console.log('onShow!')
  },
  onReady: function(e) {
    console.log('onReady!')
  },
  onHide: function(e) {
    console.log('onHide!')
  },
  onToNextClick:function(e){
    wx.navigateTo({
      url: '/pages/mine/mine',
    })
  }
})