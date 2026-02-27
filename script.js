// ==========================================================================
// MENU HAMBÚRGUER (MOBILE)
// ==========================================================================
const menuToggle = document.getElementById("menu-toggle");
const linksMenu = document.getElementById("links-menu");
const itensMenu = document.querySelectorAll(".links-menu a");

menuToggle.addEventListener("click", () => {
    linksMenu.classList.toggle("ativo");
});

itensMenu.forEach(link => {
    link.addEventListener("click", () => {
        linksMenu.classList.remove("ativo");
    });
});

// ==========================================================================
// LÓGICA DA GALERIA
// ==========================================================================
const imagens = [
    "./imagens/caes/cachorro-golden-retriever.webp",
    "./imagens/caes/caramelo.webp",
    "./imagens/caes/dachshund.png",
    "./imagens/caes/Beagle.avif",
    "./imagens/caes/Pug.avif",
    "./imagens/caes/Bulldog-Francês.avif"
];

const btnGaleria = document.getElementById("btn-galeria");
const galeriaContainer = document.getElementById("imagens-galeria");
let galeriaCarregada = false;

btnGaleria.addEventListener("click", () => {
    if (!galeriaCarregada) {
        imagens.forEach((src) => {
            const img = document.createElement("img");
            img.src = src;  
            img.alt = "Paciente canino";
            img.loading = "lazy";
            img.style.animation = "fadeIn 0.5s ease forwards";
            galeriaContainer.appendChild(img);
        });
        
        galeriaCarregada = true;
        btnGaleria.textContent = "Ocultar Galeria";
        btnGaleria.style.backgroundColor = "var(--cor-texto)";
        return; 
    }

    const estaOculto = galeriaContainer.classList.toggle("oculto");

    if (estaOculto) {
        btnGaleria.textContent = "Mostrar Galeria";
        btnGaleria.style.backgroundColor = "var(--cor-primaria)";
    } else {
        btnGaleria.textContent = "Ocultar Galeria";
        btnGaleria.style.backgroundColor = "var(--cor-texto)"; 
    }
});

const style = document.createElement('style');
style.innerHTML = `
  @keyframes fadeIn {
    from { opacity: 0; transform: translateY(10px); }
    to { opacity: 1; transform: translateY(0); }
  }
`;
document.head.appendChild(style);

// ==========================================================================
// LÓGICA DE PESQUISA (LAYOUT EM DUAS LINHAS)
// ==========================================================================
const listaRacas = [
    { nome: "Labrador Retriever", caracteristica: "Amigável, leal e inteligente" },
    { nome: "Golden Retriever", caracteristica: "Afetuoso e brincalhão" },
    { nome: "Poodle", caracteristica: "Inteligente e hipoalergênico" },
    { nome: "Bulldog Inglês", caracteristica: "Tranquilo e de baixa energia" },
    { nome: "Pastor Alemão", caracteristica: "Corajoso e protetor" },
    { nome: "Yorkshire", caracteristica: "Pequeno, alerta e caçador" },
    { nome: "Dachshund", caracteristica: "Curioso, corajoso e animado (o famoso salsicha)" },
    { nome: "Beagle", caracteristica: "Alegre, amigável e excelente farejador" },
    { nome: "Vira Lata (SRD)", caracteristica: "Único, amoroso e cheio de personalidade" }
];

document.getElementById("campo-filtro").addEventListener("input", (e) => {
    const valorDigitado = e.target.value.toLowerCase();
    const resultado = document.getElementById("resultado");
    
    resultado.innerHTML = "";

    if (valorDigitado === "") {
        return; 
    }

    listaRacas
        .filter((raca) => raca.nome.toLowerCase().includes(valorDigitado)) 
        .forEach((raca) => {
            const li = document.createElement("li");
            // Mudamos o texto simples para uma estrutura HTML mais bonita
            li.innerHTML = `
                <span style="font-weight: 600; color: var(--cor-titulo);">🐾 ${raca.nome}</span>
                <span style="font-size: 0.9rem; color: var(--cor-texto); line-height: 1.4;">${raca.caracteristica}</span>
            `;
            resultado.appendChild(li);
        });
});