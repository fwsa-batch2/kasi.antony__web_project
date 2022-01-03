function usercheck() {
    event.preventDefault();
    console.group("usercheck");

    const usena1 = document.getElementById("name").value;
    const paswd1 = document.getElementById("password").value;
    let userdetail = JSON.parse(localStorage.getItem("USERDETAIL"));
    let length = userdetail.length;

    let userexist = false;
    

    for(i=0 ; i<length ; i++) {

        
        
        let user=userdetail[i].userName;
        let password=userdetail[i].password;

        if(usena1 == user && paswd1 == password){
            userexist = true;
            localStorage.setItem("USERCHECK",usena1);
            alert("logged in successfully")
            
            window.location.href="Tailoring.html"
            console.log(usena1);
            console.log(userexist);
            break;
        }
        console.error(userexist);
    }

    if (userexist == false){
        alert("Username or Password Invalid")
        return null;
    }
   
    console.groupEnd("usercheck");

}