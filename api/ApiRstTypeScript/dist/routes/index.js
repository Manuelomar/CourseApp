"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const router = (0, express_1.Router)();
const photo_controller_1 = require("../controllers/photo.controller");
router.route('/')
    .get(photo_controller_1.createPhoto);
exports.default = router;
