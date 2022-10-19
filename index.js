"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const lambda_log_1 = __importDefault(require("lambda-log"));
const createLogger = (metadata) => {
    lambda_log_1.default.options.meta = metadata;
    return lambda_log_1.default;
};
exports.default = createLogger;
//# sourceMappingURL=index.js.map