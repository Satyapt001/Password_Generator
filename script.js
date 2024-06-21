const passwordBox = document.getElementById("Password");
const length= 12;

const upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const lowerCase = "abcdefghijklmnopqrstuvwxyz";
const number = "0123456789";
const symbol = "@#$%^&*()_+~|{}><?\/-=" ;

const allchars = upperCase + lowerCase + number + symbol;

function createPassword() {
    let password = "";
    password += upperCase[Math.floor(Math.random()*upperCase.length)];
    password += lowerCase[Math.floor(Math.random()*lowerCase.length)];
    password += number[Math.floor(Math.random()*number.length)];
    password += symbol[Math.floor(Math.random()*symbol.length)];

    while(length>password.length){
        password += allchars[Math.floor(Math.random()*symbol.length)];
    }
    passwordBox.value = password;
}

//copy function
function copyPassword() {
    const passwordBox = document.getElementById('Password');
    passwordBox.select();
    passwordBox.setSelectionRange(0, 99999); // For mobile devices

    navigator.clipboard.writeText(passwordBox.value)
        .then(() => {
            console.log('Password copied to clipboard');
        })
        .catch(err => {
            console.error('Failed to copy password: ', err);
        });
}

