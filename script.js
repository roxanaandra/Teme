
let words = document.getElementById("words");

const textLoad = () => {
    setInterval(() => {
        words.textContent = "Developer";
    }, 3000);
    setInterval(() => {
        words.textContent = "Roxana";
    }, 6000);
    setInterval(() => {
        words.textContent = "a happy person";
    }, 10000);
    setInterval(() => {
        words.textContent = "a traveler";
    }, 12000);
    }

    textLoad();

    console.log();



    const productContainers = [...document.querySelectorAll('.container_content_work')];
    const nxtButton = [...document.querySelectorAll('.nxt-btn')];
    const preButton = [...document.querySelectorAll('.pre-btn')];

    productContainers.forEach((item, i) =>{
        let containerDimensions = item.getBoundingClientRect();
        let containerWidth = containerDimensions.width;

        nxtButton[i].addEventListener('click', () => {

            item.scrollLeft += containerWidth;
        })

        preButton[i].addEventListener('click', () => {
        })
    })


    

