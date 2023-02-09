// Activity 1 + 2
const list = document.getElementsByTagName("li"); // target the list elements and store in a constant
console.log(list.length);
console.log(list[0]);
console.log(list[3]);
console.log(list[0].style.color="red");

console.log(list) // logged in the console to check that it's doing what I want

// Activity 3
for (i = 0; i < list.length; i++){
    list[i].style.color = "orange";
};

// Activity 4
const notOrange = document.getElementsByClassName("not-orange");
for (i = 0; i < notOrange.length; i++){
    notOrange[i].style.color = "red"
};