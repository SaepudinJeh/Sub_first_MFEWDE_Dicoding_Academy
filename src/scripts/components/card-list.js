import "./card-item";

class CardList extends HTMLElement {
    set cards(cards) {
        this._cards = cards;
        this.render();
    }

    render() {
        this.innerHTML = "";
        this._cards.forEach(card => {
            const createCardItem = document.createElement('card-item');
            createCardItem.card = card;
            this.appendChild(createCardItem);
        })
    }
}


customElements.define('card-list', CardList);