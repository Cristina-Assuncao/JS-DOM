// Activity 1 + 2 + 3 + Challenge
const input = document.getElementById("input")
const button = document.getElementById("submit")
let list = document.getElementsByTagName("ul")[0];
const showhidebtn = document.getElementById("showhide-btn");

button.addEventListener("click", ()=> {
    let listItem = document.createElement("li"); //make a ne <li>
    listItem.textContent = input.value; //that's going to be whatever we write in the input (box) in the webpage
    list.appendChild(listItem);
    input.value =""; //clear the input field when the user presses the “submit” button
});

showhidebtn.addEventListener("click", () => {
    let list = document.getElementsByTagName("ul")[0];
    if(list.style.display == "none") {
        list.style.display = "block";
        showhidebtn.textContent = "hide";
    } else {
        list.style.display = "none";
        showhidebtn.textContent = "show";
    }
});