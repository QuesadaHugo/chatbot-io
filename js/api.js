"use strict";

export class Api {
    constructor() {
    }

    get = (url) => {
        return axios.get(`${url}`);
    }

    async getSynch(url) {
        return await this.get(url);
    }
}