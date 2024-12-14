import AbstractView from "./AbstractView.js";

export default class extends AbstractView {
    constructor() {
        super();
        this.setTitle("Dashboard");
    }

    async getHtml() {
        return `
        <h1>Settings</h1>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Neque vestibulum finibus sit amet ut libero.</p>
        `;
    }
}