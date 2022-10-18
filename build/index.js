"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const FormController_1 = __importDefault(require("./FormController"));
const button = document.getElementById("js-button");
const form = new FormController_1.default("nome", "data");
console.log(button);
