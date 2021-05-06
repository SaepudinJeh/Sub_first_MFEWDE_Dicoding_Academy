class cardItem extends HTMLElement {
    set card(data) {
        this._data = data;
        this.render();
    }

    render() {
        this.innerHTML = `
            <div class="cards">
                <figure class="card-image">
                    <img src="${this._data.pictureId}" alt="Fan Art">
                    <h5 class="badge-city">${this._data.city}</h5>
                </figure>
                
                <div class="card-info">
                    <h3>Rating: ${this._data.rating}</h3>
                    <h2>${this._data.name}</h2>
                    <p>${this._data.description.substring(0, 200)}</p>
                </div>
            </div>
        `;
    }
}

customElements.define("card-item", cardItem);