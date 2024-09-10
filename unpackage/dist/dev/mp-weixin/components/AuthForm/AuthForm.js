"use strict";
const common_vendor = require("../../common/vendor.js");
if (!Math) {
  common_vendor.unref(CustomNavBar)();
}
const CustomNavBar = () => "../CustomNavBar/CustomNavBar.js";
const _sfc_main = {
  __name: "AuthForm",
  props: {
    mode: {
      type: String,
      default: "login",
      validator: (value) => ["login", "register"].includes(value)
    }
  },
  setup(__props) {
    const props = __props;
    const form = common_vendor.ref({
      phone: "",
      verificationCode: "",
      referralCode: "",
      password: "",
      confirmPassword: "",
      agree: false,
      intention: ""
    });
    const sendVerificationCode = () => {
      console.log("发送验证码到手机号:", form.value.phone);
    };
    const handleSubmit = () => {
      if (!isLogin.value && form.value.password !== form.value.confirmPassword) {
        common_vendor.index.showToast({ title: "密码和确认密码不一致", icon: "none" });
        return;
      }
      if (!form.value.agree) {
        common_vendor.index.showToast({ title: "请同意用户协议和隐私政策", icon: "none" });
        return;
      }
      console.log(`${isLogin.value ? "登录" : "注册"}信息:`, form.value);
    };
    return (_ctx, _cache) => {
      return common_vendor.e({
        a: common_vendor.p({
          title: "瀚华云链"
        }),
        b: form.value.phone,
        c: common_vendor.o(($event) => form.value.phone = $event.detail.value),
        d: form.value.phone,
        e: common_vendor.o(($event) => form.value.phone = $event.detail.value),
        f: common_vendor.o(sendVerificationCode),
        g: __props.mode === "register"
      }, __props.mode === "register" ? {
        h: form.value.referralCode,
        i: common_vendor.o(($event) => form.value.referralCode = $event.detail.value)
      } : {}, {
        j: __props.mode === "register"
      }, __props.mode === "register" ? {
        k: form.value.intention,
        l: common_vendor.o(($event) => form.value.intention = $event.detail.value)
      } : {}, {
        m: __props.mode === "register"
      }, __props.mode === "register" ? {
        n: form.value.password,
        o: common_vendor.o(($event) => form.value.password = $event.detail.value)
      } : {}, {
        p: __props.mode === "register"
      }, __props.mode === "register" ? {
        q: form.value.confirmPassword,
        r: common_vendor.o(($event) => form.value.confirmPassword = $event.detail.value)
      } : {}, {
        s: form.value.agree,
        t: common_vendor.t(props.mode === "login" ? "登录" : "注册"),
        v: common_vendor.o(handleSubmit),
        w: __props.mode === "login"
      }, __props.mode === "login" ? {} : {}, {
        x: __props.mode === "register"
      }, __props.mode === "register" ? {
        y: common_vendor.o((...args) => _ctx.dian && _ctx.dian(...args))
      } : {});
    };
  }
};
const Component = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__scopeId", "data-v-0bc7db6a"]]);
wx.createComponent(Component);
