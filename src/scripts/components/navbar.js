class appBar extends HTMLElement {
    connectedCallback() {
        this.render();
    }

    render() {
        this.innerHTML =  `
            <nav>
                <div class="logo">
                    <h1>Makan-Makan</h1>
                </div>

                <ul>
                    <li><a href="/">Home</a></li>
                    <li><a href="#">Favorite</a></li>
                    <li><a target="_blank" href="https://www.linkedin.com/in/agung-saepudin-230799">About Us</a></li>
                </ul>
                
                <button class="hamburger">
                    <span></span>
                    <span></span>
                    <span></span>
                </button>
            </nav>
        `;

        const hamburgerElement = document.querySelector(".hamburger");
        const navElement = document.querySelector("nav ul");

        hamburgerElement.addEventListener('click', () => {
            navElement.classList.toggle('slide')
        })

    }
}

customElements.define("app-bar", appBar);