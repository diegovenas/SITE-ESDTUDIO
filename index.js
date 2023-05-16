import express from "express";
import * as path from "path";
import { fileURLToPath } from "url";

const app = express();
const __dirname = path.dirname(fileURLToPath(import.meta.url));
const PORT = 3000;

app.listen(PORT, () => {
  console.log(
    "\x1b[36m%s\x1b[0m",
    "Servidor rodando na porta " + PORT + " \u2714 \u2714"
  );
});

app.use("/meusite", express.static(path.join(__dirname, "client")));

app.get("/", (req, res) => {
  console.log(req);
  res.send({ nome: "diego", sobrenome: "venas" });
});

app.post("/", (req, res) => {
  res.send("<h1>POST</h1>");
});

app.put("/", (req, res) => {
  res.send("<h1>put</h1>");
});

app.delete("/", (req, res) => {
  res.send("<h1>delete</h1>");
});





















