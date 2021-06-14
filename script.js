var data = [
  {
    id: "313",
    name: "Ajay",
  },
  {
    id: "25",
    name: "Raj",
  },
  {
    id: "3",
    name: "Ajay",
  },
  {
    id: "4",
    name: "Raj",
  },
  {
    id: "5",
    name: "Ajay",
  },
  {
    id: "6",
    name: "Raj",
  },
  {
    id: "7",
    name: "Ajay",
  },
  {
    id: "8",
    name: "Raj",
  },
];

const table = document.getElementById("table1");
console.log(table);
for (i = 0; i < data.length; i++) {
  var rowBlock = document.createElement("div");
  rowBlock.classList.add("row");
  rowBlock.innerHTML = `<div class="col">
    ${i}
  </div>
  <div class="col">
  ${data[i].name}
  </div>
  <div class="col">
  <a href="https://theakshaycoder.github.io/attendence-form/?id=${data[i].id}ok" target="_blank">URL</a>
  </div>`;
  table.appendChild(rowBlock);
}
