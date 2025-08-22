# Buscador de Filmes

## Descrição do Projeto

Este é um aplicativo web interativo desenvolvido com JavaScript puro que permite aos usuários buscar informações de filmes por título. O projeto demonstra o uso de requisições assíncronas para buscar dados de uma API externa e, em seguida, realiza uma segunda chamada a uma API de tradução para exibir a sinopse em português, independentemente do idioma original.

Foi construído como o projeto final da minha jornada de aprendizado como programador JavaScript, combinando manipulação do DOM, gestão de eventos e múltiplas chamadas de API.

## Funcionalidades

* **Busca de Filmes:** Pesquise filmes por título através de um campo de busca.
* **Tradução Automática:** A sinopse do filme é traduzida em tempo real para o português usando uma API de tradução.
* **Exibição Dinâmica:** A página atualiza em tempo real para exibir informações do filme, como título, ano, gênero, sinopse (em português) e pôster.
* **Tratamento de Erros:** Exibe mensagens claras caso o filme não seja encontrado ou ocorra uma falha na conexão.
* **Interface Intuitiva:** Design simples e responsivo, focado na experiência do usuário.

## Tecnologias Utilizadas

* **HTML5:** Para a estrutura semântica da página.
* **CSS3:** Para estilização e layout moderno do aplicativo.
* **JavaScript (ES6+):** Linguagem principal para a lógica de busca e interação.
    * **Async/Await:** Utilizado para gerenciar o fluxo de múltiplas requisições assíncronas de forma limpa e legível.
    * **Fetch API:** Para realizar a comunicação com a **OMDb API** (dados do filme) e com a **MyMemory API** (tradução).
    * **DOM Manipulation:** Para selecionar e atualizar dinamicamente os elementos da interface.

## Como Rodar o Projeto

**Você pode ver o site rodando acessando o gif dele com o nome BuscaFilmes.gif nesta mesma pasta, mas pra fazer ele rodar na sua máquina é só seguir os passos abaixo**

1.  **Clone o Repositório:**
    ```bash
    git clone [https://github.com/seu-usuario/seu-repositorio.git](https://github.com/seu-usuario/seu-repositorio.git)
    cd seu-repositorio
    ```
2.  **Abrir no Navegador:**
    * Abra o arquivo `index.html` em seu navegador web preferido.
**Caso a API já não esteja funcionando, ela é gratuita e você pode fazer o seguinte**
Passo extra.  **Configuração da API:**
    * Este projeto utiliza a [OMDb API](http://www.omdbapi.com/). Você precisará de uma chave de API gratuita.
    * Vá até o site da OMDb API e obtenha sua chave.
    * Abra o arquivo `script.js` e substitua a chave de API no código pela sua.


## O que coloquei em prárica

* **Construir uma interface do zero** e manipulá-la dinamicamente para exibir dados de forma assíncrona.
* **Orquestrar múltiplas chamadas de API** em cascata: buscar os dados do filme e, em seguida, usar esses dados para realizar uma segunda busca para traduzir a sinopse.
* **Lidar com eventos do usuário** para disparar ações complexas.
* **Trabalhar com código assíncrono** de forma profissional, usando `async/await` para buscar e processar dados de diferentes fontes.
* **Validar a entrada do usuário** e tratar diferentes tipos de respostas da API (sucesso, erro, não encontrado).
* **Organizar a lógica completa de uma aplicação**, desde a captura de dados até a exibição na tela.
