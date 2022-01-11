let admission= "";
let admissionList = JSON.parse(localStorage.getItem("TEACHERDETAIL"));

for(let i of admissionList){
    let nameOfUser = i.Name;
    
    
    admission += 
    " <div class='admissionInfo' id=\"admissionInfo\"><p> Welcome, <span class='place'> " +nameOfUser+  
    "</span></p><p>  We are looking into your Profile.We will come back to you soon.</p></div>"
}
let div = document.getElementById("admissionList");
div.innerHTML = admission;