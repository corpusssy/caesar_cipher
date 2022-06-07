const ALPHABET = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z', 'a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
const WHITESPACE = " ";

let random = Math.floor(Math.random() * (SHIFT.length));

function cipher() {
    let new_text = "";

    let text = document.getElementById("text").value;
    text = text.toLowerCase();

    for (let i = 0; i < text.length; i++) {
        if (text[i].includes(WHITESPACE) == false) {
            let position = ALPHABET.indexOf(text[i]);
            let new_position = position + 1;
            new_text += ALPHABET[new_position];
        } else {
            new_text += text[i];
        }

    }

    new_text = new_text.toUpperCase();

    document.getElementById("output").innerText = `Ciphered text:\n${new_text}`;
    document.getElementById("instructions").innerText = "";

}

function decipher() {

    let new_text = "";

    let text = document.getElementById("text").value;
    text = text.toLowerCase();

    for (let i = 0; i < text.length; i++) {
        if (text[i].includes(WHITESPACE) == false) {
            let position = ALPHABET.indexOf(text[i]);
            let new_position = position - 1;
            new_text += ALPHABET[new_position];
        } else {
            new_text += text[i];
        }
    }

    document.getElementById("output").innerText = `Deciphered text:\n${new_text}`;
    document.getElementById("instructions").innerText = "";

}
    
