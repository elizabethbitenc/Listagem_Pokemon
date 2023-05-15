const botaoAlterarTema= document.getElementById("botao_alterar_tema");
const body= document.querySelector("body");
const imagemBotaoTrocaTema= document.querySelector(".imagem__botao");

botaoAlterarTema.addEventListener("click", ()=> {
    const modoEscuroAtivo= body.classList.contains("modo-escuro");
    body.classList.toggle("modo-escuro");
    
    
    if(modoEscuroAtivo){
        imagemBotaoTrocaTema.setAttribute("src", "./img/sun.png")
    } else{
        imagemBotaoTrocaTema.setAttribute("src", "./img/moon.png")
    }

})