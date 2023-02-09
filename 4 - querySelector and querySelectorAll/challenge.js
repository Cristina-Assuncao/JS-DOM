const vegList = document.querySelectorAll

// Activity 1
const allList = document.querySelectorAll("li");
console.log(allList);
const myList = document.querySelector("li");
console.log(myList);
const myHeading = document.querySelector("#heading"); // = const myElement = document.getElementById("heading");
console.log(myHeading);
const myListParent = document.querySelector(".list-parent");
console.log(myListParent);
const myGreen = document.querySelectorAll(".green");
console.log(myGreen);

// Activity 2
const listItems = document.querySelectorAll("li:nth-child(even)");
console.log(listItems);
console.log(listItems.length);

const listAll = document.querySelectorAll("li:nth-child(odd)"); //extra
console.log(listAll);
console.log(listAll.length);

// Activity 3
for (let i = 0; i < listItems.length; i++){
    listItems[i].style.color = "lightgreen"
};
for (let i = 0; i < listAll.length; i++){ //extra
    listAll[i].style.color = "pink"
}

//Challenge
/*
const colours = ['red', 'yellow', 'goldenrod', 'lightgreen', 'blue', 'purple'];
const myItems = document.querySelectorAll("li");
let x = 0;
for (let  i = 0; i < myItems.length; i++) {
    myItems[i].style.color  =  colours[x];
    x++
    if (x == colours.length){ // if x gets to the last item on the array ('purple') the next x starts counting from 0 again
        x = 0
    }
};
*/