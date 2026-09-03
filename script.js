/* =========================
   MEMORY VAULT
   ========================= */

const memories = [

    {
        number: "MEMORY 01",

        title: "The Beginning",

        image: "images/first-meeting.jpg",

        description:
            "Somewhere between an ordinary day and an unexpected moment, their story quietly began."
    },


    {
        number: "MEMORY 02",

        title: "A Little Adventure",

        image: "images/memory-01.jpg",

        description:
            "A day that wasn't supposed to become a favourite memory somehow became exactly that."
    },


    {
        number: "MEMORY 03",

        title: "The Funniest Day",

        image: "images/memory-02.jpg",

        description:
            "One of those days where absolutely nothing went according to plan—and somehow everything went perfectly."
    },


    {
        number: "MEMORY 04",

        title: "Just Us",

        image: "images/memory-03.jpg",

        description:
            "No special occasion. No big plans. Just two people enjoying the simple comfort of being together."
    }

];


const memoryBoxes =
    document.querySelectorAll(".memory-box");

const memoryPopup =
    document.getElementById("memory-popup");

const popupImage =
    document.getElementById("popup-image");

const popupNumber =
    document.getElementById("popup-number");

const popupTitle =
    document.getElementById("popup-title");

const popupDescription =
    document.getElementById("popup-description");

const closePopup =
    document.getElementById("close-popup");


memoryBoxes.forEach(box => {

    box.addEventListener("click", () => {

        const index =
            Number(box.dataset.memory);

        const memory =
            memories[index];


        popupImage.src =
            memory.image;

        popupNumber.textContent =
            memory.number;

        popupTitle.textContent =
            memory.title;

        popupDescription.textContent =
            memory.description;


        memoryPopup.classList.add("active");

        document.body.style.overflow = "hidden";

    });

});


closePopup.addEventListener("click", closeMemory);


memoryPopup.addEventListener("click", (event) => {

    if (event.target === memoryPopup) {

        closeMemory();

    }

});


function closeMemory() {

    memoryPopup.classList.remove("active");

    document.body.style.overflow = "";

}
/* =========================
   SECRET CODE GAME
   ========================= */

const secretCodeInput =
    document.getElementById("secret-code");

const unlockButton =
    document.getElementById("unlock-button");

const decodeMessage =
    document.getElementById("decode-message");

const decodeBox =
    document.querySelector(".decode-box");


/*
    TEMPORARY CODE

    We will replace this with
    the couple's real secret code.
*/

const secretCode = "CARE";

function checkSecretCode() {

    const enteredCode =
        secretCodeInput.value
        .trim()
        .toUpperCase();


    if (enteredCode === secretCode) {

        decodeMessage.textContent =
            "You found it. ♡";

        decodeMessage.style.color =
            "#719871";


        decodeBox.classList.add("unlocked");


        unlockButton.textContent =
            "Unlocked ♡";


        secretCodeInput.disabled = true;

        unlockButton.disabled = true;


        /* =========================
           REVEAL LOVE LETTER
           ========================= */

        const loveLetter =
            document.getElementById("love-letter");


        setTimeout(() => {

            loveLetter.classList.add("visible");

            loveLetter.scrollIntoView({
                behavior: "smooth"
            });

        }, 1200);

    }


    else {

        decodeMessage.textContent =
            "Not quite... think a little deeper. ♡";

        decodeMessage.style.color =
            "#b54872";


        secretCodeInput.animate(
            [
                { transform: "translateX(0)" },
                { transform: "translateX(-6px)" },
                { transform: "translateX(6px)" },
                { transform: "translateX(0)" }
            ],
            {
                duration: 300
            }
        );

    }

}


unlockButton.addEventListener(
    "click",
    checkSecretCode
);


secretCodeInput.addEventListener(
    "keydown",
    (event) => {

        if (event.key === "Enter") {

            checkSecretCode();

        }

    }
);
/* =========================
   PHOTO GALLERY
   ========================= */

const galleryPhotos =
    document.querySelectorAll(".gallery-photo");

const galleryViewer =
    document.getElementById("gallery-viewer");

const viewerImage =
    document.getElementById("viewer-image");

const viewerCaption =
    document.getElementById("viewer-caption");

const galleryClose =
    document.getElementById("gallery-close");


/*
    OPEN PHOTO

    Clicking a card still opens
    the photograph in fullscreen.
*/

galleryPhotos.forEach(photo => {

    photo.addEventListener("click", () => {

        const image =
            photo.dataset.image;

        const caption =
            photo.dataset.caption;


        viewerImage.src =
            image;

        viewerCaption.textContent =
            caption;


        galleryViewer.classList.add("active");

        document.body.style.overflow =
            "hidden";

    });

});


/*
    CLOSE PHOTO
*/

galleryClose.addEventListener(
    "click",
    closeGallery
);


galleryViewer.addEventListener(
    "click",
    (event) => {

        if (event.target === galleryViewer) {

            closeGallery();

        }

    }
);


