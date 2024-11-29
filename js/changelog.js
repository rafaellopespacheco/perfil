// Função para carregar o changelog
fetch('../db/changelog.json')
   .then(response => response.json())
   .then(data => {
      const changelogList = document.getElementById('changelog-list');

      data.forEach(item => {
         const changelogItem = document.createElement('div');
         changelogItem.classList.add('changelog-item');

         const itemContent = `
        <h3>${item.titulo}</h3>
        <p class="data"><strong>Data:</strong> ${item.data}</p>
        <p>${item.descricao}</p>
        <img src="${item.imagem}" alt="Imagem da atualização" />
      `;

         changelogItem.innerHTML = itemContent;
         changelogList.appendChild(changelogItem);
      });
   })
   .catch(error => console.error('Erro ao carregar o changelog:', error));
