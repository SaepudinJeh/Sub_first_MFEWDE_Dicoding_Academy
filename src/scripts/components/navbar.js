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
                
                <div class="hamburger">
                    <input type="checkbox" />
                    <span></span>
                    <span></span>
                    <span></span>
                </div>
            </nav>
        `;

        const hamburgerElement = document.querySelector(".hamburger input");
        const navElement = document.querySelector("nav ul");

        hamburgerElement.addEventListener('click', () => {
            navElement.classList.toggle('slide')
        })

    }
}

customElements.define("app-bar", appBar);