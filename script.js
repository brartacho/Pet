const imagens = [
    "./imagens/caes/cachorro-golden-retriever.webp",
    "./imagens/caes/caramelo.webp",
    "./imagens/caes/dachshund.png",
    "https://images.unsplash.com/photo-1543466835-00a7907e9de1?auto=format&fit=crop&w=500&q=80",
    "https://images.unsplash.com/photo-1517849845537-4d257902454a?auto=format&fit=crop&w=500&q=80",
    "https://images.unsplash.com/photo-1583511655857-d19b40a7a54e?auto=format&fit=crop&w=500&q=80"
];

const btnGaleria = document.getElementById("btn-galeria");
const galeriaContainer = document.getElementById("imagens-galeria");
let galeriaCarregada = false;

btnGaleria.addEventListener("click", () => {
    // 1. Se for o PRIMEIRO clique: carrega as imagens, exibe e ajusta o botão
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
        btnGaleria.style.backgroundColor = "#4b5563"; // Cor de "fechar"
        return; // Encerra a função aqui neste primeiro clique
    }

    // 2. Do SEGUNDO clique em diante: apenas alterna a classe CSS
    const estaOculto = galeriaContainer.classList.toggle("oculto");

    if (estaOculto) {
        btnGaleria.textContent = "Mostrar Galeria";
        btnGaleria.style.backgroundColor = "var(--cor-primaria)"; // Volta ao verde original
    } else {
        btnGaleria.textContent = "Ocultar Galeria";
        btnGaleria.style.backgroundColor = "#4b5563"; // Cor de "fechar"
    }
});

// Adicionando a animação de entrada
const style = document.createElement('style');
style.innerHTML = `
  @keyframes fadeIn {
    from { opacity: 0; transform: translateY(10px); }
    to { opacity: 1; transform: translateY(0); }
  }
`;
document.head.appendChild(style);


//pesquisa
//para criar listas usamos um array []

const listaRacas = [
    {
        nome: "Labrador",
        caracteristica: "protetor",
    },
    {
        nome: "Pastor Alemão",
        caracteristica:"corajoso"
    },
    {
        nome: "Yorkshire",
        caracteristica: "caçador",
    },
];

//capturando o input
// capturando o input que receberá o texto de busca
// função sem nome, mas com parâmetro, por isso (e), pois ele está esperando receber alguma informação, no caso, o texto da pesquisa/elemento que foi digitado
//input é o evento, o (e) é o elemento/texto que foi digitado no input
document.getElementById("campo-filtro").addEventListener("input", (e) => {
    const valor = e.target.value.toLowerCase();
    //capturando a ul do html
    //value é para pegar o que foi digitado no input. Target é o alvo;
    const resultado = document.getElementById("resultado");
    //informando ao html que ele iniciará vazio
    resultado.innerHTML = ""
    // listaRacas.filter()
    //metodos de string manipulam texto;
    //metodos de array
    //precisa estudar métodos de array e string
    
    //filtrando no array
    //o metodo de array filter ele recebe array.filter(()=>:{})
    //sempre que a arroy function for pquena, pode apagar {}
    //quando o filtro raca consegue acessar o array, ele acende (cor fica mais forte)
    //pega o array, olha dentro da propriedade se há algum nome incluido. Precisa retornar o valor da propriedade.

    //forEach: recebe uma função anonima
    listaRacas.filter((raca) => raca.nome.toLowerCase().includes(valor)).forEach((raca)=> {
        const li = document.createElement("li");
        li.textContent= `${raca.nome} - ${raca.caracteristica}`;
        resultado.appendChild(li);
    });
    
})

