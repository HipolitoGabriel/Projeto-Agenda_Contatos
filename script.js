const lista_contatos = []
const button = document.querySelector("#new_contact")
const popup = document.querySelector("#popup")
const buttonsend = document.querySelector("#buttonsend")
const teste = document.querySelector("#teste")
const dados = document.querySelector(".boxbody")
const limpar = document.querySelector("#limpar")
const botoes = document.querySelectorAll(".btnexcluir")
const tam = document.querySelector("#tam")
const pesquisa = document.querySelector("#navbar")

button.addEventListener("click", open_popup);
buttonsend.addEventListener("click", verificar)

const tabelaBody = document.getElementById("corpoTabela"); 

function atualizarTabela(contato, indice) {
    
        const linhaHTML = `
       <div class="contact">
                <div class="container">
                <p>${indice}</p>
                <h2>${contato.nome}</h3>
                <ul>
                    <li>${contato.tel}</li>
                    <li>${contato.email}</li>
                    <li>${contato.descricao}</li>
                </ul>
            </div>
            <div class="seletores">
                <button id="btneditar">Editar</button>
                <button class="btnexcluir" data-id="${indice}">Excluir</button>
            </div>
        </div>
        `;
        dados.innerHTML += linhaHTML;    
}
function open_popup() {
    popup.showModal()
}
function validar_nome(nome) {
    return nome.length >= 3
}
function validar_email(email) {
    return email.includes("@") && email.includes(".")
}
function validar_num(tel) {
    return /^\(\d{2}\) \d{9}$/.test(tel);
}
function verificar(){
    const nome = document.getElementById("nome").value
    const tel = document.getElementById("tel").value
    const email = document.getElementById("email").value.trim()
    if (validar_nome(nome) === true && validar_email(email) === true && validar_num(tel) === true){
        cadastrar(nome, tel, email)
    } else {
        alert("erro no nome, tel ou email");
    }
}
function cadastrar(nome, tel, email){
    const novo = {
        nome,
        email,
        tel
    }
    const id = lista_contatos.length;
    lista_contatos.push(novo)
    atualizarTabela(novo, id)
    popup.close()
    tam.innerHTML = botoes.length
    document.getElementById("nome").value = "";
    document.getElementById("tel").value = "";
    document.getElementById("email").value = "";
}
pesquisa.addEventListener("input", pesquisar)
function pesquisar() {
    const foco = pesquisa.value.toLowerCase()
    dados.innerHTML = ""
    const filtadros = lista_contatos.filter((contato) => contato.nome.startsWith(foco))
        filtadros.forEach((contato, indice) => {
            const contato_filtadro = `
        <div class="contact">
            <div class="container">
                <h2>${contato.nome}</h3>
                <ul>
                    <li>${contato.tel}</li>
                    <li>${contato.email}</li>
                    <li>${contato.descricao}</li>
                </ul>
            </div>
            <div class="seletores">
                <button id="btneditar">Editar</button>
                <button class="btnexcluir" data-id="${indice}">Excluir</button>
            </div>
        </div>
        `;
        dados.innerHTML += contato_filtadro
        })
}
function editar() {
    
}