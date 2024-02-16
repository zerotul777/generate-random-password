const pass = document.getElementById('input-box');
const length = 12;

const upperCase = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
const lowerCase = 'abcdefghijklmnopqrstuvwxyz';
const number = '0123456789';
const symbol = '@#$%^&*()_+|[]></-=';

const allChars = upperCase + lowerCase + number + symbol;

function createPassword() {
    let password = '';
    password += upperCase[Math.floor(Math.random() * upperCase.length)];
    password += lowerCase[Math.floor(Math.random() * lowerCase.length)];
    password += number[Math.floor(Math.random() * number.length)];
    password += symbol[Math.floor(Math.random() * symbol.length)];

    while(length > password.length) {
        password += allChars[Math.floor(Math.random() * allChars.length)];
    }
    pass.value = password
}

const generateButton = document.getElementById('btn');
generateButton.addEventListener('click', ()=> {
    createPassword();
    msg.style.display = 'block';
    generateColor();
})

const copyButton = document.getElementById('copy');
copyButton.addEventListener('click', () => {
    window.navigator.clipboard.writeText(pass.value)
})

// Strong password message

const msg = document.getElementById('message')
const str = document.getElementById('strength')
const inputBorder = document.querySelector('.display')

pass.addEventListener('input', ()=> {
    if (pass.value.length > 0) {
        msg.style.display = 'block'
    } else {
        msg.style.display = 'none'
    }

    if (pass.value.length < 4) {
        str.innerHTML = 'weak';
        inputBorder.style.borderColor = '#ff5925';
        msg.style.color = '#ff5925';
    } else if (pass.value.length >= 4 && pass.value.length < 8) {
        str.innerHTML = 'medium';
        inputBorder.style.borderColor = 'yellow';
        msg.style.color = 'yellow';
    } else if (pass.value.length >= 8) {
        generateColor();
    }
})

function generateColor() {
    str.innerHTML = 'strong';
    inputBorder.style.borderColor = '#26d730';
    msg.style.color = '#26d730';
}