!function(e,o){"object"==typeof exports&&"undefined"!=typeof module?o(exports):"function"==typeof define&&define.amd?define(["exports"],o):o((e="undefined"!=typeof globalThis?globalThis:e||self).Bg2Utils={})}(this,(function(e){"use strict";var o,t;e.Code=void 0,(t=e.Code||(e.Code={})).SUCCESS="SUCCESS",t.NO_DOCUMENT="NO_DOCUMENT",t.COPY_ERROR="COPY_ERROR";var d=((o={})[e.Code.SUCCESS]="成功",o[e.Code.NO_DOCUMENT]="没有document",o[e.Code.COPY_ERROR]="复制失败",o);function n(e,o){return{code:e,message:d[e],data:o}}e.CodeMessage=d,e.bg2CopyToClipboard=function(o){if(!document)return n(e.Code.NO_DOCUMENT);var t=document.createElement("textarea");t.style.position="fixed",t.style.top="0",t.style.left="0",t.style.opacity="0",t.value=o,document.body.appendChild(t),t.focus(),t.select();try{return n(document.execCommand("copy")?e.Code.SUCCESS:e.Code.COPY_ERROR)}catch(o){return n(e.Code.COPY_ERROR)}},e.buildResponse=n,Object.defineProperty(e,"__esModule",{value:!0})}));
//# sourceMappingURL=bg2utils.umd.js.map
