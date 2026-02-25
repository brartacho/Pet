const imagens = [
    "./imagens/caes/cachorro-golden-retriever.webp",
    "./imagens/caes/caramelo.webp",
    "./imagens/caes/dachshund.png"
]

// addEventListener("evento, uma função")
// () => {}      ----> é uma função anônima
document.getElementById("btn-galeria").addEventListener("click", () => {
    const galeria = document.getElementById("imagens-galeria");
    galeria.innerHTML = ""; //limpa o conteúdo anterior


    //estamos meio q criando um container que nao existe pra jogar no html. 
    //forEach(): executa uma função para cada elemento (sem retorno)
    //nesse caso, o parametro vai receber uma imagem
    //src ou link da imagem
    //a img possui 2 parâmetros no html: src e alt

    imagens.forEach((src)=>{
        const img = document.createElement("img");
        img.src = src;   //poderia ser "link"  // Define o atributo src da imagem para o caminho fornecido
        img.alt = "Foto de um cachorro"
        galeria.appendChild(img)
    })
})

// COMENTARIO PARA TESTAR COMMIT