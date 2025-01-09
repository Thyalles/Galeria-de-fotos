const ACCESS_KEY = 'F_3PWk-ukC25aLzCrcqcCLm9SVngWZwkoAbuDHGGgJ0';
const ACCESS_KEY2 = 'dXMF6fCNVYs39-VD97zijZChjIvMdayCQg6WAflzMcw';
const API = 'https://api.unsplash.com/search/photos';

async function chamarApi() {

  const query = document.getElementById('key').value;
  const url = `${API}?query=${encodeURIComponent(query)}&client_id=${ACCESS_KEY2}&per_page=12`;

  console.log(query)

  fetch(url)
    .then(response => response.json())
    .then(imagens => {

      const container = document.querySelector("#container")
      container.innerHTML = '';

      console.log(imagens)

      if (imagens.results.length === 0) {
        const mensagem = document.createElement("p");
        mensagem.textContent = "Nenhuma foto encontrada.";
        container.appendChild(mensagem);
      } else {

        for (let i = 0; i < 10; i++) {
          const card = document.createElement("div")
          card.classList.add("card")

          const img = document.createElement("img")
          img.src = imagens.results[i].urls.small
          img.alt = imagens.results[i].alternative_slugs.pt.split('-').slice(0, -1).join(' ')

          const titulo = document.createElement("h3")
          titulo.textContent = imagens.results[i].alternative_slugs.pt.split('-').slice(0, -1).join(' ')

          card.appendChild(img)
          card.appendChild(titulo)
          container.appendChild(card)

        }
      }
    })
    .catch(error => {
      console.error('Erro ao buscar as imagens:', error);
    });

}


chamarApi();