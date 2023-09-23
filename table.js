const tbody=document.getElementById("tbody");
const tr=document.createElement("tr");
fetch('./table.json')
.then(res=>res.json())
.then(data=>{
    data.forEach(element => { 
        tr.innerHTML=`<td>${element.id}</td>
                      <td>${element.first_name}</td>
                      <td>${element.gender}</td>
                      <td>${element.class}</td>
                      <td>${element.marks}</td>
                      <td>${element.passing}</td>
                      <td>${element.email}</td>`; 
                      tbody.appendChild(tr);
                      console.log(tbody);
    })
     
});