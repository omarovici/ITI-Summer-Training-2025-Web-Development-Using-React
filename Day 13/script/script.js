let temperature = 25;
if (temperature > 30) {
    console.log("It's a hot day!");
}


let hour = 14;
if (hour < 12) {
    console.log("Good morning!");
} else if (hour < 18) {
    console.log("Good afternoon!");
} else {
    console.log("Good evening!");
}


let isMember = true;
let cartTotal = 120;
if (isMember) {
    if (cartTotal > 100) {
        console.log("You qualify for free shipping and 10% discount!");
    } else {
        console.log("You get member-only free shipping!");
    }
} else {
    console.log("Sign up for membership to get discounts!");
}


let fruit = "apple";
switch (fruit) {
    case "banana":
        console.log("Yellow and curved");
        break;
    case "apple":
        console.log("Red or green and crunchy");
        break;
    case "orange":
        console.log("Orange and juicy");
        break;
    default:
        console.log("Unknown fruit");
}


let isRaining = true;
let weatherMessage = isRaining ? "Bring an umbrella" : "Enjoy the sunshine";
console.log(weatherMessage);


console.log("Countdown:");
for (let i = 5; i > 0; i--) {
    console.log(i);
}
let password = "";
while (password.length < 8) {
    password += Math.floor(Math.random() * 10);
    console.log("Generating password...");
}
console.log(`Your new password: ${password}`);


function mideArea(width, height) {
    return width * height;
}
console.log(`Area: ${mideArea(5, 3)}`); // 15


function mideEven(num) {
    return num % 2 === 0;
}
console.log(`Is 10 even? ${mideEven(10)}`); // true


let mide = (name) => `Hello, ${name}!`;
console.log(mide("Youssef")); // "Hello, Youssef!"


let book = {
    title: "JavaScript: The Good Parts",
    author: "Douglas Crockford",
    year: 2008,
    isAvailable: true,
    mideFunc: function () {
        return this.isAvailable ? "Available" : "Checked out";
    }
};
console.log(book.mideFunc()); // "Available"


let student = {
    name: "Youssef Mahmoud",
    grade: "A"
};
student.age = 20;
console.log("Age : ", student.age) // 20

student.grade = "A+";
console.log("Grade : ", student.grade) // A+

delete student.age;
console.log(student);


let colors = ["red", "green", "blue"];
console.log(colors[1]); // "green"
console.log("Length : ", colors.length); // 3


let numbers = [1, 2, 3];

numbers.push(4);


numbers.pop();


numbers.unshift(0);


numbers.shift();
console.log(numbers); // [1, 2, 3]


let doubled = numbers.map(num => num * 2);
console.log(doubled); // [2, 4, 6]


let evenNumbers = numbers.filter(num => num % 2 === 0);
console.log(evenNumbers); // [2]


let el = document.getElementById("example");
console.log(el.innerHTML);  // "Welcome <span style="display:none">hidden</span> to <b>JavaScript</b>!"
console.log(el.innerText);  // "Welcome to JavaScript!"
console.log(el.textContent); // "Welcome hidden to JavaScript!"


let newParagraph = document.createElement("p");
newParagraph.textContent = "This is a new paragraph";
document.body.appendChild(newParagraph);


let img = document.createElement("img");
let container = document.getElementById("image_container");

img.src = "image/SE.png";
img.alt = "Description";

container.appendChild(img)


let elementToRemove = document.getElementById("old-element");
elementToRemove.remove();


let parent = document.getElementById("parent");
let child = document.getElementById("child");
parent.removeChild(child);


let button = document.getElementById('myButton');


button.addEventListener('click', function () {
    console.log('Button was clicked!');
    this.textContent = 'Clicked!'; // Change button text
});


let box = document.getElementById('hoverBox');


box.addEventListener('mouseenter', function () {
    this.style.backgroundColor = 'lightblue';
});


box.addEventListener('mouseleave', function () {
    this.style.backgroundColor = 'white';
});


box.addEventListener('mousemove', function (e) {
    console.log(`X: ${e.clientX}, Y: ${e.clientY}`);
});


document.addEventListener('keydown', function (e) {
    console.log(`Key pressed: ${e.key}`);


    if (e.key === 'Escape') {
        console.log('Escape key pressed');
    }
});


let inputField = document.getElementById('textInput');
inputField.addEventListener('keyup', function (e) {
    console.log(`Input value: ${this.value}`);
});


document.getElementById('buttonContainer').addEventListener('click', function (e) {
    if (e.target.classList.contains('action-btn')) {
        console.log(`Button ${e.target.id} clicked`);
    }
});


document.getElementById('link').addEventListener('click', function (e) {
    e.preventDefault(); 


    console.log('Event properties:');
    console.log('Target:', e.target); 
    console.log('Current Target:', e.currentTarget); 
});


let draggable = document.getElementById('draggable');
let dropzone = document.getElementById('dropzone');


draggable.addEventListener('dragstart', function (e) {
    e.dataTransfer.setData('text/plain', this.id);
    this.classList.add('dragging');
});


draggable.addEventListener('dragend', function () {
    this.classList.remove('dragging');
});


dropzone.addEventListener('dragover', function (e) {
    e.preventDefault();
    this.classList.add('dragover');
});


dropzone.addEventListener('dragleave', function () {
    this.classList.remove('dragover');
});


dropzone.addEventListener('drop', function (e) {
    e.preventDefault();
    this.classList.remove('dragover');


    let id = e.dataTransfer.getData('text/plain');
    let draggedElement = document.getElementById(id);
    this.appendChild(draggedElement);
});