function closeGallery() {

    galleryViewer.classList.remove(
        "active"
    );

    document.body.style.overflow =
        "";

}
/* =========================
   FINAL GIFT
   ========================= */

const giftContainer =
    document.getElementById("gift-container");

const openGift =
    document.getElementById("open-gift");

const giftReveal =
    document.getElementById("gift-reveal");


openGift.addEventListener("click", () => {

    /*
        First open the envelope.
    */

    giftContainer.classList.add("opened");


    /*
        Wait for the envelope animation,
        then reveal the actual surprise.
    */

    setTimeout(() => {

        giftReveal.classList.add("visible");

        giftReveal.scrollIntoView({
            behavior: "smooth",
            block: "center"
        });

    }, 900);

});
/* =========================
   FLOATING HEARTS
   ========================= */

const heartContainer =
    document.body;


function createFloatingHeart() {

    const heart =
        document.createElement("span");


    heart.classList.add(
        "floating-heart"
    );


    heart.textContent = "♡";


    heart.style.left =
        Math.random() * 100 + "vw";


    heart.style.animationDuration =
        (7 + Math.random() * 6) + "s";


    heart.style.fontSize =
        (10 + Math.random() * 12) + "px";


    heartContainer.appendChild(heart);


    setTimeout(() => {

        heart.remove();

    }, 13000);

}


/*
    Create one heart every
    2.5 seconds.
*/

setInterval(
    createFloatingHeart,
    2500
);
/* =====================================================
   FLYING LOVE ANGELS
   ===================================================== */

const loveAngels =
    document.querySelectorAll(".love-angel");


const angelMessages = [

    "I love you ♡",

    "My pookie ♡",

    "My other half ♡",

    "Always you ♡",

    "You feel like home ♡",

    "My favourite person ♡",

    "Take care of my heart ♡",

    "Forever sounds good with you ♡"

];


/* -----------------------------------------------------
   CREATE FLIGHT DATA
   ----------------------------------------------------- */

const angelData = [];


loveAngels.forEach((angel, index) => {

    const target =
        angel.querySelector(
            ".angel-heart-target"
        );


    angelData.push({

        element: angel,

        target: target,

        angle:
            Math.random() * Math.PI * 2,

        speed:
            0.002 +
            Math.random() * 0.001,

        radius:
            25 +
            Math.random() * 35,

        centerX:
            parseFloat(
                getComputedStyle(angel).left
            ),

        centerY:
            parseFloat(
                getComputedStyle(angel).top
            ),

        messageTimer: null,

        messageShown: false

    });

});


/* -----------------------------------------------------
   ANGEL FLIGHT
   ----------------------------------------------------- */

function flyAngels() {

    angelData.forEach((data, index) => {

        data.angle += data.speed;


        const x =
            Math.sin(data.angle)
            * data.radius;


        const y =
            Math.cos(data.angle * 0.8)
            * data.radius;


        const gentleRotation =
            Math.sin(data.angle)
            * 8;


        data.element.style.transform =
            `translate(${x}px, ${y}px)
             rotate(${gentleRotation}deg)`;


        /*
            Every angel occasionally
            reaches its aiming position.
        */

        const aimingMoment =
            Math.sin(data.angle * 1.7);


        if (
            aimingMoment > 0.97 &&
            !data.messageShown
        ) {

            showAngelMessage(data);

        }

    });


    requestAnimationFrame(
        flyAngels
    );

}


flyAngels();


/* -----------------------------------------------------
   SHOW MESSAGE
   ----------------------------------------------------- */

function showAngelMessage(data) {

    data.messageShown = true;


    const message =
        data.element.querySelector(
            ".angel-message span"
        );


    const randomMessage =
        angelMessages[
            Math.floor(
                Math.random()
                * angelMessages.length
            )
        ];


    message.textContent =
        randomMessage;


    data.element.classList.add(
        "show-message"
    );


    /*
        Keep message visible
        for a short moment.
    */

    setTimeout(() => {

        data.element.classList.remove(
            "show-message"
        );


    }, 2200);


    /*
        Allow another message later.
    */

    setTimeout(() => {

        data.messageShown = false;

    }, 5000);

}
/* =====================================================
   CHAPTER THREE — COUPLE'S CHALLENGE
   ===================================================== */

const quizQuestions = [

    {
        question:
            "Where did their first memorable conversation happen?",

        answers: [
            "At a café",
            "At college",
            "On a trip",
            "Somewhere unexpected"
        ],

        correct:
            "Somewhere unexpected"
    },


    {
        question:
            "What is one thing that always makes them laugh together?",

        answers: [
            "Inside jokes",
            "Watching movies",
            "Cooking",
            "Shopping"
        ],

        correct:
            "Inside jokes"
    },


    {
        question:
            "What kind of conversations do they sometimes lose track of time having?",

        answers: [
            "Work conversations",
            "Midnight talks",
            "Travel plans",
            "Arguments"
        ],

        correct:
            "Midnight talks"
    },


    {
        question:
            "What does being together feel like for them?",

        answers: [
            "An adventure",
            "A challenge",
            "Home",
            "A competition"
        ],

        correct:
            "Home"
    },


    {
        question:
            "What matters more than grand romantic gestures?",

        answers: [
            "Expensive gifts",
            "The little things",
            "Big parties",
            "Perfect dates"
        ],

        correct:
            "The little things"
    }

];


