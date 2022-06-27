import equipmentHis from "../data/equipmentStateHistory.json" assert { type: "json" };

window.mostrarDados = function mostrarDados(a) {
  document.getElementById(
    "historico"
  ).innerHTML = `<h1 id="titulo" class="sumir">Histórico do estado do equipamento selecionado (Ultimos 10)</h1>
      <div id="aki"></div>
      <div id="center"><a href="index2.html"><button id="historicocompleto">Mostrar histórico completo</button></a></div>`;
  document.getElementById("historico").classList.remove("sumir");
  document.getElementById("titulo").classList.remove("sumir");

  var lenght = Object.keys(equipmentHis[a]["states"]).length;
  var lenght = parseInt(lenght);
  var lenght = lenght - 1;

  for (var i = lenght; i > lenght - 10; i--) {
    var datas = `${new Date(equipmentHis[a]["states"][i]["date"])}`;
    var equipState = equipmentHis[a]["states"][i]["equipmentStateId"];

    if (equipState == "0808344c-454b-4c36-89e8-d7687e692d57") {
      equipState = " Operando";
    }

    if (equipState == "baff9783-84e8-4e01-874b-6fd743b875ad") {
      equipState = " Parado";
    }

    if (equipState == "03b2d446-e3ba-4c82-8dc2-a5611fea6e1f") {
      equipState = " Manutençao";
    }

    let table = document.createElement("table");
    let row = table.insertRow();
    row.innerText = "Data:";
    let row2 = table.insertRow();
    row2.innerText = "Estado:";
    let cell = row.insertCell();
    cell.innerHTML = ` ${datas} `;
    let cell2 = row2.insertCell();
    cell2.innerHTML = ` ${equipState} `;
    var divAnterior = document.getElementById("aki");
    divAnterior.parentNode.insertBefore(table, divAnterior);
  }
};
