
/*
const params = new URLSearchParams(window.location.search);

const title = params.get('title');
const subtitle = params.get('subtitle');
const note = params.get('note');



if(title){
    const container = document.getElementById('container');
    const card = document.createElement('div');
    card.classList.add('card');
    
    card.innerHTML = `<h2>${notaCompleta.title}</h2> <h3>${notaCompleta.subtitle}</h3> <p>${notaCompleta.note}</p>`;

    container.appendChild(card);

}*/


const params = new URLSearchParams(window.location.search);

const title = params.get('title');
const subtitle = params.get('subtitle');
const note = params.get('note');


if (title) {
    const novoRegistro = { title, subtitle, note };

    // pega lista existente no localStorage
    let registros = JSON.parse(localStorage.getItem('registros')) || [];

    // adiciona o novo
    registros.push(novoRegistro);

    // salva de volta
    localStorage.setItem('registros', JSON.stringify(registros));
}

// função que gera os cards
function gerarCards() {
    const container = document.getElementById('container');
    container.innerHTML = ""; 

    let registros = JSON.parse(localStorage.getItem('registros')) || [];

    registros.forEach((r, i) => {
        const card = document.createElement('div');
        card.classList.add('card');
        
        card.innerHTML = `
            <h2>${r.title}</h2>
            <h3>${r.subtitle}</h3>
            <p>${r.note}</p>
        `;

        const deleteButton = document.createElement('button');
        deleteButton.textContent = 'Excluir';
        deleteButton.addEventListener('click', () => removerRegistro(i));

        card.appendChild(deleteButton);
        container.appendChild(card);
    });
}

// função para excluir um card
function removerRegistro(index) {
    if (confirm("Tem certeza de que deseja excluir esta nota?")) {
        let registros = JSON.parse(localStorage.getItem('registros')) || [];
        registros.splice(index, 1);
        localStorage.setItem('registros', JSON.stringify(registros));
        gerarCards();
    }
}

// monta os cards quando a página carregar
window.onload = gerarCards;
