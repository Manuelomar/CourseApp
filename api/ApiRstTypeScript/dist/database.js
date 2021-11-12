"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.startConnection = void 0;
const mongoose_1 = require("mongoose");
var colors = require('colors');
async function startConnection() {
    await (0, mongoose_1.connect)('mongodb://localhost/photoGalleryDb', {});
    console.log('Database is connected');
}
exports.startConnection = startConnection;