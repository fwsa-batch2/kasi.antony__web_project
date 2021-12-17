let array = []
function recoverDetails() {
    console.group("recoverdetails");
    let details=localStorage.getItem("USERDETAIL");
    let detailstoArray=JSON.parse(details)


    if ( detailstoArray==null ) {
        array=[]
    }
    else {
        array=detailstoArray
    }
    console.table(details);
    console.groupEnd("recoverdetails");
}




function register() {
    event.preventDefault();
    console.group("Register");
    const name = document.getElementById("name").value;
    const dob = document.getElementById("dob").value;
    const address = document.getElementById("address").value;
    const age = document.getElementById("age").value;
    const username = document.getElementById("username").value;
    const email = document.getElementById("email").value;
    let password1 = document.getElementById("password").value;
    let password2 = document.getElementById("confirmpassword").value;
    let userDetails = {
        "Name":name,
        "DATE":dob,
        "Address":address,
        "Age":age,
        "userName": username,
        "Email": email,
        "createpassword": password1,
        "confirmpassword": password2,
    }

    
    if (password1 != password2) {
        alert("Password and Confirm Password does not match");
        return;
    }

    const isExist = isEmailALreadyExist(email);

    if (isExist == true) {
        alert("Email Id Already Registered");
        return;
    }

    array.push(userDetails);
    const accountdetails = JSON.stringify(array);
    localStorage.setItem("USERDETAIL",accountdetails);
    
    window.location.href="log in.html"

    console.table(userDetails);
    console.log(isExist);
    console.groupEnd("Register");

}
recoverDetails();

function isEmailALreadyExist(currentEmail) {

    console.group("IsExist");

    let isExist = false;
    const userList = JSON.parse(localStorage.getItem("USERDETAIL"));
    if (userList != null) {
        for (i = 0; i < userList.length; i++) {
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
