function usercheck(event) {
    event.preventDefault();
    console.group("usercheck");

    const usena1 = document.getElementById("name").value;
    const paswd1 = document.getElementById("password").value;
    let userdetail = JSON.parse(localStorage.getItem("USERDETAIL"));
    let len = userdetail.length;
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

    for(let i=0 ; i < len ; i++) {

        
        
        let user=userdetail[i].userName;
        let password=userdetail[i].password;

        if(usena1 == user && paswd1 == password){
            userexist = true;
            localStorage.setItem("USERCHECK",usena1);
            
            togglepopup()
            
            console.log(usena1);
            console.log(userexist);
            break;
        }
        console.error(userexist);

        if (userexist){
            alert("Username or Password Invalid")
            return null;
        }
       

    }

    console.groupEnd("usercheck");

}

function showpassword() {
    let checkbox = document.getElementById("checkbox");
    if (checkbox.checked) {
        document.getElementById("password").type = "text";
    }
    else{
        document.getElementById("password").type = "password"
    }
}

function togglepopup() {
    document.getElementById("popup_1").classList.toggle("active");
}