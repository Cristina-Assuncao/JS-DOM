
myBackground = document.getElementById("back");
myFront = document.getElementById("front");

myBackground.style.display ="none";


const myHeading = document.getElementById("heading");
myHeading.addEventListener("click",()=>{
    myHeading.style.color = "red";
    myBackground.style.display = "block";
    myFront.style.display = "none";

});
const myParagraph = document.getElementById("paragraph");
myParagraph.addEventListener("click", ()=>{
    myParagraph.style.color = "blue"
});
const myHeadingTwo = document.getElementById("heading2");
myHeadingTwo.addEventListener("click", ()=>{
    myHeadingTwo.style.color = "gold"
});
const myHeadingThree = document.getElementById("heading3");
myHeadingThree.addEventListener("click", ()=>{
    myHeadingThree.style.color = "forestgreen"
});
const myHeadingFour = document.getElementById("heading4");
myHeadingFour.addEventListener("click", ()=>{
    myHeadingFour.style.color = "pink"
});
