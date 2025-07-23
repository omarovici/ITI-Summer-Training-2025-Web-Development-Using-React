const mainArea = document.getElementById("container");
const createBoxBtn = document.getElementById("addBoxBtn");
const deleteBoxBtn = document.getElementById("removeBoxBtn");

createBoxBtn.addEventListener("click", () => {
    const newDiv = document.createElement("div");
    newDiv.textContent = "Element created dynamically.";

    newDiv.addEventListener("mouseenter", () => {
        console.log("Hovering over the box.");
    });

    newDiv.addEventListener("dblclick", () => {
        alert("Box double-clicked!");
    });

    newDiv.addEventListener("click", () => {
        newDiv.textContent = "Box was clicked.";
    });

    mainArea.appendChild(newDiv);
});

deleteBoxBtn.addEventListener("click", () => {
    if (mainArea.lastChild) {
        mainArea.removeChild(mainArea.lastChild);
    }
});

document.getElementById("createBtn").addEventListener("click", function () {
    let panel = document.createElement("div");
    panel.className = "panel";
    panel.id = "panel1";
    let info = document.createTextNode("Dynamic panel created!");
    panel.appendChild(info);

    panel.addEventListener("mouseover", function () {
        panel.style.backgroundColor = "#cceeff";
    });

    panel.addEventListener("mouseout", function () {
        panel.style.backgroundColor = "#fff";
    });

    document.body.appendChild(panel);
});

document.getElementById("removeBtn").addEventListener("click", function () {
    let panel = document.getElementById("panel1");
    if (panel) panel.remove();
});

let heading = document.createElement("h2");
heading.textContent = "ClassList Demo";
document.body.appendChild(heading);

heading.classList.add("emphasis", "right");
heading.classList.remove("emphasis");
heading.classList.replace("right", "left");
console.log(heading.classList.contains("left"));

function showScope() {
    let y = 10;
    console.log("y inside function:", y);
}
showScope();

var outsideVar = "var variable";
if (true) {
    let insideLet = "let variable";
    const insideConst = "const variable";
    console.log(insideLet, insideConst);
}
console.log(outsideVar);

function welcome(person = "Anon", years = "--") {
    console.log(`Hello ${person}, you are ${years} years old.`);
}
welcome("Layla", 27);
welcome();

let digits = [7, 8, 9];
let allDigits = [5, ...digits, 10];
console.log("Spread:", allDigits);

function addAll(...vals) {
    console.log("Rest:", vals.reduce((sum, n) => sum + n));
}
addAll(2, 4, 6);

let learner = {
    fullName: "Karim",
    years: 23,
    scores: { physics: 88, history: 92 }
};
let { fullName, scores: { physics } } = learner;
console.log(fullName, physics);

let shades = ["yellow", "purple", "black"];
let [mainShade, , lastShade] = shades;
console.log(mainShade, lastShade);

let testBtn = document.createElement("button");
testBtn.textContent = "Try this";
document.body.appendChild(testBtn);

testBtn.addEventListener("click", function () {
    console.log("Normal function:", this);
});
testBtn.addEventListener("click", () => {
    console.log("Arrow function:", this);
});

let veggies = ["carrot", "potato", "onion"];
for (let veg of veggies) console.log("for of:", veg);

let bike = { make: "Honda", type: "CBR", year: 2021 };
for (let prop in bike) console.log(`for in: ${prop} = ${bike[prop]}`);

let people = [
    { fullName: "Maya", years: 18 },
    { fullName: "Tarek", years: 28 },
    { fullName: "Nour", years: 24 },
    { fullName: "Tarek", years: 32 }
];

let fullNames = people.map(p => p.fullName);
console.log("map:", fullNames);

let grownUps = people.filter(p => p.years >= 21);
console.log("filter:", grownUps);

let tarekPerson = people.find(p => p.fullName === "Tarek");
console.log("find:", tarekPerson);

let tarekIdx = people.findIndex(p => p.fullName === "Tarek");
console.log("findIndex:", tarekIdx);