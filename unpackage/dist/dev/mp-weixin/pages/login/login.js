"use strict";
const common_vendor = require("../../common/vendor.js");
if (!Math) {
  common_vendor.unref(AuthForm)();
}
const AuthForm = () => "../../components/AuthForm/AuthForm.js";
const _sfc_main = {
  __name: "login",
  setup(__props) {
    return (_ctx, _cache) => {
      return {
        a: common_vendor.p({
          mode: "login"
        })
      };
    };
  }
};
wx.createPage(_sfc_main);
