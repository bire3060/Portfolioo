
let menu = document.querySelector("#menu");
let arrList = document.querySelector("#arrList")
let navContent = document.querySelector(".nav-content");
let nav = document.getElementById("nav");
let deleteMenu = document.getElementById("delete-menu");
let line = document.querySelector(".line");
var first = document.querySelector("#first")
let burgerOpacity = document.getElementById("burger-opacity");









 



window.addEventListener("scroll", hanldeScroll);
function hanldeScroll() {
    nav.classList.toggle("navBlackWhite-toggle", scrollY > 83);
    line.classList.toggle("line-app-disapp", scrollY > 117)
}

menu.addEventListener("click", handleClick);

function handleClick() {
    first.style.paddingTop = "430px";
 
    navContent.classList.add("nav-content-toggle")
    burgerOpacity.style.animation="burger 0.7s ease-in-out"
    


   
    // clickDelete();

    menu.style.display = "none";
    deleteMenu.style.display = "block";
}
deleteMenu.addEventListener("click", handleDelClick);
function handleDelClick() {
  
   
    first.style.paddingTop = "300px"
   
    deleteMenu.style.display = "none";
   
    menu.style.display = "block";
    // burgerOpacity.style.animation="burgerOut 0.7s ease-in-out forwards"
    //  clickDelete();
     navContent.classList.remove("nav-content-toggle")
    

}
function clickDelete() {
    navContent.classList.toggle("nav-content-toggle")
    
}
let arr = ["I am Freelancer", "I am Creative", "I am Web Devloper"];
let letterIndex = 0;
let wordIndex = 0;
let word = "";
let letter = "";
(function type() {
    if (wordIndex === arr.length) {
        wordIndex = 0;
    }
    word = arr[wordIndex];
    letter = word.slice(0, ++letterIndex);
    arrList.innerText = letter;
    if (letter.length === word.length) {
        wordIndex++;
        letterIndex = 0;
    }
    setTimeout(type, 300)
}())
let arrContainer = [
    {
        id: 1,
        img: "../img/smile1.webp",
        comments: " Lorem, ipsum dolor sit amet consectetur adipisicing elit. Enim blanditiis atque maiores veritatis unde corrupti eligendi! Velit obcaecati aliquam incidunt, molestias voluptas id sequi error ex, ipsum beatae consectetur nesciunt.  ",
        authorName: "Malika Arora",
        Work: "Designer"
    },
    {
        id: 2,
        img: "../img/smile2.webp",
        comments: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Enim blanditiis atque maiores veritatis unde corrupti eligendi! Velit obcaecati aliquam incidunt, molestias voluptas id sequi error ex, ipsum beatae consectetur nesciunt. ",
        authorName: "Katrina Kaif",
        Work: "Developer"
    },
    {
        id: 3,
        img: "../img/smile3.webp",
        comments: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Enim blanditiis atque maiores veritatis unde corrupti eligendi! Velit obcaecati aliquam incidunt, molestias voluptas id sequi error ex, ipsum beatae consectetur nesciunt. ",
        authorName: "Kate Winslet",
        Work: "Progrmammer"
    },
    {
        id: 4,
        img: "../img/smile4.webp",
        comments: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Enim blanditiis atque maiores veritatis unde corrupti eligendi! Velit obcaecati aliquam incidunt, molestias voluptas id sequi error ex, ipsum beatae consectetur nesciunt. ",
        authorName: "Ayesha Takia",
        Work: "Editor"
    },
]
// let img = document.querySelector("#images")
let authorName = document.querySelector("#authorName")
let comments = document.querySelector("#comments")
let work = document.querySelector("#work")
let img = document.querySelector(".img")
let togle = document.querySelector(".togle")
let prevBtn = document.querySelector("#prev-btn")
let nextBtn = document.querySelector("#next-btn")
let animate = document.getElementById("animate");
;
window.addEventListener("DOMContentLoaded", handleLoad);
let person = 0;

function handleLoad() {
    contents()
}
prevBtn.addEventListener("click", handleBack)
function handleBack() {
    prevBtn.style.backgroundColor = " #ff6666"
    nextBtn.style.backgroundColor = "white "
    if (person >= 1
    ) {
        person--
        animate.classList.remove("toggle1");
        void animate.offsetWidth;
        animate.classList.add("toggle1")
        contents()
    }
}

nextBtn.addEventListener("click", handleNext)
function handleNext() {
    if (person < arrContainer.length - 1) {
        prevBtn.style.backgroundColor = "white"
        nextBtn.style.backgroundColor = " #ff6666"
        person++
        animate.classList.remove("toggle1");
        void animate.offsetWidth;
        animate.classList.add("toggle1")
        contents()
    }
}
function contents(personItem) {
    personItem = arrContainer[person]
    img.src = personItem.img;
    comments.innerHTML = personItem.comments;
    authorName.innerHTML = personItem.authorName;
    work.innerHTML = personItem.Work;
}
function squareDigits(num){
    //may the code be with you
   console.log( Math.pow(num,2))
  }
  squareDigits(9)



