let array = []
function recoverDetails() {
    console.group("recoverdetails");
    let details=localStorage.getItem("TEACHERDETAIL");
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




function admin(event) {
    event.preventDefault();
    console.group("Register");
    const name = document.getElementById("name").value;
    const number = document.getElementById("contact").value;
    const email = document.getElementById("email").value;
    const text = document.getElementById("text").value;
    const message = document.getElementById("message").value;
    const details = document.getElementById("details").value;
    const title = document.getElementById("title").value;
    const dob = document.getElementById("dob").value;
    let userDetails = {
        "Name":name,
        "Date":dob,
        "Email":email,
        "Contact":number,
        "Details":details,
        "Text":text,
        "Title": title,
        "Message": message,
    }


    const isExist = isEmailALreadyExist(email);

    if (isExist) {
        alert("Email Id Already Registered");
        return;
    }


    array.push(userDetails);
    const accountdetails = JSON.stringify(array);
    localStorage.setItem("TEACHERDETAIL",accountdetails);
    
    window.location.href="admissionlist.html"

    console.table(userDetails);
    console.log(isExist);
    console.groupEnd("Register");

}
recoverDetails();

function isEmailALreadyExist(currentEmail) {

    console.group("IsExist");

    let isExist = false;
    const userList = JSON.parse(localStorage.getItem("TEACHERDETAIL"));
    if (userList != null) {
        for (let i = 0; i < userList.length; i++) {
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