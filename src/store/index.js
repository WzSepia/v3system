import { createStore } from "vuex";

export default createStore({
  state: {
    iframeSrc: "https://www.baidu.com",
    navIsHide: false,
    headerList: [
      {
        name: "地图控件管理",
        src: "1",
      },
      {
        name: "元数据管理",
        src: "2",
      },
      {
        name: "系统管理",
        src: "3",
      },
    ],
    navList: [
      {
        name: "用户维护",
        children: [
          {
            name: "地图控件管理",
            src: "http://10.10.50.55:8080/",
          },
          {
            name: "地图控件管理",
            src: "https://cbms.thtf.com.cn/fare/action/index",
          },
          {
            name: "地图控件管理",
            src: "http://219.232.200.39/uamsso/",
          },
        ],
      },
      {
        name: "角色维护",
        src: "http://218.107.133.53/assm/login.action",
      },
      {
        name: "业务清单维护",
        src: "https://www.idataviz.com/v/src/q.html?s=2b77d9d94049d9e3",
      },
      {
        name: "组织机构管理",
        src: "https://mail.thtf.com.cn/owa/",
      },
      {
        name: "日志管理",
        src: "http://10.10.50.55:8012/yyaq/",
      },
    ],
  },
  mutations: {},
  actions: {},
  modules: {},
});
