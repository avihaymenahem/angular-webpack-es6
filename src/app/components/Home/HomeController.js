"use strict";

export default class HomeController {
    constructor(model) {
        model.name = this.name;
    }

    get name() {
        return "Hello World!";
    }
}