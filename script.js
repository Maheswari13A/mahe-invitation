/* ========================================
   GET ELEMENTS
======================================== */

const noBtn =
    document.getElementById("noBtn");

const yesBtn =
    document.getElementById("yesBtn");

const questionScreen =
    document.getElementById("questionScreen");

const answerScreen =
    document.getElementById("answerScreen");

const whereBtn =
    document.getElementById("whereBtn");

const secondPage =
    document.getElementById("secondPage");

const imageRevealBtn =
    document.getElementById("imageRevealBtn");

const imageContainer =
    document.getElementById("imageContainer");

const loveMessage =
    document.getElementById("loveMessage");

const floatingNames =
    document.getElementById("floatingNames");

const dolphinOcean =
    document.getElementById("dolphinOcean");

const dolphins =
    document.getElementById("dolphins");


/* ========================================
   NO BUTTON — RUN AWAY
======================================== */

function moveNoButton() {

    const buttonWidth =
        noBtn.offsetWidth;

    const buttonHeight =
        noBtn.offsetHeight;

    const padding = 20;


    const maxX =
        Math.max(
            padding,
            window.innerWidth -
            buttonWidth -
            padding
        );


    const maxY =
        Math.max(
            padding,
            window.innerHeight -
            buttonHeight -
            padding
        );


    const randomX =
        padding +
        Math.random() *
        (maxX - padding);


    const randomY =
        padding +
        Math.random() *
        (maxY - padding);


    noBtn.style.position = "fixed";

    noBtn.style.left =
        randomX + "px";

    noBtn.style.top =
        randomY + "px";
}


/* Desktop */

noBtn.addEventListener(
    "mouseenter",
    moveNoButton
);


/* Mobile */

noBtn.addEventListener(
    "touchstart",
    function (event) {

        event.preventDefault();

        moveNoButton();
    }
);


/* Click */

noBtn.addEventListener(
    "click",
    function (event) {

        event.preventDefault();

        moveNoButton();
    }
);


/* ========================================
   YES BUTTON
   PAGE 1 → PAGE 2
======================================== */

yesBtn.addEventListener(
    "click",
    function () {

        questionScreen.style.display =
            "none";

        answerScreen.style.display =
            "block";
    }
);


/* ========================================
   PAGE 2 → PAGE 3
======================================== */

whereBtn.addEventListener(
    "click",
    function () {

        /*
           Hide the first card.
        */

        document
            .querySelector(".card")
            .style.display = "none";


        /*
           Show Page 3.
        */

        secondPage.style.display =
            "flex";


        /*
           Start dolphins ONLY when
           Page 3 becomes visible.
        */

        startDolphins();
    }
);


/* ========================================
   FLOATING NAMES
======================================== */

const names = [
    "Rohit",
    "Jagan",
    "Kalai"
];


function createFloatingName() {

    /*
       Safety check.
    */

    if (!floatingNames) {
        return;
    }


    const name =
        document.createElement("span");


    name.className =
        "floating-name";


    /*
       Random name.
    */

    name.textContent =
        names[
            Math.floor(
                Math.random() *
                names.length
            )
        ];


    /*
       Random horizontal position.
    */

    name.style.left =
        Math.random() * 100 + "vw";


    /*
       Random font size.
    */

    name.style.fontSize =
        (
            Math.random() * 12 + 22
        ) + "px";


    /*
       Random animation duration.
    */

    name.style.animationDuration =
        (
            Math.random() * 6 + 9
        ) + "s";


    /*
       Random delay.
    */

    name.style.animationDelay =
        Math.random() * 2 + "s";


    /*
       Add to page.
    */

    floatingNames.appendChild(name);


    /*
       Remove later.
    */

    setTimeout(
        function () {

            name.remove();

        },
        18000
    );
}


/* ========================================
   INITIAL FLOATING NAMES
======================================== */

for (
    let i = 0;
    i < 15;
    i++
) {

    setTimeout(
        createFloatingName,
        i * 500
    );
}


/* ========================================
   CONTINUOUS FLOATING NAMES
======================================== */

setInterval(
    function () {

        createFloatingName();

    },
    900
);


/* ========================================
   IMAGE REVEAL
======================================== */

imageRevealBtn.addEventListener(
    "click",
    function () {

        /*
           Make Page 3 image-only.
        */

        secondPage.classList.add(
            "image-only"
        );


        /*
           Show image.
        */

        imageContainer.style.display =
            "flex";


        /*
           Show love message.
        */

        loveMessage.style.display =
            "block";
    }
);


/* ========================================
   DOLPHIN SYSTEM
   PAGE 3 ONLY
======================================== */

let dolphinInterval = null;


/* ========================================
   CREATE ONE DOLPHIN
======================================== */

function createDolphin() {

    /*
       Safety check.
    */

    if (
        !dolphinOcean ||
        !dolphins
    ) {
        return;
    }


    /*
       Only create dolphins when
       Page 3 is visible.
    */

    if (
        getComputedStyle(secondPage)
            .display === "none"
    ) {
        return;
    }


    /*
       Create dolphin element.
    */

    const dolphin =
        document.createElement("div");


    dolphin.className =
        "dolphin";


    /*
       Use dolphin emoji.
    */

    dolphin.textContent =
        "🐬";


    /*
       Random horizontal position.
    */

    dolphin.style.left =
        (
            Math.random() * 86 + 5
        ) + "%";


    /*
       Start near the water.
    */

    dolphin.style.top =
        (
            Math.random() * 12 + 70
        ) + "%";


    /*
       Random size.
    */

    const sizes = [
        "small",
        "medium",
        "large"
    ];


    dolphin.classList.add(
        sizes[
            Math.floor(
                Math.random() *
                sizes.length
            )
        ]
    );


    /*
       Random jump duration.
    */

    const duration =
        Math.random() * 1.3 + 3.2;


    dolphin.style.animationDuration =
        duration + "s";


    /*
       Add dolphin to the ocean.
    */

    dolphins.appendChild(
        dolphin
    );


    /*
       Remove dolphin after
       animation finishes.
    */

    setTimeout(
        function () {

            dolphin.remove();

        },
        (duration + 0.5) * 1000
    );
}


/* ========================================
   START DOLPHINS
======================================== */

function startDolphins() {

    /*
       Prevent duplicate intervals.
    */

    if (
        dolphinInterval !== null
    ) {
        return;
    }


    /*
       Create several dolphins
       immediately.
    */

    for (
        let i = 0;
        i < 5;
        i++
    ) {

        setTimeout(
            function () {

                createDolphin();

            },
            i * 650
        );
    }


    /*
       Continue creating dolphins.
    */

    dolphinInterval =
        setInterval(
            function () {

                createDolphin();

            },
            1300
        );
}


/* ========================================
   STOP DOLPHINS
======================================== */

function stopDolphins() {

    /*
       Stop interval.
    */

    if (
        dolphinInterval !== null
    ) {

        clearInterval(
            dolphinInterval
        );

        dolphinInterval = null;
    }


    /*
       Remove existing dolphins.
    */

    if (dolphins) {

        dolphins
            .querySelectorAll(
                ".dolphin"
            )
            .forEach(
                function (dolphin) {

                    dolphin.remove();
                }
            );
    }
}