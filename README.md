# Galeria-de-Fotos
    Este é um projeto simples de galeria de fotos que utiliza a API do Unsplash para buscar e exibir imagens de acordo com a pesquisa do usuário. 
    A interface é interativa e utiliza um campo de pesquisa em tempo real para filtrar as imagens.
  

Funcionalidades

    Pesquisa em tempo real: Ao digitar no campo de pesquisa, as imagens são filtradas e exibidas automaticamente.
    Exibição das fotos: As imagens são exibidas em um formato de grid e exibem o título relacionado à imagem.
    Efeito visual: Ao passar o mouse sobre as imagens, um efeito de aumento de escala e sombra é aplicado, melhorando a interatividade.
    Mensagem caso nenhuma foto seja encontrada: Se nenhuma imagem corresponder à pesquisa, uma mensagem informando isso será exibida.

  
Como Usar

    Clone o repositório:
    Se ainda não tem o projeto em sua máquina.
    Navegue até a pasta do projeto e copie no editor de sua preferência.
  
    Configuração da API:
    Para que a busca funcione corretamente, você precisa de uma chave de acesso (API Key) válida do Unsplash.
    Crie uma conta no Unsplash e vá para Unsplash Developers para gerar uma chave de acesso.
    No arquivo script.js, substitua ACCESS_KEY e ACCESS_KEY2 pelas suas chaves de acesso.
    
    Abra o arquivo HTML:
    Você pode abrir diretamente o arquivo index.html em seu navegador ou configurar um servidor local para testar.
    Caso queira abrir diretamente, basta clicar duas vezes no arquivo index.html e o site será carregado no seu navegador.
    
    Pesquisa de Imagens:
    Digite no campo de pesquisa o que você deseja procurar (ex: "natureza", "animais", "paisagens") e veja as imagens sendo carregadas conforme o seu critério.


Tecnologias Utilizadas

    HTML5: Estrutura básica do site.
    CSS3: Estilização da página e efeitos visuais.
    JavaScript (ES6): Funções interativas e comunicação com a API do Unsplash.
    API do Unsplash: Para busca de imagens e informações.

  
Como Funciona

    O usuário digita no campo de pesquisa e a função chamarApi é chamada, realizando uma busca na API do Unsplash com a palavra-chave digitada.
    O JavaScript manipula o DOM para exibir as imagens em um formato de grid.
    Caso o usuário digite algo que não tenha correspondência na API, uma mensagem "Nenhuma foto encontrada" será exibida.
    As imagens exibem um efeito de aumento de escala quando o mouse é passado sobre elas.
    Antes de pesquisar: O campo de pesquisa estará vazio e as imagens padrão não aparecerão.
    Após digitar "natureza": A galeria será preenchida com imagens relacionadas à natureza.

Observações

    Existem duas ACCESS_KEY pois havia limitação de uso diario.
