
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

    let registros = JSON.parse(localStorage.getItem('registros')) || [];

    registros.push(novoRegistro);

    localStorage.setItem('registros', JSON.stringify(registros));
}


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
            <button onclick="removerRegistro(${i})">Excluir</button>
        `;

        container.appendChild(card);
    });
}


function removerRegistro(index) {
    let registros = JSON.parse(localStorage.getItem('registros')) || [];
    registros.splice(index, 1);
    localStorage.setItem('registros', JSON.stringify(registros));
    gerarCards();
}


window.onload = gerarCards;



