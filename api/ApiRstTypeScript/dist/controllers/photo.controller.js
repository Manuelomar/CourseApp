"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createPhoto = void 0;
function createPhoto(req, res) {
    console.log('saving photo');
    return res.json({
        message: 'Photo successfully saved'
    });
}
exports.createPhoto = createPhoto;
