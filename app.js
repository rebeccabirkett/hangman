// doc elements*****************************************************
const title = document.getElementById("title");
const header = document.getElementById("header");
const tumbleweed = document.getElementById("tumbleweed");
const gameArea = document.getElementById("game-area");
const reset = document.getElementById("reset");
const resetText = document.getElementById("reset-text");

// form elements*****************************************************
const wordForm = document.getElementById("wordForm");
const password = document.getElementById("password");
const dashes = document.getElementById("dashes");

// form buttons*****************************************************
const submit = document.getElementById("submit");
const openBtn = document.getElementById("openBtn");

// global variables*****************************************************
let word = "".toUpperCase();
let progressWord = [];
let guesses = [];
let lives = 6;

// functions*****************************************************
// opens a form for the player to input a word
const openForm = () => {
    wordForm.classList.toggle('slide-out', false);
    wordForm.classList.toggle('form-popup', true);
    wordForm.style.display = "block";
    gameArea.style.display = "none";
    openBtn.style.display = "none";
    reset.style.display = "none";
}

// saves the players's word as a variable
const setWord = () => {
    word = document.forms["wordInput"]["psw"].value.split('');
    console.log(`word: ${word}`)
}

// if the player's word is not valid an alert will popup
// otherwise the word will appear as dashes and the game area becomes visible. game is now ready
const required = () => {
    let x = document.forms["wordInput"]["pwd"].value;
    if (x == "") {
        alert("You need to enter a word before you can play Hangman!")
        return false;
    } else{
        wordForm.classList.add('slide-out');
        for (let i = 0; i < word.length; i ++)
        progressWord.push('_');
        dashes.innerHTML = progressWord.join(" ");
        openBtn.style.display = "none";
        header.style.display = "none";
        tumbleweed.style.display = "none";
        console.log(`progressWord: ${progressWord}`);  
        //keypress event listener
        document.addEventListener("keypress", userInput);
    }
}
        
// when the player presses a key on the keyboard, the game will do one of two things:
// if the word matches the key pressed, the letter will show in their word
// if the key pressed does not match, a piece of the hangman will be added and the letter is logged
//letters = letters guessed displayed in html
//guesses = letters guessed array
//dashes = the hidden word
const userInput = () => {
    for (let l = 0; l < word.length; l++) {
        if (word[l].includes(event.key) === true) {
            console.log("this letter is present in this index");
            progressWord.splice(l, 1, `${event.key}`);
            dashes.innerHTML = progressWord.join(" ");
            // a check for the win condition is made
            winCheck();
        } else if (word.includes(event.key) === false) {
            console.log("letter is not present in this index");
            guesses.push(`${event.key}`);
            letters.innerHTML = guesses.join(" ");
            lifeLost();
            return false;
        }
    }
};

const lifeLost = () => {
    lives -= 1;
    console.log(`${lives} lives left`);
    condition();
}

// if the word has been fully revealed, the player has won and a reset button appears
const winCheck = () => {
    if (progressWord.includes('_')) {
        return false;
    } else {
        condition();
    }
}

const condition = () => {
    if (lives > 0 && progressWord.includes('_') === false) {
        resetText.innerText = "You won! Retry?";
        console.log("player wins")
        document.removeEventListener("keypress", userInput);
        reset.style.display = "block";
        resetBtn.style.display = "block";
    } else if (lives === 0) {
        resetText.innerText = "Game Over! Retry?";
        console.log("player loses")
        document.removeEventListener("keypress", userInput);
        reset.style.display = "block";
        resetBtn.style.display = "block";
    }
}

// event listeners*****************************************************
//when player presses 'play!' on the word input form
submit.addEventListener("click", () => {
    wordForm.classList.add('form-popup');
    required();
    title.innerText = "";
    gameArea.style.display = "block";
    console.log(word);
    console.log(progressWord);
    console.log(guesses);
}
);

// when the player presses 'reset' upon win/lose condition met
// resetBtn.addEventListener("click", () => {
//     console.log("player clicked reset");
//     gameArea.classList.toggle('slide-in', false);
//     gameArea.classList.toggle('slide-out-top', true);
//     header.style.display = "block";
//     title.innerText = "HANGMAN";
//     openForm();
//     progressWord.length = 0;
//     guesses.length = 0;
//     letters.innerHTML = guesses;
//     dashes.innerHTML = progressWord;
// });


