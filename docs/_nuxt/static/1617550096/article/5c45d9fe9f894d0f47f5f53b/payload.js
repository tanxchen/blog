__NUXT_JSONP__("/article/5c45d9fe9f894d0f47f5f53b", {data:[{article:{_id:"5c45d9fe9f894d0f47f5f53b",meta:{createDate:"2019-01-21 22:41:02",updateDate:"2019-01-21 22:43:24"},tags:["css"],title:"CSS里的BFC",content:"\u003Ch2\u003EBFC概念\u003C\u002Fh2\u003E\n\u003Cp\u003E块格式化上下文（Block Formatting Context，BFC） 是Web页面的可视化CSS渲染的一部分，是布局过程中生成块级盒子的区域，也是浮动元素与其他元素的交互限定区域。是CSS2.1规范定义的内容。\u003C\u002Fp\u003E\n\u003Cp\u003E\u003Cstrong\u003E下列方式会创建块格式化上下文：\u003C\u002Fstrong\u003E\u003C\u002Fp\u003E\n\u003Cul\u003E\n\u003Cli\u003E根元素或包含根元素的元素\u003C\u002Fli\u003E\n\u003Cli\u003E浮动元素（元素的 \u003Ccode\u003Efloat\u003C\u002Fcode\u003E 不是 \u003Ccode\u003Enone\u003C\u002Fcode\u003E）\u003C\u002Fli\u003E\n\u003Cli\u003E绝对定位元素（元素的 \u003Ccode\u003Eposition\u003C\u002Fcode\u003E 为 \u003Ccode\u003Eabsolute\u003C\u002Fcode\u003E 或 \u003Ccode\u003Efixed\u003C\u002Fcode\u003E）\u003C\u002Fli\u003E\n\u003Cli\u003E行内块元素（元素的 \u003Ccode\u003Edisplay\u003C\u002Fcode\u003E 为 \u003Ccode\u003Einline-block\u003C\u002Fcode\u003E）\u003C\u002Fli\u003E\n\u003Cli\u003E表格单元格（元素的 \u003Ccode\u003Edisplay\u003C\u002Fcode\u003E为 \u003Ccode\u003Etable-cell\u003C\u002Fcode\u003E，HTML表格单元格默认为该值）\u003C\u002Fli\u003E\n\u003Cli\u003E表格标题（元素的 \u003Ccode\u003Edisplay\u003C\u002Fcode\u003E 为 \u003Ccode\u003Etable-caption\u003C\u002Fcode\u003E，HTML表格标题默认为该值）\u003C\u002Fli\u003E\n\u003Cli\u003E匿名表格单元格元素（元素的 \u003Ccode\u003Edisplay\u003C\u002Fcode\u003E为 \u003Ccode\u003Etable\u003C\u002Fcode\u003E、\u003Ccode\u003Etable-row\u003C\u002Fcode\u003E、 \u003Ccode\u003Etable-row-group\u003C\u002Fcode\u003E、t\u003Ccode\u003Eable-header-group\u003C\u002Fcode\u003E、\u003Ccode\u003Etable-footer-group\u003C\u002Fcode\u003E（分别是HTML table、row、tbody、thead、tfoot的默认属性）或 \u003Ccode\u003Einline-table\u003C\u002Fcode\u003E）\u003C\u002Fli\u003E\n\u003Cli\u003Eoverflow 值不为 \u003Ccode\u003Evisible\u003C\u002Fcode\u003E 的块元素\u003C\u002Fli\u003E\n\u003Cli\u003Edisplay 值为 \u003Ccode\u003Eflow-root\u003C\u002Fcode\u003E 的元素\u003C\u002Fli\u003E\n\u003Cli\u003Econtain 值为 \u003Ccode\u003Elayout\u003C\u002Fcode\u003E、\u003Ccode\u003Econtent\u003C\u002Fcode\u003E或 \u003Ccode\u003Estrict\u003C\u002Fcode\u003E 的元素\u003C\u002Fli\u003E\n\u003Cli\u003E弹性元素（\u003Ccode\u003Edisplay\u003C\u002Fcode\u003E为 \u003Ccode\u003Eflex\u003C\u002Fcode\u003E 或 \u003Ccode\u003Einline-flex\u003C\u002Fcode\u003E元素的直接子元素）\u003C\u002Fli\u003E\n\u003Cli\u003E网格元素（\u003Ccode\u003Edisplay为\u003C\u002Fcode\u003E \u003Ccode\u003Egrid\u003C\u002Fcode\u003E 或 \u003Ccode\u003Einline-grid\u003C\u002Fcode\u003E 元素的直接子元素）\u003C\u002Fli\u003E\n\u003Cli\u003E多列容器（元素的 \u003Ccode\u003Ecolumn-count\u003C\u002Fcode\u003E 或 \u003Ccode\u003Ecolumn-width\u003C\u002Fcode\u003E 不为 \u003Ccode\u003Eauto\u003C\u002Fcode\u003E，包括 \u003Ccode\u003Ecolumn-count\u003C\u002Fcode\u003E 为 1）\u003C\u002Fli\u003E\n\u003Cli\u003E\u003Ccode\u003Ecolumn-span\u003C\u002Fcode\u003E 为 \u003Ccode\u003Eall\u003C\u002Fcode\u003E 的元素始终会创建一个新的BFC，即使该元素没有包裹在一个多列容器中（标准变更，Chrome bug）。\u003C\u002Fli\u003E\n\u003C\u002Ful\u003E\n\u003Cp\u003E\u003Cem\u003E块格式化上下文包含创建它的元素内部的所有内容.\u003C\u002Fem\u003E\u003C\u002Fp\u003E\n\u003Cblockquote\u003E\n\u003Cp\u003E根元素即为一个BFC\u003C\u002Fp\u003E\n\u003C\u002Fblockquote\u003E\n\u003Ch3\u003E特性\u003C\u002Fh3\u003E\n\u003Cul\u003E\n\u003Cli\u003E属于同一个BFC的两个相邻Box的margin会发生重叠，与方向无关，仅保留较大的margin值\u003C\u002Fli\u003E\n\u003Cli\u003E消除与浮动元素的重叠\u003C\u002Fli\u003E\n\u003Cli\u003E可制造内部浮动（计算BFC的高度时，浮动子元素也参与计算）\u003C\u002Fli\u003E\n\u003Cli\u003E每个元素的margin-left，与包含块border-left相接触(对于从左往右的格式化，否则相反)。即使存在浮动也是如此（见demo里的part3）。\u003C\u002Fli\u003E\n\u003C\u002Ful\u003E\n\u003Ch3\u003Edemo\u003C\u002Fh3\u003E\n\u003Cp\u003E\u003Ca href=\"https:\u002F\u002Fcodepen.io\u002Fryanxchen\u002Fpen\u002FOdLbwq\"\u003Edemo\u003C\u002Fa\u003E\u003C\u002Fp\u003E\n\u003Ch3\u003E总结\u003C\u002Fh3\u003E\n\u003Cp\u003EBFC是文档内元素显示的一种形式，概念有点抽象,可想像成在文档里为一个密闭的空间，与外部进行了隔离。在默认情况下，根元素即为BFC。所以在根元素内部的元素垂直方向会产生margin重合，浮动元素会产生元素重叠，BFC可消除元素内的子\b元素浮动产生的不包含情况等特性。\u003C\u002Fp\u003E\n\u003Cp\u003E\u003Ca href=\"https:\u002F\u002Fdeveloper.mozilla.org\u002Fen-US\u002Fdocs\u002FWeb\u002FGuide\u002FCSS\u002FBlock_formatting_context\"\u003E参考MDN链接\u003C\u002Fa\u003E\u003C\u002Fp\u003E\n",__v:1}}],fetch:{},mutations:void 0});