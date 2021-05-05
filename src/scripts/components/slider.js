class slideImage extends HTMLElement {
    connectedCallback() {
        this.render();
    }

    render() {
        this.innerHTML =   `
            <div class="slider">
                <figure class="hero-image">
                    <img src="images/heros/hero-image_3.jpg" >
                </figure>
            </div>
        `;
    }
}

customElements.define("slider-images", slideImage);