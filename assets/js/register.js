let array = [];
function recoverDetails() {

    let details=localStorage.getItem("USERDETAIL");
    let detailstoArray=JSON.parse(details);


    if ( detailstoArray != null ) {
        array=detailstoArray;
}
}




function register(event) {
    event.preventDefault();

    const name = document.getElementById("name").value;
    const number = document.getElementById("phone").value;
    const username = document.getElementById("username").value;
    const email = document.getElementById("email").value;
    let password1 = document.getElementById("password").value;
    let password2 = document.getElementById("confirmpassword").value;
    let userDetails = {
        "Name":name,
        "Contact":number,
        "userName": username,
        "Email": email,
        "password": password1,
        "confirmpassword": password2,
    }

    if (password1 != password2) {
        alert("Password and Confirm Password does not match");
        return;
    }

    const isExist = isEmailALreadyExist(email);

    if (isExist) {
        alert("Email Id Already Registered");
        return;
    }

    let userexist = isUserExist(username);

    if (userexist) {
        alert("User Name Already registered");
        return;
    }


    array.push(userDetails);
    const accountdetails = JSON.stringify(array);
    localStorage.setItem("USERDETAIL",accountdetails);

    window.location.href="./../../pages/login.html";

}


function isUserExist(currentUser) {

    let userExist = false;

    const List = JSON.parse(localStorage.getItem("USERDETAIL"));
    if (List != null) {
        let len = List.length;
        for (let i = 0; i < len; i++) {
            const user=List[i].userName;
            if (currentUser == user){
                userExist = true;
                break;
            }
        }
    }
    return userExist;
}

function isEmailALreadyExist(currentEmail) {

    console.group("IsExist");

    let isExist = false;
    const userList = JSON.parse(localStorage.getItem("USERDETAIL"));
    if (userList != null) {
        let len = userList.length;
        for (let i = 0; i < len; i++) {
            const user = userList[i];
            const email = user.Email;
            if (currentEmail == email) {
                isExist = true;
                break;
            }
        }
    }
    console.log(isExist);
    console.groupEnd("IsExist");
    return isExist;
    
}

recoverDetails();