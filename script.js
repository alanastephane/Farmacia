let remedios = JSON.parse(localStorage.getItem('remedios')) || [];
let remedioParaEditar = null;
 
function renderizarLista() {
    const listaRemedios = document.getElementById('listaRemedios');
    listaRemedios.innerHTML = '';
 
    remedios.forEach((remedio, index) => {
        const itemLista = document.createElement('li');
        itemLista.textContent = `${remedio.nome}, ${remedio.fabricante}, ${remedio.indicacao}, ${remedio.utilizacao} `;
 
        const btnExcluir = document.createElement('button');
        btnExcluir.textContent = 'Excluir';
        btnExcluir.onclick = function(){
            excluirRemedio(index);
        };
       
        const btnEditar = document.createElement('button');
        btnEditar.textContent = 'Editar';
        btnEditar.onclick = function(){
            carregarParaEdicao(index);
        };
 
        itemLista.appendChild(btnExcluir);
        itemLista.appendChild(btnEditar);
        listaRemedios.appendChild(itemLista);
    });
}
 
function salvarRemedio(){
    const nome = document.getElementById('nome').value;
    const fabricante = document.getElementById('fabricante').value;
    const indicacao = document.getElementById('indicacao').value;
    const utilizacao = document.getElementById('utilizacao').value;
 
    if(remedioParaEditar !== null) {
        remedios[remedioParaEditar] = {nome, fabricante, indicacao, utilizacao};
        remedioParaEditar = null;
        document.getElementById('btnAtualizar').style.display = 'none';
    } else {
        remedios.push({nome, fabricante, indicacao, utilizacao});
    }
 
    localStorage.setItem('remedios', JSON.stringify(remedios));
 
    document.getElementById('nome').value = '';
    document.getElementById('fabricante').value = '';
    document.getElementById('indicacao').value = '';
    document.getElementById('utilizacao').value = '';
    renderizarLista();
}
 
function excluirRemedio(index) {
    remedios.splice(index, 1);
    localStorage.setItem('remedios', JSON.stringify(remedios));
    renderizarLista();
}
 
function carregarParaEdicao(index) {
    remedioParaEditar = index;
    document.getElementById('nome').value = remedios[index].nome;
    document.getElementById('fabricante').value = remedios[index].fabricante;
    document.getElementById('indicacao').value = remedios[index].indicacao;
    document.getElementById('utilizacao').value = remedios[index].utilizacao;
 
    document.getElementById('btnAtualizar').style.display = 'inline-block';
}
 
function atualizarRemedio() {
    const nome = document.getElementById('nome').value;
    const fabricante = document.getElementById('fabricante').value;
    const indicacao = document.getElementById('indicacao').value;
    const utilizacao = document.getElementById('utilizacao').value;
 
    remedios[remedioParaEditar] = {nome, fabricante, indicacao, utilizacao};
    localStorage.setItem('remedios', JSON.stringify(remedios));
 
    document.getElementById('nome').value = '';
    document.getElementById('fabricante').value = '';
    document.getElementById('indicacao').value = '';
    document.getElementById('utilizacao').value = '';
    document.getElementById('btnAtualizar').style.display = 'none';
 
    remedioParaEditar = null;
    renderizarLista();
}
 
    renderizarLista();