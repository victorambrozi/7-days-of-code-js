"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Form {
    constructor(name, date) {
        this.name = name;
        this.date = date;
    }
    onSubmit(event) {
        event.preventDefault();
        console.log("previniu...");
    }
}
exports.Form = Form;
