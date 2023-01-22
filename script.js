const form = document.querySelector("form")
const nlwSetup = new NLWSetup(form)
const button = document.querySelector("header button")

// Vai ouvir a ação e vai executar quando for realizada a ação
button.addEventListener("click", add) // Clique no botão
form.addEventListener("change", save) // Salvar formulário
// Quando tiver alteração no formulário vai rodar o evento

function add() {
  const today = new Date().toLocaleDateString("pt-br").slice(0, -5)
  // Testado no console do navegador

  const dayExists = nlwSetup.dayExists(today)

  if (dayExists) {
    alert("Dia já incluso ⚠️")
    return // Para de executar o código
  }

  alert("Adicionado com sucesso ✅")
  nlwSetup.addDay(today)
}

function save() {
  //Guardar o valor em string no navegador local
  localStorage.setItem("NLWSetupStorage", JSON.stringify(nlwSetup.data))
}

/* const data = {
  run: ["01-01", "02-01", "03-01"],
  journal: ["02-01", "04-01"],
  takePills: ["03-01", "05-01"],
}
 */

// Primeira vez, ele vai receber um objetivo vazio para não ocorrer erro
const data = JSON.parse(localStorage.getItem("NLWSetupStorage")) || {}
nlwSetup.setData(data)
nlwSetup.load()
