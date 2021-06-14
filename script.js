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
    name: "Tiago",
  },
  {
    id: "4",
    name: "Raj",
  },
  {
    id: "5",
    name: "Ram",
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
  rowBlock.classList.add("innerRow");
  rowBlock.innerHTML = `<div class="col">
    ${i + 1}
  </div>
  <div class="col">
  ${data[i].name}
  </div>
  <div class="col">
  <a href="https://theakshaycoder.github.io/attendence-form/?id=${
    data[i].id
  }ok" target="_blank">URL</a>
  </div>`;
  table.appendChild(rowBlock);
}

const searchByName = document.getElementById("searchByName");

function find() {
  // Declare variables
  var input, filter, a, i, txtValue;
  input = document.getElementById("searchByName");
  filter = input.value.toUpperCase();
  // ul = document.getElementById("myUL");
  var row = document.getElementsByClassName("innerRow");

  // Loop through all list items, and hide those who don't match the search query
  for (i = 0; i < data.length; i++) {
    a = row[i].getElementsByTagName("div")[1];
    txtValue = a.textContent || a.innerText;
    if (txtValue.toUpperCase().indexOf(filter) > -1) {
      // console.log("index of ", txtValue.toUpperCase().indexOf(filter));
      row[i].style.display = "";
    } else {
      // console.log("else index of ", txtValue.toUpperCase().indexOf(filter));
      row[i].style.display = "none";
    }
  }
}
