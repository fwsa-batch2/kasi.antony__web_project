let array = []
function recoverDetails() {

    let details=localStorage.getItem("USERDETAIL");
    let detailstoArray=JSON.parse(details)


    if ( detailstoArray==null ) {
        array=[]
    }
    else {
        array=detailstoArray
    }

}




function register() {
    event.preventDefault();

    const username = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    let password1 = document.getElementById("password").value;
    let password2 = document.getElementById("confirmpassword").value;
    let userDetails = {
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
 


}
recoverDetails();

function isEmailALreadyExist(currentEmail) {
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
    return isExist;
}
