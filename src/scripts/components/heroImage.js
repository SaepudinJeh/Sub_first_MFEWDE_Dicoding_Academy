class slideImage extends HTMLElement {
    connectedCallback() {
        this.render();
    }

    render() {
        this.innerHTML =   `
            <div class="slider">
                <figure class="hero-image">
                    <img src="images/heros/hero-image_3.jpg" >
                    <h1>Makan-makan Apps</h1>
                    <h2>Makan sesukannya, bayar sesukannya</h2>
                </figure>

                <h1 id="explore">Explore Restaurants</h1>
            </div>
        `;
    }
}

customElements.define("slider-images", slideImage);