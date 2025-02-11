const url = 'https://jsonplaceholder.typicode.com/posts/1';

fetch(url)
    .then(response => {
        if (!response.ok) {
            throw new Error('Erro na requisição: ' + response.statusText);
        }
        return response.json();
    })
    .then(data => {
        document.getElementById('conteudo').innerText = JSON.stringify(data, null, 2);
    })
    .catch(error => {
        console.error('Erro:', error);
        document.getElementById('conteudo').innerText = 'Erro ao carregar os dados.';
    });