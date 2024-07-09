"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.buildResponse = buildResponse;
const common_1 = require("../types/common");
function buildResponse(code, data) {
    return {
        code,
        message: common_1.CodeMessage[code],
        data
    };
}
