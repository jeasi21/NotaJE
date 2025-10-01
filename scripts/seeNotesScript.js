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

function removerRegistro(index) {
    if (confirm("Tem certeza de que deseja excluir esta nota?")) {
        let registros = JSON.parse(localStorage.getItem('registros')) || [];
        registros.splice(index, 1);
        localStorage.setItem('registros', JSON.stringify(registros));
        gerarCards();
    }
}

window.onload = gerarCards;
