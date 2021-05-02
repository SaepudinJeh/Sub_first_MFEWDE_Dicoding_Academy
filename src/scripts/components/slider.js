class slideImage extends HTMLElement {
    connectedCallback() {
        this.render();
    }

    render() {
        this.innerHTML =   `
            <div class="slider">
                <figure>
                    <img src="images/heros/hero-image_2.jpg" >
                </figure>
            </div>
        `;
    }
}

customElements.define("slider-images", slideImage);