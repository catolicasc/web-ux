const express = require('express');
const app = express();
const PORTA = 3000;

app.use(express.json());

let alunos = [
  {
    matricula: "000",
    nome: "ACACIO MARTINS",
    data_nascimento: "12/12/1350",
    status: "Matriculado"
  }
];

app.get('/alunos', (req, res) => {
  res.json(alunos);
});

app.get('/alunos/:matricula', (req, res) => {
  const aluno = alunos.find(a => a.matricula === req.params.matricula);
  if (!aluno) return res.status(404).json({ erro: 'Aluno não encontrado' });
  res.json(aluno);
});

app.post('/alunos', (req, res) => {
  const novoAluno = req.body;
  const existe = alunos.some(a => a.matricula === novoAluno.matricula);
  if (existe) return res.status(400).json({ erro: 'Matrícula já existe' });

  alunos.push(novoAluno);
  res.status(201).json(novoAluno);
});

app.put('/alunos/:matricula', (req, res) => {
  const index = alunos.findIndex(a => a.matricula === req.params.matricula);
  if (index === -1) return res.status(404).json({ erro: 'Aluno não encontrado' });

  alunos[index] = { ...alunos[index], ...req.body };
  res.json(alunos[index]);
});

app.delete('/alunos/:matricula', (req, res) => {
  const index = alunos.findIndex(a => a.matricula === req.params.matricula);
  if (index === -1) return res.status(404).json({ erro: 'Aluno não encontrado' });

  const alunoRemovido = alunos.splice(index, 1);
  res.json({ mensagem: 'Aluno removido', aluno: alunoRemovido[0] });
});

app.listen(PORTA, () => {
  console.log('Servidor rodando em http://localhost:3000');
});
