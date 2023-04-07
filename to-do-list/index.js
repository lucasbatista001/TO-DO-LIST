function addItem() {

    // Obter o valor do campo de entrada
    var item = document.getElementById("item").value;

    // Verificar se o campo de entrada está vazio
    if (item === "") {
         alert("Por favor, insira um item.");
         return;
    }

    // Criar um novo elemento de lista
    var li = document.createElement("li");

    // Adicionar o texto do item ao elemento de lista
    li.appendChild(document.createTextNode(item));

    // Adicionar botões de edição e exclusão ao elemento de lista
    // Botão Editar
    var editButton = document.createElement("button");
    editButton.innerHTML = "Editar"; 
    editButton.onclick = function() {
        editItem(this);
    };
    li.appendChild(editButton);

    // Botão Excluir
    var deleteButton = document.createElement("button");
    deleteButton.innerHTML = "Excluir";
    deleteButton.onclick = function() {
        deleteItem(this);
    };
    li.appendChild(deleteButton);

    // Adicionar o elemento de lista à lista
    document.getElementById("lista").appendChild(li);

    // Limpar o campo de entrada
    document.getElementById("item").value = "";

    // Obter todos os itens da lista
    var items = document.querySelectorAll("#lista li");

    // Criar um array vazio para armazenar os textos dos itens
    var itemTexts = [];

    // Adicionar cada texto de item ao array
    for (var i = 0; i < items.length; i++) {
        itemTexts.push(items[i].childNodes[0].nodeValue);
    }

    // Armazenar o array de textos de itens no localStorage
    localStorage.setItem("items", JSON.stringify(itemTexts));

}

// Obter o array de textos de itens do localStorage
var itemTexts = JSON.parse(localStorage.getItem("items")) || [];

// Adicionar cada texto de item como um novo elemento de lista
for (var i = 0; i < itemTexts.length; i++) {
    var li = document.createElement("li");
    li.appendChild(document.createTextNode(itemTexts[i]));
    
    //Para cada item da lista, o código cria um botão "Editar"
    var editButton = document.createElement("button");
    editButton.innerHTML = "Editar";
    editButton.onclick = function() {
        editItem(this);
    };
    li.appendChild(editButton);

    //Para cada item da lista, o código cria um botão "Excluir"
    var deleteButton = document.createElement("button");
    deleteButton.innerHTML = "Excluir";
    deleteButton.onclick = function() {
        deleteItem(this);
    };
    li.appendChild(deleteButton);

    //Adiciona o elemento <li> em elementos filhos
    document.getElementById("lista").appendChild(li);
}

//Função de EDITAR o elemento pai do botão clicado 
function editItem(button) {
    var li = button.parentNode;
    var itemText = li.childNodes[0];

    //Obtém o texto do item e abre uma caixa de diálogo prompt para permitir que o usuário edite o texto.
    var newItem = prompt("Editar item:", itemText.nodeValue);
    if (newItem !== null) {
        itemText.nodeValue = newItem;
    }
}

//Função de EXCLUIR o elemento pai do botão clicado 
function deleteItem(button) {
    var li = button.parentNode;
    var ul = li.parentNode;

    //Remove o elemento da lista
    ul.removeChild(li);
}
