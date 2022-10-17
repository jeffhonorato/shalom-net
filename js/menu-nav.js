const menuHamburguer = () => {
    const menu = document.querySelector("#btn-mobile");
    const menuItens = document.querySelector(".nav__ul");
    
    menu.addEventListener("click", () => {
        menuItens.classList.toggle("ativo");
    });
}

menuHamburguer();
