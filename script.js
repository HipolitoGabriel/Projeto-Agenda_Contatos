const lista_contatos = []
const button = document.querySelector("#new_contact")
const popup = document.querySelector("#popup")
const buttonsend = document.querySelector("#buttonsend")
const teste = document.querySelector("#teste")
const dados = document.querySelector(".boxbody")
const limpar = document.querySelector("#limpar")
const botoes = document.querySelectorAll(".btnexcluir")
const tam = document.querySelector("#tam")

button.addEventListener("click", open_popup);
buttonsend.addEventListener("click", cadastrar)


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
                <button class="btnexcluir" data-indice="${indice}">Excluir</button>
            </div>
        </div>
        `;
        dados.innerHTML += linhaHTML;    
}

function open_popup() {
    popup.showModal()
}
const email = document.getElementById("email").value.trim()


function cadastrar(){
    const nome = document.getElementById("nome").value
    const tel = document.getElementById("tel").value
    const email = document.getElementById("email").value.trim()
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

function excluir(){
    
    lista_contatos.splice(teste.id)
}

function validarEmail(email) {
  return email.includes("@") && email.includes(".");
}
function validarNome(nome) {
  return nome.length >= 3;
}
