

//Available levels
const levels = {
    easy: 5,
    medium: 3,
    hard: 2,
}


//to change levels
let currentLevel = levels.easy;

//Global variables
let time = currentLevel;
let score = 0;
let isPlaying;


//DOM elements
const wordInput = document.querySelector("#text-input");
const timeDisplay = document.querySelector("#time");
const scoreDisplay = document.querySelector("#score");
const message = document.querySelector("#message");
const currentWord = document.querySelector("#current_word");
const seconds = document.querySelector("#seconds");
const easyButton  = document.querySelector("#lebel-Easy");
const mediumButton = document.querySelector("#level-medium")
const hardButton = document.querySelector("#level-hard")

const words  = [
    "piazzas",
    "pizzas",
    "suburban",	
    "assuming",    
    "obstinance",
    "foramens",
    "phenomenon",
    "onomatopoeia",
    "literally",
    "ironic",
    "irregardless",
    "colonel",
    "nonplussed",
    "disinterested",
    "enormity",
    "lieutenant",
    "unabashed",
    "international",
    "campuses",
    "traveled",
    "inspires",
    "careers",
    "educational",
    "engineering",
    "difficult",
    "wierdest",
    "language",
    "lingual",
    "confused",
    "frontier",
    "fortification",
    "renaissanse",
];

//Initialize Game
const init  = () => {
    //show number of seconds in UI
    seconds.innerHTML = currentLevel
    //load word from array
    showWords(words);
    //check level
    setInterval(1000,level);
    //matching word input
    wordInput.addEventListener('input', startMatch);
    //call countDown every second
    setInterval(countDown, 1000);
    //CHECK game status
    setInterval(checkStatus, 50);
}



//functions to change the levels

function levelSetEasy() {
    // easyButton.classList.add("active");
    // mediumButton.classList.remove("active");
    // hardButton.classList.remove("active");
    currentLevel = levels.easy;
};
function levelSetMedium() {
    // easyButton.classList.remove("active");
    // mediumButton.classList.add("active");
    // hardButton.classList.remove("active");
    currentLevel = levels.medium;
};
function levelSetHard() {
    // easyButton.classList.remove("active");
    // mediumButton.classList.remove("active");
    // hardButton.classList.add("active");
    currentLevel = levels.hard;
};

function level() {
    easyButton.addEventListener("click", levelSetEasy)
    //check level for medium
    mediumButton.addEventListener("click", levelSetMedium)
    //check level for hard
    hardButton.addEventListener("click", levelSetHard)
}

//pick a random word
function showWords(words) {
    //generate random array index
    const randIndex  =Math.floor(Math.random()*words.length);

    currentWord.innerHTML = words[randIndex] 
}

function countDown() {
    //make sure time has not run out
    if(time>0)
    {
        //decrease time;
        time--;
    }
    else if(time===0)
    {
        //Game is finished
        isPlaying = false;
    }

    //display time
    timeDisplay.innerHTML = time;
}

function checkStatus() {
    if(time===0 && !isPlaying)
    {
        message.innerHTML = "Game Over!!";
        message.classList.remove('success');
        message.classList.add('fail');
        score = -1;
    }
}

function startMatch() {
    if(matchWords())
    {
        isPlaying = true;
        time = currentLevel+1;
        showWords(words);
        wordInput.value = '';
        score++;
    }
    //if score is negaive one display zero
    if(score === -1)
    {
        score.innerHTML = 0;
    }
    else
    {
        scoreDisplay.innerHTML = score;
    }
}

//match current word to input word
function matchWords() {
    if(wordInput.value === currentWord.innerHTML)
    {
        message.innerHTML = "Correct!!"
        message.classList.remove('fail');
        message.classList.add("success")
        return true;
    }
    else
    {
        message.innerHTML = '';
        return false;
    }
}
window.addEventListener("load", init)
//check level for easy