let lowerCase = "abcdefghijklmnopqrstuvxyz";
let upperCase = "ABCDEFGHIJKLMNOPQRSTUVXYZ";
let numbers = "0123456789"; 
let specialChars = "£$&()*+[]@#^-_!?";
let categories = 0;
let password = "";


let passwordLengthLabel = document.getElementById("passwordLength__label");
let passwordField = document.getElementById("card__password-field");
let passwordLength = document.getElementById("passwordLength").value;


function setPasswordLength()
{
    passwordLength = document.getElementById("passwordLength").value;
    passwordLengthLabel.innerHTML = "Password length is " + passwordLength;
    generatePassword();
}

function generatePassword()
{
    categories = [];
    password = "";
    let useCapitalLetters = document.getElementById("useCapitalLetters").checked;
let useCommonLetters = document.getElementById("useCommonLetters").checked;
let useNumbers = document.getElementById("useNumbers").checked;
    let useSpecialChars = document.getElementById("useSpecialChars").checked;
    
    if (!useCapitalLetters && !useCommonLetters && !useNumbers && !useSpecialChars)
    {
        alert("Please select at least one option for generating a password");
    }
    else
    {
        if (useCapitalLetters)
    {
        categories.push(1);
    }
    if (useCommonLetters)
    {
        categories.push(0);
    }
    if (useNumbers)
    {
        categories.push(2);
    }
    
    if (useSpecialChars)
    {
        categories.push(3);
    }
        }
    
    
    for (let i = 0; i < passwordLength; i++)
    {
        index = 0;
        randomCategory = categories[Math.floor(Math.random() * categories.length)];
      
        switch (randomCategory)
        {
        case 0:
            index = Math.round(Math.abs(Math.floor(Math.random() * lowerCase.length -1)));
            password = password + lowerCase[index + 1];
            break;
        case 1:
            index = Math.round(Math.abs(Math.floor(Math.random() * upperCase.length -1)));
            password = password + upperCase[index + 1];
            break;
        case 2:
            index = Math.round(Math.abs(Math.floor(Math.random() * numbers.length -1)));
            password = password + numbers[index + 1];
            break;
        case 3:
            index = Math.round(Math.abs(Math.floor(Math.random() * specialChars.length -1)));
            password = password + specialChars[index + 1];
            break;
        }
   
    }
    // alert(password);
    passwordField.value = password;

}