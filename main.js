
let length = document.getElementById("length")
let selected = [
     upper
    ,lower
    ,number
    ,symbols
]






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

    for (let i = 1; i <= parseInt(length.value); i++) {
        if(selected[3] === "symbols" && i%4 === 0){
            pass += getRandomSymbols()
        }else if  (selected[2] === "number" && i%3 === 0){
            pass += getRandomNumber()
        }else if  (selected[1] === "lower" && i%2 ===0){
            pass += getRandomLower()
        }else if (selected[0] === "upper" && i%1 === 0){
            pass += getRandomUpper()
        }
        else {
            alert("Please select one of the checkboxes")
        }
    }



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
    let specialNumber = Math.floor(Math.random() * 31)
    return special[specialNumber]
}

function upper(){
    let isUppercase = document.getElementById("upperCase")
    if (isUppercase.checked){
        selected[0] = "upper"
    }else {
        selected[0] = "None"
    }
}

function lower(){
    let isLowercase = document.getElementById("lowerCase")
    if (isLowercase.checked){
        selected[1] = "lower"
    }else {
        selected[1] = "None"
    }
}

function number(){
    let isNumber    = document.getElementById("numbers")
    if (isNumber.checked){
        selected[2] = "number"
    }else {
        selected[2] = "None"
    }
}

function symbols(){
    let isSymbols   = document.getElementById("symbols")
    if (isSymbols.checked){
        selected[3] = "symbols"
    }else {
        selected[3] = "None"
    }

}



