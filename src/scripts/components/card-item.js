class cardItem extends HTMLElement {
    connectedCallback() {
        this.render();
    }

    render() {
        this.innerHTML = `
            <section>
                <div class="card">
                    <figure class="card-image">
                        <img src="images/heros/hero-image_4.jpg" alt="Fan Art">
                        <h5 class="badge-city">Kota Bandung</h5>
                    </figure>
                    
                    <div class="card-info">
                        <h3>Rating: 4.5</h3>
                        <h2>Rendang Sapi Makasar</h2>
                        <p>Lorem asdasdasd sadsadadsad asdsads sfada asdasd adad adas dsadsdasd
                        sadasdsadsds
                        sadasdsadsadsadsad</p>
                    </div>
                </div>
            </section>
        `;
    }
}

customElements.define("card-item", cardItem);