//Random background images.
const images = ["BG_01.jpg", "BG_02.jpg", "BG_03.jpg", 
                "BG_04.jpg", "BG_05.jpg", "BG_06.jpg",
                "BG_07.jpg","BG_08.jpg","BG_09.jpg"];
const chosenImages = images[Math.floor(Math.random() * images.length)];

//JacaScript를 사용하여 HTML element 만들기
const backgound = document.createElement("img");
backgound.className = "backgroud";
backgound.src = `img/${chosenImages}`;
document.body.prepend(backgound); 
// JS에 존재하던 img 태그를 body(HTML로) appendChild 대신 Prepend 쓰면 img 태그가 최 상단에 존재