const slides = [
	{
		"image":"slide1.jpg",
		"tagLine":"Impressions tous formats <span>en boutique et en ligne</span>"
	},
	{
		"image":"slide2.jpg",
		"tagLine":"Tirages haute définition grand format <span>pour vos bureaux et events</span>"
	},
	{
		"image":"slide3.jpg",
		"tagLine":"Grand choix de couleurs <span>de CMJN aux pantones</span>"
	},
	{
		"image":"slide4.png",
		"tagLine":"Autocollants <span>avec découpe laser sur mesure</span>"
	}
]
let bannerImg = document.querySelector(".banner-img");
let bannerTxt = document.querySelector("#banner p");
let path = "assets/images/slideshow/";
let current = 0;
console.log(slides);


function showSlide() {
  bannerImg.src = path + slides[current].image;
  bannerTxt.innerHTML = slides[current].tagLine
}

let previous = document.querySelector(".previous");
let next = document.querySelector(".next");

next.addEventListener("click", nextSlide);
previous.addEventListener("click", previousSlide);

function nextSlide() {
  let lengthSlide = slides.length - 1;
  console.log(lengthSlide);
  console.log("current:"+current);
  if (current == lengthSlide) {
	  current = 0;
  } else {
	  current = current+1;
  }
  bannerImg.src = path + slides[current].image;
  bannerTxt.innerHTML = slides[current].tagLine;
  showBullet();
}

function previousSlide() {
  let lengthSlide = slides.length - 1;
  console.log(lengthSlide);
  console.log("current:"+current);
  if (current == 0) {
	  current = lengthSlide;
  } else {
	  current = current-1;
  }
  bannerImg.src = path + slides[current].image;
  bannerTxt.innerHTML = slides[current].tagLine;
  showBullet();
}

let dots = document.querySelector(".dots");
function showBullet() {
	dots.innerHTML  =  "";
	let i = 0;
	for (let variable of slides) {
		console.log(i);
		if (current == i ) {
			dots.innerHTML += "<div class=\"dot dot_selected\"></div";
		} else {
			dots.innerHTML += "<div class=\"dot\"></div";
		}
		i++;
	}
}

showSlide();
showBullet();




