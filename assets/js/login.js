function usercheck(event) {
    event.preventDefault();
    console.group("usercheck");

    const usena1 = document.getElementById("name").value;
    const paswd1 = document.getElementById("password").value;
    let userdetail = JSON.parse(localStorage.getItem("USERDETAIL"));
    let error = document.getElementById("error");
    let text;

    

    if (paswd1.length < 5){
        error.style.display = "block";
        text ="Username or Password invalid!";
        error.innerHTML = text;  
    }
    else {
        error.style.display = "none";
    }
    if (paswd1 == ""){
        error.style.display = "none" ;
    }


    if (userdetail == null) {
        error.style.display = "block";
        text = "Please signup and login";
        error.innerHTML = text;
        return null;
    }
    

    let userexist = false;

    for(let i of userdetail) {

        let user = i.useName;
        let password = i.password;

        if( user == usena1 && password == paswd1 ){
            userexist = true;
            localStorage.setItem("USERCHECK",usena1);
            
            togglepopup()
            
            console.log(usena1);
            console.log(userexist);
            break;
        }
        else {
            alert("Username or Password Invalid")
            return null;
        }
       

    }

    console.groupEnd("usercheck");

}

function showpassword() {
    let checkbox = document.getElementById("password");
    if (checkbox.type === "password") {
        checkbox.type = "text";
    }
    else{
        checkbox.type = "password"
    }
}

function togglepopup() {
    document.getElementById("popup_1").classList.toggle("active");
}