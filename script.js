// List of Truth and Dare questions
const truthQuestions = [
    "What is the most embarrassing thing you've ever done?",
    "What is a secret you have never told anyone?",
    "Have you ever lied to your best friend? If yes, about what?",
    "What is your biggest fear?",
    "Have you ever cheated in a game?",
    "What is your guilty pleasure?",
    "If you could change one thing about yourself, what would it be?",
    "Who is your crush?",
    "Have you ever stolen anything?",
    "What's the most childish thing you still do?"
];

const dareChallenges = [
    "Do 10 push-ups.",
    "Dance with no music for 1 minute.",
    "Do an impression of someone until another player can guess who you are.",
    "Let another player redo your hairstyle.",
    "Talk in an accent for the next 3 rounds.",
    "Sing the chorus of your favorite song.",
    "Post a silly picture of yourself on social media.",
    "Do your best chicken dance outside.",
    "Speak in a foreign accent for the next 3 rounds.",
    "Act like a monkey until it's your turn again."
];

// Function to get a random question
function getRandomItem(array) {
    const randomIndex = Math.floor(Math.random() * array.length);
    return array[randomIndex];
}

// Function to handle button clicks
function handleButtonClick(type) {
    const questionText = document.getElementById("questionText");
    if (type === "truth") {
        questionText.textContent = "Truth: " + getRandomItem(truthQuestions);
    } else if (type === "dare") {
        questionText.textContent = "Dare: " + getRandomItem(dareChallenges);
    }
}

// Event listeners for buttons
document.getElementById("truthButton").addEventListener("click", function() {
    handleButtonClick("truth");
});

document.getElementById("dareButton").addEventListener("click", function() {
    handleButtonClick("dare");
});
