const express = require("express");
const server = express();

server.use(express.json());
server.listen(3000);

const projects = [];
let logRequest = 0;

// Criando Log das chamadas
server.use((req, res, next) => {
  console.log(
    `Numero da requisição: ${logRequest++}, método: ${req.method}, url: ${
      req.url
    }`
  );
  return next();
});

// Verificando a existencia do projetos
function checkProjectExisting(req, res, next) {
  if (!projects[req.params.id]) {
    return res.status(400).json({ error: "Project no exist" });
  }
  return next();
}

// Verificando id do projeto
function compareIdProject(id) {
  return projects.find(p => p.id === id);
}

// Pegando todos os projetos
server.get("/projects", (req, res) => {
  return res.json(projects);
});

// Incluindo projeto
server.post("/projects", (req, res) => {
  const { id, title } = req.body;
  const project = {
    id,
    title,
    task: []
  };
  projects.push(project);
  return res.json(project);
});

// Editando projeto
server.put("/projects/:id", checkProjectExisting, (req, res) => {
  const { id } = req.params;
  const { title } = req.body;
  const project = compareIdProject(id);
  project.title = title;
  return res.json(project);
});

// Deletando projeto
server.delete("/projects/:id", checkProjectExisting, (req, res) => {
  const { id } = req.params;
  const projectIndex = compareIdProject(id);
  projects.splice(projectIndex, 1);
  return res.send();
});

// Inserindo task no projeto
server.post("/projects/:id/task", checkProjectExisting, (req, res) => {
  const { id } = req.params;
  const { title } = req.body;
  const project = compareIdProject(id);
  project.task.push(title);
  return res.json(project);
});
