// Função para carregar o changelog
fetch('../db/projetos.json')
   .then(response => response.json())
   .then(data => {
      const changelogList = document.getElementById('changelog-list');

      data.forEach(item => {
         const changelogItem = document.createElement('div');
         changelogItem.classList.add('projetos-item');

         const itemContent = `
        <h3>${item.titulo}</h3>
        <p class="data"><strong>Data:</strong> ${item.data}</p>
        <p class="data"><strong>Versão:</strong> ${item.versao}</p>
        <p>${item.descricao}</p>
        <img src="${item.imagem}" alt="Imagem da atualização" />
        <a href="${item.link}" target="_blank" class="acessarprojeto">Acessar Projeto</a>
      `;

         changelogItem.innerHTML = itemContent;
         changelogList.appendChild(changelogItem);
      });
   })
   .catch(error => console.error('Erro ao carregar o changelog:', error));
