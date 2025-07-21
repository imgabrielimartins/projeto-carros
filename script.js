let listaDeCarros = [
    {
        "nome": "carro1",
        "img": "img/carro1.jpg",
        "descricao": "Descrição do carro 1"  
    },
    {
        "nome": "carro2",
        "img": "img/carro2.jpg",
        "descricao": "Descrição do carro 2"
    },
    {
        "nome": "carro3",
        "img": "img/carro3.jpg",
        "descricao": "Descrição do carro 3"
    },
    {
        "nome": "carro4",
        "img": "img/carro4.jpg",
        "descricao": "Descrição do carro 4"
    },
    {
        "nome": "carro5",
        "img": "img/carro5.jpg",
        "descricao": "Descrição do carro 5"
    },
    {
        "nome": "carro6",
        "img": "img/carro6.jpg",
        "descricao": "Descrição do carro 6"
    }
    
]

listaDeCarros.forEach((carro, posicao) => {
    let cardCarro = document.getElementById("cards");
    cardCarro.innerHTML += `
    <div class="col-md-4">
      <div class="card m-2 bg-light text-dark">
        <img src="${carro.img}" class="card-img-top" alt="${carro.nome}" style="height: 200px; object-fit: cover;">
        <div class="card-body">
          <h5 class="card-title">${carro.nome}</h5>
          <a href="#" class="btn btn-secondary" onClick="zoomImg(${posicao})"><i class="bi bi-zoom-in"></i></a>
        </div>
      </div>
    </div>
    `;
});

function zoomImg(posicao){
   let carroSelecionado = listaDeCarros[posicao];
   document.getElementById("nomeCarro").innerHTML = carroSelecionado.nome;
    document.getElementById("descricaoCarro").innerHTML = carroSelecionado.descricao;
    document.getElementById("imgModal").src = carroSelecionado.img;

    let modal = new bootstrap.Modal(document.getElementById('zoomImg'));
modal.show();

}

function alterarTemaSite() {
    let html = document.querySelector("html");
    let tema = html.getAttribute("data-bs-theme");
    let botao = document.getElementById("alterarTemaSite");
    let body = document.body;
    if (tema === "dark") {
        html.setAttribute("data-bs-theme", "light");
        botao.innerHTML = `<i class="bi bi-moon-fill"></i>`;
        body.classList.remove("text-light");
        body.classList.add("text-dark");
    } else {
        html.setAttribute("data-bs-theme", "dark");
        botao.innerHTML = `<i class="bi bi-brightness-high-fill"></i>`;
        body.classList.remove("text-dark");
        body.classList.add("text-light");
    }
}