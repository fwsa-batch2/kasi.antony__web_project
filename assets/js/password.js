let array = []
function recoverDetails() {

    let details=localStorage.getItem("userCredentials");
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

    array.push(userDetails);
    const accountdetails = JSON.stringify(array);
    localStorage.setItem("userCredentials",accountdetails);

    if (password1 != password2) {
        alert("Password and Confirm Password does not match");
        return;
    }

    const isExist = isEmailALreadyExist(email);

    if (isExist) {
        alert("Email Id Already Registered");
        return;
    }


    


}
recoverDetails()

function passwordvalidation(password1, password2) {


    if (password1 == password2) {
        console.log("Your password matched")
        return true;
    }
    else {
        console.log("Your password does not matched")
        return false;
    }
}



function isEmailALreadyExist(currentEmail) {

    let isExist = false;

    const userList = JSON.parse(localStorage.getItem("userCredentials"));

    if (userList != null) {

        for (i = 0; i < userList.length; i++) {

            const user = userList[i];
            const email = user.email_id;


            if (currentEmail == email) {

                isExist = true;
                break;

            }


        }

    }

    return isExist;

}