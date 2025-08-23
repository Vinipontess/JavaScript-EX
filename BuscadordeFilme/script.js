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
        const omdbUrl = `http://www.omdbapi.com/?apikey=3f8af78a&t=${nomeFilme}`;
        const omdbResponse = await fetch(omdbUrl);
        const movieData = await omdbResponse.json();

        if (omdbResponse.ok && movieData.Response === "True") {
            const plotEmIngles = movieData.Plot;
            const encodedPlot = encodeURIComponent(plotEmIngles);
            const translateUrl = `https://api.mymemory.translated.net/get?q=${encodedPlot}&langpair=en|pt`;
            const translateResponse = await fetch(translateUrl);
            const translateData = await translateResponse.json();

            movieData.Plot = translateData.responseData.translatedText;

            textoResultado.innerText = "";
            divResultado.innerHTML = `
            <div class="movie-card">
                <h2>${movieData.Title} (${movieData.Year})</h2>
                <img src="${movieData.Poster}" alt="Poster do filme: ${movieData.Title}">
                <p><strong>Gênero:</strong> ${movieData.Genre}</p>
                <p><strong>Sinopse:</strong> ${movieData.Plot}</p>
            </div>`;
            iptFilme.value = "";
        } else {
            textoResultado.innerText = "Filme não encontrado. Digite um filme válido.";
            iptFilme.value = "";
        }
    } catch (error) {
        console.error("Erro ao buscar dados do filme:", error);
        textoResultado.innerText = "Ocorreu um erro ao buscar os dados do filme. Verifique sua conexão ou tente novamente mais tarde.";
        divResultado.innerHTML = "";
    }
});
