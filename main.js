
let length = document.getElementById("length")
let selected = {
     upper:  true
    ,lower:  true
    ,number: true
    ,symbols:true
}
let specialRegex = /[!@#$%^&*(),.?":{}|<>]/g
let smallRegex = /[a-z]/
let alphaRegex = /[A-Z]/
let numbersRegex = /[0-9]/






    function Copy() {

        let password = document.getElementById("password").innerText

        if (password.trim() === "") {
            alert("No password to copy!");
            return;
        }


        navigator.clipboard.writeText(password)
        .then(() => {
            alert("Password copied to clipboard!");
        })
        .catch((err) => {
            console.error("Failed to copy text: ", err);
            alert("Failed to copy text.");
        });
}

function Generate(){
    let password = document.getElementById("password")
    let pass = ""





}
function getRandomLower(){
    let small   = "abcdefghijklmnopqrstuvwxyz"
    let smallNumber = Math.floor(Math.random() * 25)
    return small[smallNumber]
}

function getRandomUpper(){
    let alpha   = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
    let alphaNumber = Math.floor(Math.random() * 25)
    return alpha[alphaNumber]
}

function getRandomNumber(){
    let numbers =  "1234567890"
    let numberNumber = Math.floor(Math.random() * 9)
    return numbers[numberNumber]
}

function getRandomSymbols(){
    let special = ` !"#$%&'()*+,-./:;<=>?@[\\]^_\`{|}~`
    let specialNumber = Math.floor(Math.random() * 27)
    return special[specialNumber]
}

function upper(){
    let isUpper = document.getElementById("upperCase")
    if (isUpper.checked){
        selected.upper = true
    }else if ()
}


