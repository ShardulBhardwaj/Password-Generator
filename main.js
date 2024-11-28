







let selected = {
     upper:  true
    ,lower:  true
    ,number: true
    ,symbols:true
    ,amountSelected: 4
}

const specialRegex = /[!@#$%^&*(),.?":{}|<>]/g
const smallRegex = /[a-z]/
const upperRegex = /[A-Z]/
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
            if(selected.upper && upperRegex.test(pass)) {
                testLength++
                passwordTrue = true

            }

            if(selected.symbols && specialRegex.test(pass)){
                testLength++
                passwordTrue = true

            }

            if(selected.lower && smallRegex.test(pass)){
                testLength++
                passwordTrue = true

            }

            if (selected.number && numbersRegex.test(pass)){
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







