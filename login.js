function login() {
    var name = document.getElementById("name").value;
    var password = document.getElementById("password").value;

    if (name !== "" && password !== "") {
        if(name == "facebook"){
            location.replace("facebook.html")
        }
        else{
            alert("Sorry! " +name+" There is an error while processing your request")
        }   
    }
    else{
        alert("Sorry! " +name+" There is an error while processing your request")
    }

}