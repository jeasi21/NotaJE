function exportarNotas() {
    const tituloParaExportar = document.getElementById('noteTitleExport').value;

    if (!tituloParaExportar) {
        alert("Por favor, digite um título no campo ao lado do botão 'Exportar'.");
        return;
    }

    const todosRegistros = JSON.parse(localStorage.getItem('registros') || '[]');

    const notasFiltradas = todosRegistros.filter(
        nota => nota.title.toLowerCase() === tituloParaExportar.toLowerCase()
    );

    if (notasFiltradas.length === 0) {
        alert(`Nenhuma nota encontrada com o título "${tituloParaExportar}".`);
        return;
    }

    const dadosParaExportar = JSON.stringify(notasFiltradas, null, 2);

    const blob = new Blob([dadosParaExportar], { type: 'application/json;charset=utf-8' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `notas_${tituloParaExportar.replace(/\s+/g, '_')}.json`;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
    alert(`${notasFiltradas.length} nota(s) com o título "${tituloParaExportar}" foram exportadas com sucesso!`);
}

function importarNotas() {
    const input = document.getElementById('importFile');
    input.click();
}

function carregarArquivo(event) {
    const file = event.target.files[0];
    if (!file) {
        return;
    }

    const reader = new FileReader();
    reader.onload = function(e) {
        const content = e.target.result;
        try {
            const notasImportadas = JSON.parse(content);

            if (!Array.isArray(notasImportadas)) {
                throw new Error("O arquivo não contém uma lista de notas válida.");
            }

            const saoNotasValidas = notasImportadas.every(nota => 'title' in nota && 'subtitle' in nota && 'note' in nota);
            if (!saoNotasValidas) {
                throw new Error("Algumas notas no arquivo não têm o formato esperado (título, subtítulo, nota).");
            }

            let registrosAtuais = JSON.parse(localStorage.getItem('registros')) || [];
            const registrosConcatenados = registrosAtuais.concat(notasImportadas);
            localStorage.setItem('registros', JSON.stringify(registrosConcatenados));
            
            alert(`${notasImportadas.length} nota(s) importada(s) com sucesso!`);
            window.location.href = 'seeNotes.html';
        } catch (error) {
            console.error("Erro ao importar notas:", error);
            alert(`Falha ao importar notas. Verifique se o arquivo está no formato correto. Detalhe: ${error.message}`);
        }
    };
    reader.readAsText(file);

    event.target.value = '';
}
