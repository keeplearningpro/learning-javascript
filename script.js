/* document.body.onload = addElement;

function addElement() {
    const newDiv = document.createElement("div");
    const newContent = document.createTextNode("Hi There and greetings");
    newDiv.appendChild(newContent);

    const currentDiv=document.getElementById("div1");

    document.body.insertBefore(newDiv , currentDiv);
} */


//Practice Exercise 03-07 - Creating an Object in JavaScript.

/* const backPack = {
    name : "Everyday Backpack",
    volume : 30,
    colour : "Grey",
    pocketNum : 15,
    strapLength : {
        left:26,
        right:26
    },
    lidOpen:false,
    toggleLid:function (lidStatus) {
        this.lidOpen = lidStatus;
    },
    newStraplength:function(lengthLeft,lengthRight){
        this.strapLength.left=lengthLeft;
        this.strapLength.right=lengthRight
    },
};

console.log("The backpack object:" , backPack);
console.log("The pocketNum value:" , backPack.pocketNum); */


/* import Backpack from  "./Backpack.js";

const everyDayPack = new Backpack(
"Everyday Backpack",
  30,
  "grey",
  15,
  26,
  26,
  false,
  "December 5, 2018 15:00:00 PST",
  "../assets/images/everyday.png"
);

const content = `
<figure class="backpack__image">
	<img src=${everyDayPack.image} alt=""/>
</figure>
<h1 class="backpack__name">Everyday Backpack</h1>
<ul class="backpack__features">
	<li class="packprop backpack__volume"> Volume:<span> ${everyDayPack.volume} </span></li>
	<li class="packprop backpack__color"> Color:<span> ${everyDayPack.color} </span></li>
	<li class="packprop backpack__age"> Age:<span> ${everyDayPack.backPackAge()} days old</span></li>
	<li class="packprop backpack__pockets"> Number of Pockets:<span> ${everyDayPack.pocketNum}</span></li>
	<li class="packprop backpack__strap"> Left Strap Length:<span> ${everyDayPack.strapLength.left} inches </span></li>
	<li class="packprop backpack__strap"> Right Strap Length:<span> ${everyDayPack.strapLength.right} inches </span></li>
	<li class="packprop backpack__lid"> Lid Status:<span> ${everyDayPack.lidOpen}</span></li>
</ul>
`;
const main = document.querySelector(".maincontent");

const newArticle = document.createElement("article");
newArticle.classList.add("backpack");
newArticle.setAttribute("id","everyday");
newArticle.innerHTML = content;

main.append(newArticle);



const navContent = `
      <li><a href="#">Home</a></li>
      <li><a href="#">About</a></li>
      <li><a href="#">Backpacks</a></li>
      <li><a href="#">Other things</a></li>
      <li><a href="#">Contact</a></li>
`;
const mainNav = document.createElement("nav")
mainNav.classList.add("main-navigation");
const navList = document.createElement("ul")
navList.innerHTML = navContent
mainNav.append(navList)

document.querySelector(".siteheader").append(mainNav);

console.log("The everydayPack object:", everyDayPack);
console.log("The pocketNum value:", everyDayPack.pocketNum);

 */


// function doSomeMath(a,b) {
// 	let c = a + b;
// 	return c;
// }

// const doMoreMath = function (a , b ) {
// 	let c = a*b;
// 	return c;
// };

/* (function(){
	let a = 4;
	let b = 6;
	let c = doSomeMath(a,b);
	console.log('The sum of a and b is :' , c);
})(); */

/* console.log("Do some math: " , doSomeMath(5,6));
console.log("Do some more math:" , doMoreMath(5,6)); */

// window.volume = 20;

// const greenPack = {
// 	name : "Frog Pack",
// 	color : "green",
// 	volume : 8,
// 	pocketNum : 3,
// 	newVolume: function (volume) {
// 		console.log("this.volume in the method:", this.volume);
// 		this.volume = volume;
// 		console.log("this.volume after update:" , this.volume);
		// (function() {
		// 	console.log("this.volume in nexted function", this.volume);
		// })();
		// (
		// 	() => {
		// 		console.log("this.volume in arrow function" , this.volume)
		// 	}
		// )();
// 	},
// }; 

//console.log(greenPack.newVolume(5));

/* const addPack = currentPack => {
	const newArticle = document.createElement("article");
	newArticle.innerHTML = `
		<h1>${currentPack.name}</h1>
		<ul>
			<li>Volume : ${currentPack.volume}</li>
			<li>Color : ${currentPack.color}</li>
			<li>Number of Pockets : ${currentPack.pocketNum}</li>
		</ul>
	`;
	return newArticle;
}
const main = document.querySelector(".maincontent");
main.append(addPack(greenPack));
 */

// Helper function to format currency numbers. Used by tipCalculator
// const formatter = (locale="en-US",currency = "USD" , value) => {
// 	let formattedValue = new Intl.NumberFormat(locale,{
// 		style:"currency",
// 		currency:currency,
// 	}).format(value);
// 	return formattedValue
// };

// // Callback receives finalTip object, creates and outputs table on the DOM.
// const printHtml = (finalTip) => {
// 	const tipTable = document.createElement("table");
// 	tipTable.innerHTML = `
// 		<tr>
// 			<td>Sum before tip:</td>
// 			<td>${finalTip.sum}</td>
// 		</tr>
// 		<tr>
// 			<td>Tip Percentage:</td>
// 			<td>${finalTip.percentage}</td>
// 		</tr>
// 		<tr>
// 			<td>Tip:</td>
// 			<td>${finalTip.tip}</td>
// 		</tr>
// 		<tr>
// 			<td>Total:</td>
// 			<td>${finalTip.total}</td>
// 		</tr>
// 	`;
// 	document.querySelector("main").append(tipTable);
// };

// // Create a finalTip object with all the data. Send it to the printHTML callback.

// const tipCalculator = (sum , percentage , locale , currency , printHtml) => {
// 	let tip = sum * (percentage/100);
// 	let total = sum + tip;

// 	const finalTip = {
// 		sum: formatter(locale,currency,sum),
// 		percentage : percentage + "%",
// 		tip : formatter(locale,currency,tip),
// 		total : formatter(locale,currency,total),
// 	};
// 	printHtml(finalTip);
// };

// tipCalculator(29.95, 18, "de-DE", "EUR", printHtml);


// const stuff = ["piggy", "headlamp", "pen", "pencil", "eraser", "water bottle"];

// const article = document.querySelector("article");
// const stuffList = document.createElement("ul");

// stuff.forEach((item)=>{
// 	let listItem = document.createElement("li");
// 	listItem.innerHTML=item;
// 	stuffList.append(listItem);

// });
// article.append(stuffList);

// const eventFunction = function (event) {
// 	var mouseX = event.pageX;
// 	var mouseY = event.pageY;
// 	console.warn(mouseX,mouseY);
// }

// window.addEventListener("mouseup",eventFunction,false)

const buttonHandle = document.querySelector(".cta-button");
console.log(buttonHandle);

buttonHandle.addEventListener("mouseenter",()=>{
	buttonHandle.classList.add("blue");
},false)


buttonHandle.addEventListener("mouseleave",() => {
	buttonHandle.classList.remove("blue");
},false)


function loadJson() {
	const xhttp= new XMLHttpRequest();
	xhttp.onload = function() {
		document.getElementById("demo").innerHTML=this.responseText;
	}
	xhttp.open("GET","samplefile.json",true);
	xhttp.send();
}
