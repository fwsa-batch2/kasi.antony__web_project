function usercheck(event) {

    event.preventDefault();
    let email = document.getElementById("name").value;
    let password = document.getElementById("password").value;
    let error = document.getElementById("error");
    let text;
    let isExist = false;

    let array = JSON.parse(localStorage.getItem("USERDETAIL"));

    if (array == null){
        alert("please signup and login");
        window.location.href="signup.html"
    }
    for (let i of array) {

        if (i.userName == email && i.password == password) {
            isExist = true;
            break;
        }
    }

    console.log(isExist)



    if (isExist) {
        localStorage.setItem("LoginDetails", email)
        togglepopup()

    }
    else {
        error.style.display = "block";
        text ="Username or Password invalid!";
        error.innerHTML = text; 
    }


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
