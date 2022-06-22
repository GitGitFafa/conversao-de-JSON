/*============INÍCIO DA SESSÃO DE OBJETOS==============*/
const objs = [
  {
    nome: "Raphael",
    idade: 35,
    esta_trabalhando: null,
    detalhes_profissão:{
    profissão: "Programador",
    empresa: "Empresa x"},
    hobbies: ["correr", "jogar", "conversar", "programar"]
    },
    {
      nome: "Thaís",
      idade: 30,
      esta_trabalhando: true,
      detalhes_profissão:{
        profissão: "Auxiliar Administrativa",
        empresa: "Empresa y"},
      
      hobbies: ["Séries", "Cozinhar", "conversar", "Malhar"]
      }
]
/*=========FIM DA SESSÃO DE OBJETOS========*/


//JSON
//Converter objeto para JSON

const jsonData = JSON.stringify(objs)
console.log( jsonData);

//converter json para objeto
const objData = JSON.parse(jsonData);
console.log( objData);


//comando map serve para mapear os dados do objeto. imprimi os nomes  (objetos)
objData.map((pessoa) => {
  console.log(pessoa.nome)
})
