let array = []
function recoverDetails() {
    console.group("recoverdetails");
    let details=localStorage.getItem("CONTACTDETAIL");
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




function querygetting(event) {
    event.preventDefault();
    const name = document.getElementById("name").value;
    const number = document.getElementById("contact").value;
    const email = document.getElementById("email").value;
    const message = document.getElementById("message").value;
    let userDetails = {
        "Name":name,
        "Email":email,
        "Contact":number,
        "Message": message,
    }

    array.push(userDetails);
    const accountdetails = JSON.stringify(array);
    localStorage.setItem("CONTACTDETAIL",accountdetails);

    togglepopup()

    console.table(userDetails);

}
recoverDetails()

function togglepopup() {
    document.getElementById("popup_1").classList.toggle("active");
}
function cross() {
    document.getElementById("popup_1").style.display = "none";
    window.location.reload("contact.html");
}