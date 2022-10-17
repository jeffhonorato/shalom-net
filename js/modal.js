const modalBox = () => {
    const btnAtendimento = document.querySelector(".js-atendimento");
    const modal = document.querySelector(".js-modal-box");
    const btnFechar = document.querySelector(".js__modal--btnFechar");
    
    btnAtendimento.addEventListener("click", () => {
        modal.classList.add("ativo");
        
    });
    
    btnFechar.addEventListener("click", () => {
        modal.classList.remove("ativo");
    });
};

const modalScroolDesativado = () => {
    const atendimentoBtn = document.querySelector(".js-atendimento");
    const bodyScroll = document.querySelector(".js-scrooll");
    const buttonFechar = document.querySelector(".js__modal--btnFechar");
    
    atendimentoBtn.addEventListener("click", () => {
        bodyScroll.classList.add("ativo");
    });

    buttonFechar.addEventListener("click", () => {
        bodyScroll.classList.remove("ativo");
    });
};


modalBox();
modalScroolDesativado();
