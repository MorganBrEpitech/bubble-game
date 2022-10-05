//compteur
const compteur = document.querySelector('h1');
let counter = 0;

//function bubble
const bubbleCreator = function (){

    //bubble element
    const bubble = document.createElement("span");
    bubble.classList.add("bubble");
    document.body.appendChild(bubble);

    //bubble style
    const size = Math.random() *200 + 100 + "px";
    bubble.style.height = size;
    bubble.style.width = size;
    bubble.style.top = Math.random() * 100 + 50 + "%";
    bubble.style.left = Math.random() * 100 + "%";
    const plusMinus = Math.random() >0.50 ? 1 : -1; //ternaire, 1 fois sur 2 on fait *-1
    bubble.style.setProperty('--left', Math.random() * 100 * plusMinus + "%");
    var bubblecolor = Math.random() * 1000000;
    var intbubblecolor = "#" + Math.trunc(bubblecolor);
    bubble.style.setProperty('--bgcolor', intbubblecolor);

    bubble.addEventListener('click', () => {
        counter++;
        compteur.textContent = counter;
        bubble.remove();
    });

    setTimeout(() => {
            bubble.remove();
        }, 8000);
    };

//délai apparition des bulles
setInterval(bubbleCreator, 300);