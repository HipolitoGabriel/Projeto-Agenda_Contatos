import express from "express"

const app = express()
app.use(express.json())
const contatos = []

app.get("/contatos", (req, res) => {
    return res.json(contatos)
})

app.post("/contatos", (req, res) => {const dados = req.body; produtos.push(dados)
return res.json({message:"dados cadastrados"})})

app.delete("/contatos/:id", (req, res) => {const {id} = req.params; 
const index = produtos.findIndex(item => item.id == id)
return res.json({message:"removido com sucesso."})})

app.put("/contatos/:id", (req, res) => {const {id} = req.params; const dados = req.body
const produtos = produtos.find(item => item.id == id); contatos = dados;
return res.json({message:"atualizado"})})