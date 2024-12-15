import AbstractView from "./AbstractView.js";

export default class extends AbstractView {
    constructor(params) {
        super(params);
        this.setTitle("Viewing Posts");
    }

    async getHtml() {
        //console.log(this.params.id);
        return `
        <h1>This ia a Post</h1>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris sed tellus iaculis, sollicitudin mauris ut, placerat erat. Nulla malesuada imperdiet vehicula. Morbi sed sagittis purus. Fusce at commodo nisi. Fusce sed ipsum massa. Nunc lacinia mauris vitae sapien fermentum fringilla. Duis vulputate vel urna ut ultricies. Pellentesque vehicula ante vel eleifend consectetur. Duis ac turpis id neque vestibulum finibus sit amet ut libero.</p>
        `;
    }
}