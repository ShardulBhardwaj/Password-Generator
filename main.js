
const length   = document.getElementById("length")
const isUpper  = document.getElementById("upperCase")
const isLower  = document.getElementById("lowerCase")
const isNumber = document.getElementById("numbers")
const isSymbol = document.getElementById("symbols")


let selected = {
     upper:  true
    ,lower:  true
    ,number: true
    ,symbols:true
    ,amountSelected: 0
}

const specialRegex = /[!@#$%^&*(),.?":{}|<>]/g
const smallRegex = /[a-z]/
const alphaRegex = /[A-Z]/
const numbersRegex = /[0-9]/






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
    let passwordTrue = false
    let length = 0
    while(passwordTrue === false && length === selected.amountSelected){

        for (let i = 0; i < parseInt(length.value); i++) {
            pass += getRandomValue()
        }
        if (selected.upper === true && alphaRegex.test(pass) === true){
            passwordTrue = true
            length++
        }if (selected.lower === true && smallRegex.test(pass) === true){
            passwordTrue = true
            length++
        }if (selected.number === true && numbersRegex.test(pass)=== true){
            passwordTrue = true
            length++
        }if (selected.symbols === true && specialRegex.test(pass)=== true){
            passwordTrue = true
            length++
        }else {
            passwordTrue = false
        }
    }

    password.innerText = pass

}
function getRandomValue(){
    let value   = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ1234567890 !\"#$%&'()*+,-./:;<=>?@[\\]^_\`{|}~"
    let valueNumber = Math.floor(Math.random() * (25+25+9+32))
    return value[valueNumber]
}


function upper(){
    selected.upper = isUpper.checked;
    if (isUpper.checked){
        selected.amountSelected += 1
    }else {
        selected.amountSelected -= 1
    }
}

function lower(){
    selected.lower = isLower.checked;
    if (isLower.checked){
        selected.amountSelected += 1
    }else {
        selected.amountSelected -= 1
    }
}

function number(){
    selected.number = isNumber.checked;
    if (isNumber.checked){
        selected.amountSelected += 1
    }else {
        selected.amountSelected -= 1
    }
}

function symbols(){
    selected.symbols = isSymbol.checked;
    if (isSymbol.checked){
        selected.amountSelected += 1
    }else {
        selected.amountSelected -= 1
    }
}


