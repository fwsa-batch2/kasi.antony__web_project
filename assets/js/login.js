function usercheck() {
    event.preventDefault();

    const usena1 = document.getElementById("name").value;
    const paswd1 = document.getElementById("password").value;
    let userdetail = JSON.parse(localStorage.getItem("USERDETAIL"));

    
    if (userdetail == null){
        alert("Invalid username or password")
        window.location.href="./../assets/pages/sign up.html"
        return null;
    }
    let length = userdetail.length;

    for(i=0 ; i<length ; i++){

        
        let userexist = false;
        let user=userdetail[i].userName;
        let password=userdetail[i].createpassword;

        if(usena1 == user && paswd1 == password){
            userexist = true;
            localStorage.setItem("USERCHECK",usena1);
            alert("logged in successfully")
            window.location.href="./../assets/pages/Tailoring.html"
            break;
        }
        else{
        alert("Username or password invalid")
        return null;
        }

    }

    

}