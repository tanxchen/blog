exports.ids = [1];
exports.modules = {

/***/ 42:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(46);
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(4).default
module.exports.__inject__ = function (context) {
  add("079cc848", content, true, context)
};

/***/ }),

/***/ 45:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_8_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_stylus_loader_index_js_ref_8_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_about_vue_vue_type_style_index_0_id_4b97e711_lang_stylus_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(42);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_8_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_stylus_loader_index_js_ref_8_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_about_vue_vue_type_style_index_0_id_4b97e711_lang_stylus_scoped_true___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_8_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_stylus_loader_index_js_ref_8_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_about_vue_vue_type_style_index_0_id_4b97e711_lang_stylus_scoped_true___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_8_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_stylus_loader_index_js_ref_8_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_about_vue_vue_type_style_index_0_id_4b97e711_lang_stylus_scoped_true___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_8_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_stylus_loader_index_js_ref_8_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_about_vue_vue_type_style_index_0_id_4b97e711_lang_stylus_scoped_true___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ 46:
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(3);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(false);
// Module
___CSS_LOADER_EXPORT___.push([module.i, ".about-page p[data-v-4b97e711]{line-height:1.6}.about-page ul[data-v-4b97e711]{list-style:disc outside none;list-style:initial;padding:0 0 0 40px}.about-page li[data-v-4b97e711]{margin:8px 0;line-height:1.2}.h4[data-v-4b97e711]{font-weight:700;font-size:120%;margin-bottom:20px;margin-top:20px}.h4~p[data-v-4b97e711]{margin-bottom:14px}.hr-line[data-v-4b97e711]{margin:16px 0 10px;opacity:.3}.github-logo[data-v-4b97e711]{opacity:.8;display:flex;margin-right:20px}.github-logo[data-v-4b97e711]:hover{opacity:.6}.friend-block[data-v-4b97e711]{display:inline-block}.create-wrap[data-v-4b97e711]{text-align:right;font-size:14px;color:#a1a1a1}", ""]);
// Exports
module.exports = ___CSS_LOADER_EXPORT___;


/***/ }),

/***/ 52:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/about.vue?vue&type=template&id=4b97e711&scoped=true&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"about-page"},[_c('bl-header'),_vm._ssrNode(" <h4 class=\"h4\" data-v-4b97e711>关于我</h4> <div data-v-4b97e711><p data-v-4b97e711>\n      我是Tanx Chen。目前在魔都任职前端开发。\n      喜欢跟小伙伴讨论技术，学习技术，研究技术。\n      喜爱前端，喜爱更友善的交互体验。\n      喜欢折腾，动手能力强，热爱编程。\n    </p></div> <p data-v-4b97e711></p> <hr class=\"hr-line\" data-v-4b97e711> <h4 class=\"h4\" data-v-4b97e711>关于本站</h4> <p data-v-4b97e711><del data-v-4b97e711>本站基于vue(nuxt) + node(express) + mongodb + nginx + 腾讯云 + jenkins构建。</del></p> <ul data-v-4b97e711><li data-v-4b97e711>部署至 github:gh-pages 2021-04-05</li> <li data-v-4b97e711><del data-v-4b97e711>项目代码由gitee迁移至github私有仓库 2018-01-08</del></li> <li data-v-4b97e711><del data-v-4b97e711>站点https升级 2018-01-08</del></li> <li data-v-4b97e711><del data-v-4b97e711>添加了评论功能（gitalk） 2018-12-30</del></li></ul> <hr class=\"hr-line\" data-v-4b97e711> <h4 class=\"h4\" data-v-4b97e711>我的项目</h4> <p data-v-4b97e711><a href=\"https://tanxchen.github.io/home/project.html\" target=\"_blank\" rel=\"noopener noreferrer\" class=\"link\" data-v-4b97e711>\n    https://tanxchen.github.io/home/project.html\n    </a></p> <hr class=\"hr-line\" data-v-4b97e711> <h4 class=\"h4\" data-v-4b97e711>联系我</h4> <p style=\"display: flex;align-items: center;\" data-v-4b97e711><a href=\"https://github.com/tanxchen\" target=\"_blank\" class=\"github-logo\" data-v-4b97e711><svg height=\"32\" viewBox=\"0 0 16 16\" version=\"1.1\" width=\"32\" aria-hidden=\"true\" class=\"octicon octicon-mark-github\" data-v-4b97e711><path fill-rule=\"evenodd\" d=\"M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 \n        0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 \n        1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 \n        0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 \n        1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 \n        3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0 0 16 \n        8c0-4.42-3.58-8-8-8z\" data-v-4b97e711></path></svg></a>\n    |\n    <span style=\"margin-left: 20px;\" data-v-4b97e711><i aria-hidden=\"true\" class=\"fa fa-envelope-o\" data-v-4b97e711></i> : jsryanx#gmail.com\n    </span></p> <hr class=\"hr-line\" data-v-4b97e711> <p class=\"create-wrap\" data-v-4b97e711>\n    发布于2018-12-28    最新修改于2021-10-01\n  </p> <div id=\"about-gitalk-container\" class=\"blog-comments-wrap\" data-v-4b97e711></div>")],2)}
var staticRenderFns = []


// CONCATENATED MODULE: ./pages/about.vue?vue&type=template&id=4b97e711&scoped=true&

// EXTERNAL MODULE: ./components/Header.vue + 4 modules
var Header = __webpack_require__(9);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/about.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

/* harmony default export */ var aboutvue_type_script_lang_js_ = ({
  name: 'about',
  components: {
    BlHeader: Header["default"]
  },

  data() {
    return {};
  },

  mounted() {
    document.title = '关于 | Tanx'; // eslint-disable-next-line

    const gitalk = new Gitalk({
      clientID: '3cc18428738157f74e62',
      clientSecret: 'a0a0eb91a60115f5ee8ae31007590ac9d1163c6e',
      repo: 'blog-comments',
      owner: 'tanxchen',
      admin: ['tanxchen'],
      id: location.pathname,
      distractionFreeMode: false
    });
    gitalk.render('about-gitalk-container');
  },

  methods: {}
});
// CONCATENATED MODULE: ./pages/about.vue?vue&type=script&lang=js&
 /* harmony default export */ var pages_aboutvue_type_script_lang_js_ = (aboutvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(2);

// CONCATENATED MODULE: ./pages/about.vue



function injectStyles (context) {
  
  var style0 = __webpack_require__(45)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  pages_aboutvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  injectStyles,
  "4b97e711",
  "ead1b220"
  
)

/* harmony default export */ var about = __webpack_exports__["default"] = (component.exports);

/***/ })

};;
//# sourceMappingURL=about.js.map