/* =====================================================
   QUIZ ELEMENTS
   ===================================================== */

const questionNumber =
    document.getElementById("question-number");

const questionText =
    document.getElementById("question");

const answersContainer =
    document.getElementById("answers");

const scoreDisplay =
    document.getElementById("score");

const progressBar =
    document.getElementById("progress-bar");

const nextQuestionButton =
    document.getElementById("next-question");


/* =====================================================
   QUIZ VARIABLES
   ===================================================== */

let currentQuestion = 0;

let score = 0;

let answerSelected = false;


/* =====================================================
   LOAD QUESTION
   ===================================================== */

function loadQuestion() {

    const question =
        quizQuestions[currentQuestion];


    /*
        Update question number
    */

    questionNumber.textContent =
        `Question ${currentQuestion + 1} of ${quizQuestions.length}`;


    /*
        Update question
    */

    questionText.textContent =
        question.question;


    /*
        Clear old answers
    */

    answersContainer.innerHTML = "";


    /*
        Create new answer buttons
    */

    question.answers.forEach(answer => {

        const button =
            document.createElement("button");


        button.classList.add("answer");

        button.textContent =
            answer;


        button.addEventListener(
            "click",
            () => checkAnswer(
                button,
                answer
            )
        );


        answersContainer.appendChild(button);

    });


    /*
        Update progress
    */

    const progress =
        ((currentQuestion + 1)
        / quizQuestions.length) * 100;


    progressBar.style.width =
        progress + "%";


    /*
        Disable Next Question
        until an answer is selected
    */

    nextQuestionButton.disabled =
        true;

    answerSelected =
        false;


    /*
        Reset button text
    */

    nextQuestionButton.textContent =
        "Next Question →";

}


/* =====================================================
   CHECK ANSWER
   ===================================================== */

function checkAnswer(
    clickedButton,
    selectedAnswer
) {

    /*
        Prevent selecting multiple
        answers for the same question.
    */

    if (answerSelected) {

        return;

    }


    answerSelected =
        true;


    const correctAnswer =
        quizQuestions[
            currentQuestion
        ].correct;


    const allAnswerButtons =
        document.querySelectorAll(
            ".answer"
        );


    /*
        CORRECT ANSWER
    */

    if (
        selectedAnswer ===
        correctAnswer
    ) {

        clickedButton.classList.add(
            "correct"
        );


        score++;


        scoreDisplay.textContent =
            `Score: ${score}`;


    }


    /*
        WRONG ANSWER
    */

    else {

        clickedButton.classList.add(
            "wrong"
        );


        /*
            Also show the correct answer
            so the player knows what
            they missed.
        */

        allAnswerButtons.forEach(
            button => {

                if (
                    button.textContent.trim()
                    === correctAnswer
                ) {

                    button.classList.add(
                        "correct"
                    );

                }

            }
        );

    }


    /*
        Disable all answers
        after selection.
    */

    allAnswerButtons.forEach(
        button => {

            button.disabled =
                true;

        }
    );


    /*
        Allow Next Question
    */

    nextQuestionButton.disabled =
        false;

}


/* =====================================================
   NEXT QUESTION
   ===================================================== */

nextQuestionButton.addEventListener(
    "click",
    () => {

        if (!answerSelected) {

            return;

        }


        currentQuestion++;


        /*
            More questions remain
        */

        if (
            currentQuestion
            < quizQuestions.length
        ) {

            loadQuestion();

            return;

        }


        /*
            QUIZ FINISHED
        */

        finishQuiz();

    }
);


/* =====================================================
   QUIZ FINISHED
   ===================================================== */

function finishQuiz() {

    questionNumber.textContent =
        "Challenge Complete ♡";


    questionText.textContent =
        `You scored ${score} out of ${quizQuestions.length}.`;


    answersContainer.innerHTML = `
        <div class="quiz-result">
            <p>
                ${
                    score === quizQuestions.length
                    ? "You really know their story. ♡"
                    : score >= 3
                    ? "Not bad... you know them quite well. ♡"
                    : "Looks like there are a few more memories to discover. ♡"
                }
            </p>
        </div>
    `;


    progressBar.style.width =
        "100%";


    nextQuestionButton.textContent =
        "Challenge Complete ♡";


    nextQuestionButton.disabled =
        true;

}


/* =====================================================
   START QUIZ
   ===================================================== */

loadQuestion();