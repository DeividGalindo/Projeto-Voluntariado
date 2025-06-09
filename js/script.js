// Aguarda o DOM ser completamente carregado para executar o script
document.addEventListener('DOMContentLoaded', () => {
    
    // Parte do formulário de cadastro (só executa se o formulário existir na página)
    const form = document.getElementById('form-necessidade');
    if (form) {
        const cepInput = document.getElementById('cep');
        
        // Adiciona um evento que é acionado quando o campo CEP perde o foco
        cepInput.addEventListener('blur', () => {
            const cep = cepInput.value.replace(/\D/g, ''); // Remove caracteres não numéricos
            if (cep.length === 8) {
                consultarCEP(cep);
            }
        });

        // Adiciona um evento para a submissão do formulário
        form.addEventListener('submit', (event) => {
            event.preventDefault(); // Impede o recarregamento da página
            cadastrarNecessidade();
        });
    }
});

/**
 * Função para consultar o CEP na API ViaCEP.
 * Adicionar comentários explicativos em trechos complexos do código.
 */
function consultarCEP(cep) {
    const url = `https://viacep.com.br/ws/${cep}/json/`;

    fetch(url)
        .then(response => response.json())
        .then(data => {
            if (!data.erro) {
                // Preenche os campos de endereço automaticamente 
                document.getElementById('rua').value = data.logradouro;
                document.getElementById('bairro').value = data.bairro;
                document.getElementById('cidade').value = data.localidade;
                document.getElementById('estado').value = data.uf;
            } else {
                alert('CEP não encontrado.');
            }
        })
        .catch(error => console.error('Erro ao consultar CEP:', error));
}

/**
 * Função para cadastrar a necessidade.
 */
function cadastrarNecessidade() {
    // Validação de formulário 
    const nomeInstituicao = document.getElementById('nomeInstituicao').value;
    const tipoAjuda = document.getElementById('tipoAjuda').value;
    const titulo = document.getElementById('titulo').value;
    const descricao = document.getElementById('descricao').value;
    const cep = document.getElementById('cep').value;
    const contato = document.getElementById('contato').value;

    if (!nomeInstituicao || !tipoAjuda || !titulo || !descricao || !cep || !contato) {
        alert('Por favor, preencha todos os campos obrigatórios (*).');
        return; // Interrompe a função se a validação falhar
    }

    // Cria um objeto com os dados da necessidade
    const necessidade = {
        id: Date.now(), // ID único baseado no tempo atual
        nomeInstituicao,
        tipoAjuda,
        titulo,
        descricao,
        cep,
        rua: document.getElementById('rua').value,
        bairro: document.getElementById('bairro').value,
        cidade: document.getElementById('cidade').value,
        estado: document.getElementById('estado').value,
        contato
    };

    // Armazenamento de Dados 
    // Recupera as necessidades existentes do localStorage ou cria um array vazio
    const necessidades = JSON.parse(localStorage.getItem('necessidades')) || [];
    necessidades.push(necessidade);
    // Salva o array atualizado de volta no localStorage
    localStorage.setItem('necessidades', JSON.stringify(necessidades));

    alert('Necessidade cadastrada com sucesso!');
    document.getElementById('form-necessidade').reset(); // Limpa o formulário
}

// Parte da visualização de necessidades (só executa se o container de cards existir)
document.addEventListener('DOMContentLoaded', () => {
    const cardsContainer = document.getElementById('cards-container');
    if (cardsContainer) {
        carregarNecessidades();
    }
    // ... (restante do código do DOMContentLoaded)
});

/**
 * Carrega as necessidades do localStorage e as exibe na tela.
 */
function carregarNecessidades() {
    const necessidades = JSON.parse(localStorage.getItem('necessidades')) || [];
    const cardsContainer = document.getElementById('cards-container');
    
    cardsContainer.innerHTML = ''; // Limpa a área antes de adicionar os cards

    if (necessidades.length === 0) {
        cardsContainer.innerHTML = '<p>Nenhuma necessidade cadastrada no momento.</p>';
        return;
    }

    necessidades.forEach(necessidade => {
        // Apresentar cada necessidade em um "card" ou bloco visualmente distinto 
        const card = document.createElement('div');
        card.className = 'card';
        card.innerHTML = `
            <h3>${necessidade.titulo}</h3>
            <p><strong>Instituição:</strong> ${necessidade.nomeInstituicao}</p>
            <p><span class="tipo-ajuda">${necessidade.tipoAjuda}</span></p>
            <p><strong>Descrição:</strong> ${necessidade.descricao}</p>
            <p><strong>Local:</strong> ${necessidade.cidade} - ${necessidade.estado}</p>
        `;
        cardsContainer.appendChild(card);
    });
}