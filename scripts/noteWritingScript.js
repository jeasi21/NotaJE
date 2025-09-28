

  
/*
    function generateCard(){
      const card = document.createElement("div");
      card.classList.add("card");
      
      const titulo = document.createElement("h2");
      
      titulo.textContent = document.getElementById("title").value;
       
      
      const subtitulo = document.createElement("h3");
   
      subtitulo.textContent = document.getElementById("subtitle").value;
      
    
      const conteudo = document.createElement("p");
      
      conteudo.textContent = document.getElementById("note").value;

     //
      document.getElementById("titulo").value = '';
      document.getElementById("subtitulo").value ='';
      document.getElementById("notaText").value = '';
    
      // monta o card:
      card.appendChild(titulo);
      card.appendChild(subtitulo);
      card.appendChild(conteudo);

      // adiciona o card ao container
      container.appendChild(card);
    }
*/
    const botao = document.getElementById("novo");

    const container = document.getElementById("container");

    botao.addEventListener("click", () => {
      
      const card = document.createElement("div");
      card.classList.add("card");
      
      const titulo = document.createElement("h2");
      
      titulo.textContent = document.getElementById("title").value;
       
      
      const subtitulo = document.createElement("h3");
   
      subtitulo.textContent = document.getElementById("subtitle").value;
      
    
      const conteudo = document.createElement("p");
      
      conteudo.textContent = document.getElementById("note").value;

    
      document.getElementById("titulo").value = '';
      document.getElementById("subtitulo").value ='';
      document.getElementById("notaText").value = '';
    
    
      card.appendChild(titulo);
      card.appendChild(subtitulo);
      card.appendChild(conteudo);

     
      container.appendChild(card);
    });

    function teste(){
        console.log("Elemento criado");
    }