//Random background images.
const images = ["0.jpg", "1.jpg", "2.jpg"];

const chosenImages = images[Math.floor(Math.random() * images.length)];

//JacaScript를 사용하여 HTML element 만들기
const backgound = document.createElement("img");
backgound.src = `img/${chosenImages}`;

document.body.appendChild(backgound); // JS에 존재하던 img 태그를 body(HTML로)