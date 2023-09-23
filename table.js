
fetch('./table.json')
.then(res=>res.json())
.then(data=>{
    let tbody=document.getElementById("tbody");
    let x="";
    data.forEach(element => { 
                x+=`<tr>
                      <td>${element.id}</td>
                      <td><img src="${element.img_src}"/>${element.first_name+" "+element.last_name}</td>
                      <td>${element.gender}</td>
                      <td>${element.class}</td>
                      <td>${element.marks}</td>
                      <td>${element.passing}</td>
                      <td>${element.email}</td>
                                          </tr>`; 
                     
    })
    tbody.innerHTML=x;
     
});