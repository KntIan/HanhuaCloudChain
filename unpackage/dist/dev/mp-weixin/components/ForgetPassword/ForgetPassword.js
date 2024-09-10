"use strict";
const common_vendor = require("../../common/vendor.js");
const _sfc_main = {
  __name: "ForgetPassword",
  setup(__props) {
    const phone = common_vendor.ref("");
    const code = common_vendor.ref("");
    const newPassword = common_vendor.ref("");
    const confirmPassword = common_vendor.ref("");
    const getCode = () => {
      console.log("发送验证码到手机号:", phone.value);
    };
    const submit = () => {
      console.log("手机号:", phone.value);
      console.log("验证码:", code.value);
      console.log("新密码:", newPassword.value);
      if (newPassword.value !== confirmPassword.value) {
        console.error("两次输入的密码不一致");
        return;
      }
    };
    return (_ctx, _cache) => {
      return {
        a: phone.value,
        b: common_vendor.o(($event) => phone.value = $event.detail.value),
        c: code.value,
        d: common_vendor.o(($event) => code.value = $event.detail.value),
        e: common_vendor.o(getCode),
        f: newPassword.value,
        g: common_vendor.o(($event) => newPassword.value = $event.detail.value),
        h: confirmPassword.value,
        i: common_vendor.o(($event) => confirmPassword.value = $event.detail.value),
        j: common_vendor.o(submit)
      };
    };
  }
};
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__scopeId", "data-v-ff7ec3e3"]]);
wx.createPage(MiniProgramPage);
