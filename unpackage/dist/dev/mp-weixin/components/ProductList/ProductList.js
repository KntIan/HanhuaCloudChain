"use strict";
const common_vendor = require("../../common/vendor.js");
const _sfc_main = {
  __name: "ProductList",
  setup(__props) {
    const products = [
      {
        id: 1,
        title: "政采建易贷",
        description: "单局可贷500万，放款快",
        image: "https://desk-fd.zol-img.com.cn/t_s960x600c5/g5/M00/02/04/ChMkJlbKyFOILgqwAAU1Zymsk68AALIAgFwgVgABTV_720.jpg"
      },
      {
        id: 2,
        title: "五冶保函",
        description: "基于五冶资合约总·效率高",
        image: "https://pic2.zhimg.com/v2-5fb13110e1de13d4c11e6e7f5b8026da_r.jpg"
      },
      {
        id: 3,
        title: "电子履约保函",
        description: "电子履约总·出函快",
        image: "https://ts1.cn.mm.bing.net/th/id/R-C.c4c52f16cc67c7409eff60a4fce2d152?rik=qBwdq1iz39HyPA&riu=http%3a%2f%2fwww.kutoo8.com%2fupload%2fimage%2f95093231%2f13.jpg&ehk=%2flbRri2PpwfxcQiqdvwcgv76NPhmuhxXUC9lhcyITcw%3d&risl=&pid=ImgRaw&r=0"
      }
    ];
    const applyNow = (id) => {
      console.log(`申请产品 ID: ${id}`);
    };
    return (_ctx, _cache) => {
      return {
        a: common_vendor.f(products, (product, index, i0) => {
          return {
            a: product.image,
            b: common_vendor.t(product.title),
            c: common_vendor.t(product.description),
            d: common_vendor.o(($event) => applyNow(product.id), index),
            e: index
          };
        })
      };
    };
  }
};
const Component = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__scopeId", "data-v-c937ae7a"]]);
wx.createComponent(Component);
