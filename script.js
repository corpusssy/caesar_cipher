const ALPHABET = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z', 'a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
const WHITESPACE = " ";

let random = Math.floor(Math.random() * (SHIFT.length));

// Create a function that ciphers the user's input
function cipher() {
    
    // Create and initialize a variable that will store in the ciphered version of the user's input
    let new_text = "";

    // Store the user's input inside a variable
    let text = document.getElementById("text").value;
    text = text.toLowerCase();

    // Iterate through the user's input and cipher it
    for (let i = 0; i < text.length; i++) {
        if (text[i].includes(WHITESPACE) == false) {
            let position = ALPHABET.indexOf(text[i]);
            let new_position = position + 1;
            new_text += ALPHABET[new_position];
        } else if (text[i].includes(WHITESPACE) == true) {
            new_text += text[i];
        } else {
            document.getElementById("error"),innerHTML = "This program doesn't take special letters or characters as input.";
    }

    // Convert the ciphered message into all capital letters
    new_text = new_text.toUpperCase();

    // Output the ciphered version of the user's input
    document.getElementById("output").innerText = `Ciphered text:\n${new_text}`;

}

// Create a function the deciphers the user's input
function decipher() {

    // Create a function that deciphers the user's input
    let new_text = "";

    // Store the user's input inside a variable
    let text = document.getElementById("text").value;
    text = text.toLowerCase();

    // Iterate through the user's input and decipher it
    for (let i = 0; i < text.length; i++) {
        if (text[i].includes(WHITESPACE) == false) {
            let position = ALPHABET.indexOf(text[i]);
            let new_position = position - 1;
            new_text += ALPHABET[new_position];
        } else if (text[i].includes(WHITESPACE) == true) {
            new_text += text[i];
        } else {
            document.getElementById("error"),innerHTML = "This program doesn't take special letters or characters as input.";
    }

    // Output the deciphered version of the user's input
    document.getElementById("output").innerText = `Deciphered text:\n${new_text}`;
}
    
