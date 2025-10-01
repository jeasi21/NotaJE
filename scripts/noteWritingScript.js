document.getElementById('form').addEventListener('submit', function(event) {
    event.preventDefault(); 
    salvarNota();
});

function salvarNota() {
    const title = document.getElementById('title').value;
    const subtitle = document.getElementById('subtitle').value;
    const note = document.getElementById('note').value;

    const novoRegistro = { title, subtitle, note };

    let registros = JSON.parse(localStorage.getItem('registros')) || [];

    registros.push(novoRegistro);

    localStorage.setItem('registros', JSON.stringify(registros));

    window.location.href = 'seeNotes.html';
}