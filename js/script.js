// DATA
const shoppingBag = ["Pane", "Biscotti", "Mele", "Banane", "Prosciutto", "Sottilette", "Zucchero", "Farina", "Uova", "Spaghetti", "Olive", "Pollo"]

// PREPARATION
let list = "";
i = 0;

// CYCLE
while (i < shoppingBag.length) {
    list += `<li>${shoppingBag[i]}</li>`;
    i++;
}

// OUTPUT
document.querySelector("ul").innerHTML = list;

