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

var totalUsers=0
const APIURL="https://besingularauto.herokuapp.com/getusers"

async function studentList(){
    const response=await fetch(APIURL)
    if(response){
      document.getElementById('loader').style.display='none'
    }
    const data = await response.json()
    const users = data.users
    console.log(users[0])

    
const table = document.getElementById("table1");
console.log(table);

for (i = 0; i < users.length; i++) 
{
  if(users[i].status=="active"){
  totalUsers++
  var rowBlock = document.createElement("div");
  rowBlock.classList.add("row");
  rowBlock.classList.add("innerRow");
  rowBlock.innerHTML = `
  <div class="col">
  ${i+1}
  </div>
  <div class="col">
  ${users[i].lms_id}
  </div>
  <div class="col">
  ${users[i].first_name}  ${users[i].last_name} 
  </div>
  <div class="col">
  <a href="https://theakshaycoder.github.io/attendence-form/?id=${
    users[i].lms_id
  }ok" target="_blank">URL</a>
  </div>`;
  table.appendChild(rowBlock);
}
}


}
studentList()
const searchByName = document.getElementById("searchByName");

function find() {
  // Declare variables
  var input, filter, a, i, txtValue;
  input = document.getElementById("searchByName");
  filter = input.value.toUpperCase();
  // ul = document.getElementById("myUL");
  var row = document.getElementsByClassName("innerRow");

  console.log(totalUsers)
  
  // Loop through all list items, and hide those who don't match the search query
  for (i = 0; i < totalUsers; i++) {
    a = row[i].getElementsByTagName("div")[2];
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
