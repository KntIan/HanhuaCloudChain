"use strict";
const common_vendor = require("../../common/vendor.js");
if (!Math) {
  (common_vendor.unref(ImageCarousel) + common_vendor.unref(ProductList) + common_vendor.unref(CustomTabBar))();
}
const ImageCarousel = () => "../../components/carousel/carousel.js";
const ProductList = () => "../../components/ProductList/ProductList.js";
const CustomTabBar = () => "../../components/CustomTabBar/CustomTabBar.js";
const _sfc_main = {
  __name: "index",
  setup(__props) {
    const currentIndex = common_vendor.ref(0);
    const activeColor = common_vendor.ref("#FF6600");
    const inactiveColor = common_vendor.ref("#666666");
    const switchTab = (index) => {
      currentIndex.value = index;
    };
    const navigateToRegister = () => {
      common_vendor.index.navigateTo({
        url: "/pages/login/login"
      });
    };
    const tabList = common_vendor.ref([
      {
        // iconPath: '/static/tabbar/home.png',
        // selectedIconPath: '/static/tabbar/home-active.png',
        text: "首页"
        // pagePath: '/pages/index/index'
      },
      {
        // iconPath: '/static/tabbar/record.png',
        // selectedIconPath: '/static/tabbar/record-active.png',
        text: "待办"
        // pagePath: '/pages/record/record'
      },
      {
        // iconPath: '/static/tabbar/mine.png',
        // selectedIconPath: '/static/tabbar/mine-active.png',
        text: "我的"
        // pagePath: '/pages/mine/mine'
      }
    ]);
    return (_ctx, _cache) => {
      return {
        a: common_vendor.o(navigateToRegister),
        b: common_vendor.o(switchTab),
        c: common_vendor.p({
          tabList: tabList.value,
          currentIndex: currentIndex.value,
          activeColor: activeColor.value,
          inactiveColor: inactiveColor.value
        })
      };
    };
  }
};
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__scopeId", "data-v-1cf27b2a"]]);
wx.createPage(MiniProgramPage);
