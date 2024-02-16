let btnSubmit = document.querySelector(".btn-subscribe");
let btnDismiss = document.querySelector(".btn-dismiss");
let mainContainer = document.querySelector(".main-container");
let modal = document.querySelector(".modal")
let errorMsg = document.querySelector(".error-msg");
let errorField = document.querySelector(".error");
let inputField = document.getElementById("inputValue");
const mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
let clientEmail = document.querySelector(".emailAddress")

btnSubmit.addEventListener("click", function (e){
    e.preventDefault();
   
    if(!inputField.value.match(mailformat)) {
        
        errorMsg.style.display = "block";
        errorField.style.color = "hsl(4,100%,67%)";
        inputField.style.color = "hsl(4,100%,67%)";
        errorField.style.border = "2px solid hsl(4,100%,67%)";
    }
    else {
         
        mainContainer.style.display = "none";       
        modal.style.display = "block";
        clientEmail.innerHTML = inputField.value;
    }
   
})

btnDismiss.addEventListener("click", function(e) {
    e.preventDefault();
    modal.style.display = "none"
    mainContainer.style.display = "flex";
    inputField.value = ""
    errorMsg.style.display = "none";
    errorField.style.color = "hsl(234, 29%, 20%)";
    errorField.style.border = "1px solid hsla(234, 29%, 20%,0.2)";
    
})
