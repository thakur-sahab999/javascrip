let characters = "0123456789abcdefghijklmnopqrstuvwxyz!@#$%^&*()ABCDEFGHIJKLMNOPQRSTUVWXYZ";
let passwordLength = 12



function generateRandomPassword(){
    document.getElementById("text1").textContent = getPassword()
    document.getElementById("text2").textContent = getPassword()
    document.getElementById("text3").textContent = getPassword()
    document.getElementById("text4").textContent = getPassword()
}



function getPassword() {
    let password = ""
    for (let i = 0; i < passwordLength; i++) {
        let random = Math.floor(Math.random() * characters.length)
        password += characters.substring(random, random + 1)
    }
    return password
}

