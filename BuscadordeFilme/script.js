let iptFilme = document.getElementById("iptFilme");
let btnBuscar = document.getElementById("btnBuscar");
let divResultado = document.getElementById("resultado");
let textoResultado = document.getElementById("textoResultado");

btnBuscar.addEventListener('click', async function() {
    const nomeFilme = iptFilme.value.trim();

    divResultado.innerHTML = "";
    textoResultado.innerText = "Buscando...";

    if (nomeFilme === "") {
        alert("Por favor, digite o nome de um filme.");
        textoResultado.innerText = "Nenhum filme analisado ainda.";
        return;
    }

    try {
        const urlAPI = `http://www.omdbapi.com/?apikey=3f8af78a&t=${nomeFilme}`;
        const resposta = await fetch(urlAPI);
        const dados = await resposta.json();

        if (dados.Response === "True") {
            textoResultado.innerText = "";
            divResultado.innerHTML = `
            <div class="movie-card">
                <h2>${dados.Title} (${dados.Year})</h2>
                <img src="${dados.Poster}" alt="Poster do filme: ${dados.Title}">
                <p><strong>Gênero:</strong> ${dados.Genre}</p>
                <p><strong>Sinopse:</strong> ${dados.Plot}</p>
            </div>`;
            iptFilme.value = ""; 
        } else {
            textoResultado.innerText = "Filme não encontrado. Digite um filme válido.";
        }
    } catch (error) {
        console.error("Erro ao buscar dados do filme:", error);
        textoResultado.innerText = "Ocorreu um erro ao buscar os dados do filme. Verifique sua conexão ou tente novamente mais tarde.";
        divResultado.innerHTML = "";
    }
});
