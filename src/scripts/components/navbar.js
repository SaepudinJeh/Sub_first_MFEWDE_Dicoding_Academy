class appBar extends HTMLElement {
    connectedCallback() {
        this.render();
    }

    render() {
        this.innerHTML =  `
            <nav class="navbar">
                <div class="content">
                    <a href="/" class="logo">
                        <h1>Makan-Makan</h1>
                    </a>

                    <ul class="menu-list">
                        <button class="close-btn">✖</button>

                        <li><a href="/">Home</a></li>
                        <li><a href="#">Favorite</a></li>
                        <li><a target="_blank" href="https://www.linkedin.com/in/agung-saepudin-230799">About Us</a></li>
                    </ul>

                    <button class="menu-btn">☰</button>
                </div>
            </nav>
        `;

        
        const menuList = document.querySelector('.menu-list');
        const menuBtn = document.querySelector('.menu-btn');
        const closeBtn = document.querySelector('.close-btn');

        menuBtn.addEventListener('click', () => {
            menuList.classList.add('active');
            menuBtn.classList.add('hidden')
        })

        closeBtn.addEventListener('click', () => {
            menuList.classList.remove('active');
            menuBtn.classList.remove('hidden')
        })

    }
}

customElements.define("app-bar", appBar);