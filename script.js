const imagens = [
    "./imagens/caes/cachorro-golden-retriever.webp",
    "./imagens/caes/caramelo.webp",
    "./imagens/caes/dachshund.png"
];

const btnGaleria = document.getElementById("btn-galeria");

btnGaleria.addEventListener("click", () => {
    const galeria = document.getElementById("imagens-galeria");
    galeria.innerHTML = ""; 

    imagens.forEach((src) => {
        const img = document.createElement("img");
        img.src = src;  
        img.alt = "Paciente canino";
        galeria.appendChild(img);
    });

    btnGaleria.style.display = "none"; 
});