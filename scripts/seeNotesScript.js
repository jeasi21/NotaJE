

const params = new URLSearchParams(window.location.search);

const title = params.get('title');
const subtitle = params.get('subtitle');
const note = params.get('note');

if(title){
    const container = document.getElementById('container');
    const card = document.createElement('div');
    card.classList.add('card');
    
    card.innerHTML = '<h2>'+title+'</h2> <h3>'+subtitle +'</h3> <pre>'+note+'</pre>';

    container.appendChild(card);

}
