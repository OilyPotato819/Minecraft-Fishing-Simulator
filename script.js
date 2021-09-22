// Minecraft Fishing Simulator

// Variables to Store HTML Elements
let steveImgEl = document.getElementById("steve-img");
let alexImgEl = document.getElementById("alex-img");
let fishBtnEl = document.getElementById("fish-btn");
let imgResultEl = document.getElementById("img-result");
let numCodEl = document.getElementById("num-cod");
let numSalmonEl = document.getElementById("num-salmon");
let numTropicalEl = document.getElementById("num-tropical");
let numPufferEl = document.getElementById("num-puffer");

// Global Variables
let character = "Steve";
let numCod = 0;
let numSalmon = 0;
let numTropical = 0;
let numPuffer = 0;

// Event Listeners
steveImgEl.addEventListener("click", selectSteve);
alexImgEl.addEventListener("click", selectAlex);
fishBtnEl.addEventListener("click", fishOnce);

// Event Functions
function selectSteve() {
    // Update Active Border
    steveImgEl.classList.add("active");
    alexImgEl.classList.remove("active");

    // Update Character Selection Variable
    character = "Steve";
}

function selectAlex() {
    // Update Active Border
    alexImgEl.classList.add("active");
    steveImgEl.classList.remove("active");

    // Update Character Selection Variable
    character = "Alex";
}

function fishOnce() {
    // Test Current Character
    if (character === "Steve") {
        // Use Steve Probability Distribution
        let randNum = Math.random();
        console.log(randNum)
        if (randNum < 0.7) {
            imgResultEl.src = "img/Raw-Cod.png"
        } else if (randNum < 0.9) {
            imgResultEl.src = "img/Raw-Salmon.png"
        } else if (randNum < 0.95) {
            imgResultEl.src = "img/Tropical-Fish.png"
        } else {
            imgResultEl.src = "img/Pufferfish.png"
        }
    } else {
        // Use Alex Probability Distribution

    }
}