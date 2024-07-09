"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.copyToClipboard = void 0;
const utils_1 = require("./src/utils/utils");
const common_1 = require("./src/types/common");
//复制到粘贴板
const copyToClipboard = (text) => {
    if (!document) {
        return (0, utils_1.buildResponse)(common_1.Code.NO_DOCUMENT);
    }
    // 创建一个textarea元素
    const textarea = document.createElement('textarea');
    // 设置textarea的样式，使其在视觉上不可见
    textarea.style.position = 'fixed';
    textarea.style.top = '0';
    textarea.style.left = '0';
    textarea.style.opacity = '0';
    // 将需要复制的文本赋值给textarea
    textarea.value = text;
    document.body.appendChild(textarea);
    // 选中textarea中的文本
    textarea.focus();
    textarea.select();
    try {
        // 执行复制命令
        const successful = document.execCommand('copy');
        if (successful) {
            // 如果复制成功，使用Element UI的Message组件显示成功提示
            return (0, utils_1.buildResponse)(common_1.Code.SUCCESS);
        }
        else {
            // 如果复制失败，显示失败提示
            return (0, utils_1.buildResponse)(common_1.Code.COPY_ERROR);
        }
    }
    catch (err) {
        // 如果执行复制命令时发生异常，显示异常提示
        return (0, utils_1.buildResponse)(common_1.Code.COPY_ERROR);
    }
};
exports.copyToClipboard = copyToClipboard;
