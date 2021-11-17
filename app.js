const form = document.getElementById('form');
const firstName = document.getElementById('firstName');
const lastName = document.getElementById('lastName');
const email = document.getElementById('email');
const passWord = document.getElementById('passWord');

form.addEventListener('submit', e => {
    e.preventDefault();

   
    var fName = firstName.value.trim();
    var lName = lastName.value.trim();
    var Email = email.value.trim();
    var pword = passWord.value.trim();
    var pattern = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

    if(fName === ''){
        errorFunc(firstName, "First Name can not be empty")
    }
    else{
        successFunc(firstName)
    }
    if(lName === ''){
        errorFunc(lastName, "Last Name can not be empty")
    }
    else{
        successFunc(lastName)
    }
    if(Email === ''){
        errorFunc(email, "email can not be empty")
    }
    else if(!Email.match(pattern)){
        errorFunc(email, 'looks like not an email')
    }
    else{
        successFunc(email)
    }
    if(pword === ''){
        errorFunc(passWord, "Password can not be empty")
    }
    else{
        successFunc(passWord)
    }
})
    function errorFunc(req, message){
        const formControl = req.parentElement;
        const span = formControl.querySelector('span');
        span.innerText = message;
        req.className += "error";
        span.className += "error-message";

        if(req != email){
            req.value = '';
        }
        else{
            req.style.color = "hsl(0, 100%, 74%)";
        }

    }
    function successFunc(req){
        req.className += "success";
    }
