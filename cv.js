let words = document.getElementById("words");

const textLoad = () => {
    setTimeout(() => {
        words.textContent = "Developer";
    }, 0);
    setTimeout(() => {
        words.textContent = "Traveler";
    }, 2000);
    setTimeout(() => {
        words.textContent = "Happy person";
    }, 4000);
    }

    textLoad();

    console.log();

