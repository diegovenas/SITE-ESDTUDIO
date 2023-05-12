import express from "express";
import * as path from "path";
import { fileURLToPath } from "url";    


const app = express();
const __dirname = path.dirname(fileURLToPath(import.meta.url));
const PORT = 3000;

app.listen(PORT, () => {
  console.log('\x1b[36m%s\x1b[0m', 'Servidor rodando na porta ' + PORT + " \u2714 \u2714");
});

app.use("/rota1", express.static(path.join(__dirname, "client")));



app.get("/get", (req, res) => {
  res.send({nome: "diefgo",
sobrenome:  "venas"});
})






















// function openModal() {
//   document.querySelector(".modal").style.display = "flex";
//   // console.log('ooi')
// }
// function closeModal() {
//   document.querySelector(".modal").style.display = "none";
//   // console.log('ooi')
// }
