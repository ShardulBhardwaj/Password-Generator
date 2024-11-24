







let selected = {
     upper:  true
    ,lower:  true
    ,number: true
    ,symbols:true
    ,amountSelected: 4
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
    const length   = document.getElementById("length")
    let password = document.getElementById("password")
    let pass = ""
    let passwordTrue = false
    let testLength = 0

    if (parseInt(length.value) === selected.amountSelected || parseInt(length.value) > selected.amountSelected){
        while(passwordTrue === false && testLength === selected.amountSelected){
            for (let  i = 0; i < parseInt(length.value); i++){
                pass += getRandomValue()
            }
            console.log(pass)
            if(selected.upper === true && alphaRegex.test(pass)){
                testLength++
                passwordTrue = true

            }if(selected.symbols === true && specialRegex.test(pass)){
                testLength++
                passwordTrue = true

            }if(selected.lower === true && smallRegex.test(pass)){
                testLength++
                passwordTrue = true

            }if (selected.number === true && numbersRegex.test(pass)){
                testLength++
                passwordTrue = true

            }else {
                testLength = 0
                passwordTrue = false
            }
        }
    }else {
        alert("Failed Please make length equal to or greater then the amount selected")
    }
    password.innerText = pass





}
function getRandomValue(){
    let value   = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ1234567890 !\"#$%&'()*+,-./:;<=>?@[\\]^_\`{|}~"
    let valueNumber = Math.floor(Math.random() * (25+25+9+32))
    return value[valueNumber]
}


function upper(){
    const isUpper  = document.getElementById("upperCase")
    if (isUpper.checked === true){
        selected.amountSelected += 1
        selected.upper = true
    }else {
        selected.amountSelected -= 1
        selected.upper = false
    }
}

function lower(){
    const isLower  = document.getElementById("lowerCase")
    if (isLower.checked === true){
        selected.amountSelected += 1
        selected.lower = true
    }else {
        selected.amountSelected -= 1
        selected.lower = false
    }
}

function number(){
    const isNumber = document.getElementById("numbers")
    if (isNumber.checked === true){
        selected.amountSelected += 1
        selected.number = true
    }else {
        selected.amountSelected -= 1
        selected.number = false
    }
}

function symbols(){
    const isSymbol = document.getElementById("symbols")
    if (isSymbol.checked === true){
        selected.amountSelected += 1
        selected.symbols = true
    }else {
        selected.amountSelected -= 1
        selected.symbols = false
    }
}


