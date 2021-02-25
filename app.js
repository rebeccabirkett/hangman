// form elements
const wordForm = document.getElementById("wordForm");
const password = document.getElementById("password");
const dashes = document.getElementById("dashes");

// buttons
const submit = document.getElementById("submit");
const openBtn = document.getElementById("openBtn");

// global variables
let word = "".toUpperCase();

// functions
const openForm = () => {
    wordForm.style.display = "block";
}

const closeForm = () => {
    wordForm.style.display = "none";
}

const setWord = () => {
    word = document.forms["wordInput"]["psw"].value.split('');
        openBtn.style.display = "none";
        closeForm();
        dashes.innerHTML = word.join(" ").replace(/a|b|c|d|e|f|g|h|i|j|k|l|m|n|o|p|q|r|s|t|u|v|w|x|y|z/g, "_");
    }

    
    // when player presses a letter:
    document.addEventListener("keypress", () => {
        for (let l = 0; l < word.length; l++) {
            //loop through each instance of word, if letter == key, replace _ with key 
            if (word.includes(event.key)) {
                console.log();
            } 
        }
    });