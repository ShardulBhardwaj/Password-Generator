
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

function Generate() {
    const lowercaseChars = "abcdefghijklmnopqrstuvwxyz";
    const uppercaseChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    const numberChars = "0123456789";
    const symbolChars = "!@#$%^&*()_+=";

    const lowercaseChecker = document.getElementById("lowerCase").checked;
    const uppercaseChecker = document.getElementById("upperCase").checked;
    const numbersChecker = document.getElementById("numbers").checked;
    const symbolsChecker = document.getElementById("symbols").checked;
    const lengthInput = document.getElementById("length").value;
    const textField = document.getElementById("password");

    let allowedChars = "";
    let password = "";


    if (lowercaseChecker) allowedChars += lowercaseChars;
    if (uppercaseChecker) allowedChars += uppercaseChars;
    if (numbersChecker) allowedChars += numberChars;
    if (symbolsChecker) allowedChars += symbolChars;

    const passwordLength = parseInt(lengthInput);


    if (allowedChars.length === 0) {
        textField.innerText = "ERROR: Please select at least one character type!";
        return;
    }

    // Generate password
    for (let i = 0; i < passwordLength; i++) {
        const randomIndex = Math.floor(Math.random() * allowedChars.length);
        password += allowedChars[randomIndex];
    }

    textField.innerText = password;
}








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







