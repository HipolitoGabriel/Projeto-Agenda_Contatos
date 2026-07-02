const lista_contatos = []
const button = document.querySelector("#new_contact")
const popup = document.querySelector("#popup")
const buttonsend = document.querySelector("#buttonsend")
const teste = document.querySelector("#teste")
const dados = document.querySelector(".boxbody")
const limpar = document.querySelector("#limpar")
const pesquisa = document.querySelector("#navbar")
const msg = document.querySelector("#text_error")
const cls_popup = document.querySelector("#cls_popup")

dados.addEventListener("click", excluir)
dados.addEventListener("click", editar)
button.addEventListener("click", open_popup);
buttonsend.addEventListener("click", verificar)
popup.addEventListener("keydown", (e) => {
    if(e.key === "Enter") {
        e.preventDefault()
        verificar() 
    }   
})
cls_popup.addEventListener("click", () => {
    popup.close()
}) 

function atualizarTabela(contato, indice) {
    
        const linhaHTML = `
        <div class="contact" data-id="${indice}">
            <div class="container">
                <h2>${contato.nome}</h3>
                <ul>
                    <li>${contato.tel}</li>
                    <li>${contato.email}</li>
                    <li>${contato.descricao}</li>
                </ul>
            </div>
            <div class="seletores">
                <button class="btneditar">Editar</button>
                <button class="btnexcluir">Excluir</button>
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
    return  /^\(\d{2}\) \d{9}$/.test(tel); 
}
function verificar() {
    const nome = document.getElementById("nome").value
    const tel = document.getElementById("tel").value
    const email = document.getElementById("email").value.trim()
    if (validar_nome(nome) === true && validar_email(email) === true && validar_num(tel) === true){
        cadastrar(nome, tel, email) 
    }
    if (validar_nome(nome) != true){
        alert("nome precisa ter no minimo 3 caracteres")
    }
    if (validar_num(tel) != true){
        alert("telefone precisa estar no formato (XX) XXXXX-XXXX")
    }
    if (validar_email(email) != true){
        alert("email precisa ter @ e .")
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
    document.getElementById("nome").value = "";
    document.getElementById("tel").value = "";
    document.getElementById("email").value = "";
}
pesquisa.addEventListener("input", pesquisar)
function pesquisar() {
    const foco = pesquisa.value.toLowerCase()
    dados.innerHTML = ""
    const filtadros = lista_contatos.filter((contato) => contato.nome.toLowerCase().startsWith(foco))
        filtadros.forEach((contato, indice) => {
            const contato_filtadro = `
        <div class="contact" data-id="${indice}">
                <div class="container">
                <h2>${contato.nome}</h3>
                <ul>
                    <li>${contato.tel}</li>
                    <li>${contato.email}</li>
                    <li>${contato.descricao}</li>
                </ul>
            </div>
            <div class="seletores">
                <button class="btneditar">Editar</button>
                <button class="btnexcluir">Excluir</button>
            </div>
        </div>
        `;
        dados.innerHTML += contato_filtadro
        })
}
const tam = document.querySelector("#tam")
function excluir(e) {
    const click = e.target
    if (click.classList.contains("btnexcluir")){
        const div_del = click.closest(".contact")
        const id = Number(div_del.dataset.id)
        div_del.remove()
        lista_contatos.splice(id, 1)
    }
}
































































































































function editar(e) {
    const nome = document.getElementById("nome")
    const tel = document.getElementById("tel")
    const email = document.getElementById("email")
    const click = e.target
    if (click.classList.contains("btneditar")){
        const id = Number(click.closest(".contact").dataset.id)
        card_contato = lista_contatos[id]
        popup.showModal()
            nome.value = card_contato.nome
            tel.value = card_contato.tel
            email.value = card_contato.email
            const novo_nome = document.getElementById("nome").value
            const novo_tel = document.getElementById("tel").value
            const novo_email = document.getElementById("email").value
            lista_contatos[id] = {
                nome: novo_nome,
                email: novo_email,
                tel: novo_tel
            }
        lista_contatos.forEach((contato) => {
            const contato_filtadro = `
        <div class="contact" data-id="${indice}">
                <div class="container">
                <h2>${contato.nome}</h3>
                <ul>
                    <li>${contato.tel}</li>
                    <li>${contato.email}</li>
                    <li>${contato.descricao}</li>
                </ul>
            </div>
            <div class="seletores">
                <button class="btneditar">Editar</button>
                <button class="btnexcluir">Excluir</button>
            </div>
        </div>
        `;
            dados.innerHTML += contato_filtadro
        })
    }
    
}