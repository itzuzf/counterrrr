const counter = document.querySelector("#num");
const i = document.querySelector("#increase");
const d = document.querySelector("#decrease");
const r = document.querySelector("#r");

let count = 0;
counter.textContent = count;

// Function to update padding based on count
function updatePadding() {
    let maxCount = 1000;       // the count at which padding reaches max
    let maxPadding = 200;      // max horizontal padding in px
    let basePadding = 40;      // starting padding

    // calculate padding proportionally
    let newPadding = basePadding + ((maxPadding - basePadding) * (count / maxCount));
    if (newPadding > maxPadding) newPadding = maxPadding;

    counter.style.paddingLeft = `${newPadding}px`;
    counter.style.paddingRight = `${newPadding}px`;
}

i.addEventListener("click", () => {
    count++;
    counter.textContent = count;
    updatePadding();
});

d.addEventListener("click", () => {
    if (count > 0) {
        count--;
        counter.textContent = count;
        updatePadding();
    }
});

r.addEventListener("click", () => {
    count = 0;
    counter.textContent = count;
    updatePadding();
});