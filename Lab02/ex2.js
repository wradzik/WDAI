document.getElementById('generatePassword').addEventListener('click', function () {
    
    const minLength = parseInt(document.getElementById('minLength').value);
    const maxLength = parseInt(document.getElementById('maxLength').value);
    const includeUppercase = document.getElementById('includeUppercase').checked;
    const includeSpecial = document.getElementById('includeSpecial').checked;


    if (isNaN(minLength) || isNaN(maxLength) || minLength < 1 || maxLength < minLength) {
        alert('Podaj poprawne wartości dla długości hasła.');
        return;
    }


    const lowercaseChars = 'abcdefghijklmnopqrstuvwxyz';
    const uppercaseChars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    const specialChars = '!@#$%^&*()_+[]{}|;:,.<>?';
    const numbers = '0123456789';

    let charset = lowercaseChars + numbers;
    if (includeUppercase) charset += uppercaseChars;
    if (includeSpecial) charset += specialChars;

    const passwordLength = Math.floor(Math.random() * (maxLength - minLength + 1)) + minLength;
    let password = '';
    for (let i = 0; i < passwordLength; i++) {
        password += charset.charAt(Math.floor(Math.random() * charset.length));
    }


    alert(`Wygenerowane hasło: ${password}`);
});