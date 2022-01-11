let admission1= "";
let admissionList1 = JSON.parse(localStorage.getItem("TEACHERDETAIL"));

for(let i of admissionList1){
    let nameOfUser = i.Name;
    let ageOfUser  = i.Date;
    let mailOfUser = i.Email;
    let ContactOfUser = i.Contact;

    admission1 += 
    " <div class='Info' id=\"Info\">  <div class='table_2'><div class='result'><span class='name'>"+nameOfUser+ 
     "</span></div><div class='result_1'><span class='age'>"+ageOfUser+ 
     "</span></div><div class='result_2'><span class='mail'>"+mailOfUser+
      "</span></div><div class='result_3'><span class='phone'>"+ContactOfUser+
      " </span></div></div></div>"

}
let div = document.getElementById("List");
div.innerHTML = admission1;