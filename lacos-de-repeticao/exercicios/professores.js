// Crie um array chamado professores com os nomes de três professores.
// Depois, crie um array chamado disciplinas com três disciplinas correspondentes aos professores.
// Faça uma função exibeProfessorEDisciplina que, dado o nome de um professor, exiba qual disciplina ele ensina.

const professores = ["Vitor", "Hércules", "Thor"];
const disciplinas = ["Inteligência Artificial", "Java", "PHP"];

const lista = [professores, disciplinas];

function exibeProfessorEDisciplina(professor) {
  if (lista[0].includes(professor)) {
    const indice = lista[0].indexOf(professor)
    const disciplina = lista[1][indice]
    console.log(`O professor ${professor} é da matéria ${disciplina}!`);
  } else {
    console.log("O professor informado não é de nenhuma disciplina.");
  }
}

exibeProfessorEDisciplina("Hércules");
