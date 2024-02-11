//signup function

function signup() {
    const uName = document.getElementById("signuser").value;
    const uPassword = document.getElementById("signpassword").value;

    //convert from json to object

    const users = JSON.parse(localStorage.getItem('users')) || []

    //find user
    const user = users.find(user => user.uName === uName && user.uPassword === uPassword)
    if(user) {
        alert('sign up successful proceed to login')
    }


}