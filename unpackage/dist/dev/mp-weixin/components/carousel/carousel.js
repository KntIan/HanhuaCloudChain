"use strict";
const common_vendor = require("../../common/vendor.js");
const _sfc_main = {
  __name: "carousel",
  setup(__props) {
    const images = common_vendor.ref([
      "https://ts1.cn.mm.bing.net/th/id/R-C.b7d86f694b0c0e08fde610685b682e4c?rik=DMoesjOanCbjgA&riu=http%3a%2f%2fpic.bizhi360.com%2fbbpic%2f53%2f4653.jpg&ehk=6rJJj81MmBC7y9hUUyUQjg%2bcP14CDK64VTMct15wcy0%3d&risl=&pid=ImgRaw&r=0"
      // 'https://ts1.cn.mm.bing.net/th/id/R-C.748160bf925a7acb3ba1c9514bbc60db?rik=AYY%2bJ9WcXYIMgw&riu=http%3a%2f%2fseopic.699pic.com%2fphoto%2f50017%2f0822.jpg_wh1200.jpg&ehk=CMVcdZMU6xxsjVjafO70cFcmJvD62suFC1ytk8UuAUk%3d&risl=&pid=ImgRaw&r=0',
      // 'https://img95.699pic.com/photo/50059/8720.jpg_wh860.jpg'
    ]);
    return (_ctx, _cache) => {
      return {
        a: common_vendor.f(images.value, (image, index, i0) => {
          return {
            a: image,
            b: common_vendor.o(($event) => _ctx.goToDetail(image), index),
            c: index
          };
        })
      };
    };
  }
};
const Component = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__scopeId", "data-v-fade7ed2"]]);
wx.createComponent(Component);
