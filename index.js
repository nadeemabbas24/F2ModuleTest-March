  var data = [];

loadData();

function displayData(data){
    // localStorage.clear();
    let table = document.getElementById("table");
    table.innerHTML=`<tr>
    <th>ID</th>
    <th>Student Name</th>
    <th>Email</th>
    <th>Age</th>
    <th>GPA</th>
    <th>Degree</th></tr>`;
   // if(data)
    data.map((obj)=>{
        const tr = document.createElement("tr");        
        for (const value in obj) {
            // console.log(obj[value]);
            const td = document.createElement("td");
            td.innerHTML = obj[value];
            tr.appendChild(td);
            table.appendChild(tr);
          }
    })
}

function addData(data){
    let id = 0;
    if(data==null)    
      { data=[]; 
        id = 1;}
      else 
      id = data.length +1;
    let name = document.getElementById("name").value;
    let email = document.getElementById("email").value;
    let age = document.getElementById("age").value;
    let gpa = document.getElementById("gpa").value;
    let degree = document.getElementById("degree").value+"<span> <img  id='edit'src='edit.png'></span>"+
    "<span > <img src='delete.png' id='delete'></span>";

    let obj = {id:id,name:name,email:email,age:age,gpa:gpa,degree:degree};
    data.push(obj);  
    saveData(data);
    // loadData();
    location.reload();
    
}

function saveData(data){
    localStorage.setItem("data", JSON.stringify(data));
}

function loadData(){        
         data = JSON.parse(localStorage.getItem("data"));
         if(data)
          displayData(data);     
}

function updateData(){}

function deleteData(id){
   data =  data.filter((item)=>{
            return item.id != id;
    })
   saveData(data);
//    displayData();
}

function searchData(item){
    console.log(data);

  data = data.filter((obj)=>{
    return obj.name == item;
  })
  console.log(data);
  displayData(data);

//   location.reload();
}

document.getElementById("find").addEventListener("change",(e)=>{
    let item = document.getElementById("find").value;
    searchData(item);
})

document.getElementById("btn").addEventListener("click", (e)=>{
    // alert("hello");
    e.preventDefault();
    addData(data);
    // displayData();
})

document.getElementById("delete").addEventListener("click",(e)=>{
   
    let id = (e.target.parentNode.parentNode.parentNode.cells[0].innerHTML);
    alert("Are you sure to delete student with ID"+id);
    deleteData(id);
    location.reload();
})