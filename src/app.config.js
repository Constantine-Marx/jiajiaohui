export default defineAppConfig({
  tabBar: {
    color: '#999',
    selectedColor: '#333',
    backgroundColor: '#fff',
    borderStyle: 'black',
    list: [{
      pagePath: 'pages/index/index',
      text: '课源',
      iconPath: 'pages/imgs/keyuan.png',
      selectedIconPath: 'pages/imgs/keyuanSelcd.png'
    }, {
      pagePath: 'pages/publish/publish',
      text: '发布',
      iconPath: 'pages/imgs/plus2.png',
      selectedIconPath: 'pages/imgs/plus2.png'
    }, {
      pagePath: 'pages/msg/msg',
      text: '消息',
      iconPath: 'pages/imgs/message.png',
      selectedIconPath: 'pages/imgs/messageSelcd.png'
    }, {
      pagePath: 'pages/user/user',
      text: '我的',
      iconPath: 'pages/imgs/user.png',
      selectedIconPath: 'pages/imgs/userSelcd.png'
    }
    ],
  },

  pages: [
    'pages/index/index',
    'pages/user/user',
    'pages/publish/publish',
    'pages/msg/msg',
  ], window: {
    backgroundTextStyle: 'light',
    navigationBarBackgroundColor: '#fff',
    navigationBarTitleText: 'WeChat',
    navigationBarTextStyle: 'black'
  },
  // subpackages: [
  //   {
  //     root: 'subPackages',
  //     pages: [
  //       'pages/publish/publish',
  //       'pages/msg/msg',
  //     ]
  //   }
  // ]
})
