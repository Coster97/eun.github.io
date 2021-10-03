

const images = ["01.jpg","02.jpg","04.jpg","05.jpg","06.jpg"]


const randomImg= images[Math.floor(Math.random()*images.length)];

const bgImage = document.createElement("img");

bgImage.classList.add("img")
 
bgImage.src = `background/${randomImg}`;

document.body.appendChild(bgImage)




