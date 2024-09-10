"use strict";
const common_vendor = require("../../common/vendor.js");
const _sfc_main = {
  props: {
    tabList: {
      type: Array,
      default: () => []
    },
    currentIndex: {
      type: Number,
      default: 0
    },
    activeColor: {
      type: String,
      default: "#007aff"
    },
    inactiveColor: {
      type: String,
      default: "#666"
    }
  },
  methods: {
    switchTab(index) {
      this.$emit("switchTab", index);
    }
  }
};
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return {
    a: common_vendor.f($props.tabList, (item, index, i0) => {
      return {
        a: index === $props.currentIndex ? item.selectedIconPath : item.iconPath,
        b: common_vendor.t(item.text),
        c: index === $props.currentIndex ? $props.activeColor : $props.inactiveColor,
        d: index,
        e: index === $props.currentIndex ? 1 : "",
        f: common_vendor.o(($event) => $options.switchTab(index), index)
      };
    })
  };
}
const Component = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render], ["__scopeId", "data-v-208a9ade"]]);
wx.createComponent(Component);
