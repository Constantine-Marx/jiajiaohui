export default defineAppConfig({
  tabBar: {
    color: "#333",
    selectedColor: "#6190E8",
    backgroundColor: "#fff",
    borderStyle: "black",
    custom: true,
    list: [
      {
        pagePath: "pages/index/index",
        text: "已发布",
      },
      {
        pagePath: "pages/publish/publish",
        text: "发布",
      },
      {
        pagePath: "pages/user/user",
        text: "我的",
      }
    ],
  },
  pages: [
    'pages/index/index',
    'pages/publish/publish',
    'pages/user/user',
  ],
  window: {
    backgroundTextStyle: 'light',
    navigationBarBackgroundColor: '#fff',
    navigationBarTitleText: 'WeChat',
    navigationBarTextStyle: 'black'
  }
})
