let amigos = [];

function agregarAmigo() {
  let nombre = document.getElementById("amigo").value;
  if (nombre === "") {
    alert("Por favor, inserte un nombre.");
  } else {
    amigos.push(nombre);
    console.log(amigos);
  }
  document.getElementById("amigo").value = "";
}

function mostrarAmigos() {
  let lista = document.getElementById("listaAmigos");
  lista.innerHTML = "";

  for (const amigo of amigos) {
    let li = document.createElement("li");
    li.textContent = amigo;
    lista.appendChild(li);
  }
}

function sortearAmigo() {
  if (amigos.length === 0) {
    alert("No hay amigos para sortear.");
  } else {
    let indice = Math.floor(Math.random() * amigos.length);
    let amigoSorteado = amigos[indice];
    document.getElementById("resultado").innerHTML = amigoSorteado;
  }
}
