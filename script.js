// JavaScript - Funcionalidade do site

function mostrarAlerta() {
    alert("Obrigado por visitar! Vamos colher desenvolvimento juntos!");
}

function atualizarMensagem() {
    const mensagens = [
        "Oportunidades surgem para quem busca crescer.",
        "Cada aprendizado é um passo para o sucesso.",
        "Juntos, podemos criar um futuro melhor.",
        "Desenvolvimento pessoal abre portas para novas oportunidades."
    ];
    const indice = Math.floor(Math.random() * mensagens.length);
    document.getElementById("infoBox").innerText = mensagens[indice];
}