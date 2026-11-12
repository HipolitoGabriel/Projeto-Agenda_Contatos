import express from "express"
import cors from "cors";

const app = express()
app.use(express.json())
app.use(cors())
let contatos = []

app.get("/contatos", (req, res) => {
    return res.json(contatos)
})

app.post("/contatos", (req, res) => {const dados = req.body; contatos.push(dados)
return res.json({message:"dados cadastrados"})})

app.delete("/contatos/:id", (req, res) => {const {id} = req.params; 
const index = contatos.findIndex(item => item.id == id)
contatos.splice(index, 1);
return res.json({message:"removido com sucesso."})})

app.put("/contatos/:id", (req, res) => {
const {id} = req.params; 
const dados = req.body
const contatos = contatos.find(item => item.id == id); contatos = dados;
return res.json({message:"atualizado"})})

app.listen(3000, () => {
  console.log("Servidor rodando em http://localhost:3000");
});