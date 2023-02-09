// Activity 1

const placeholder = document.getElementById("placeholder");
const input = document.getElementById("input");
const submit = document.getElementById("submit");
const list = document.getElementById("list");

// Activity 2
submit.addEventListener("click", () =>{
    placeholder.style.color ="purple";
    placeholder.textContent = input.value;
});

//Activity 3
submit.addEventListener("click", () =>{
    placeholder.style.color ="goldenrod";
    placeholder.textContent = `<li>${input.value}</li>`;
});


//Activity 4
submit.addEventListener("click", () =>{
    placeholder.style.color ="goldenrod";
    placeholder.textContent = `<li>${input.value}</li>`;
    list.innerHTML = `<li>${input.value}</li>`;
});
