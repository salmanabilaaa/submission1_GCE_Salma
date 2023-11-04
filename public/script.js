let menu = document.querySelector('#menu-bar');
let navbar = document.querySelector('.navbar');

menu.onclick = () =>{

  menu.classList.toggle('fa-times');
  navbar.classList.toggle('active');

}

window.onscroll = () =>{

  menu.classList.remove('fa-times');
  navbar.classList.remove('active');

  if(window.scrollY > 60){
    document.querySelector('#scroll-top').classList.add('active');
  }else{
    document.querySelector('#scroll-top').classList.remove('active');
  }

}

const texts = [
  "UI/UX Designer",
  "Business Analyst",
  "System Analyst"
];


const typingTextElement = document.querySelector(".typing-text");

let textIndex = 0; 
let charIndex = 0;

function type() {
  if (textIndex === texts.length) {
    textIndex = 0; 
  }

  const currentText = texts[textIndex]; 
  const currentChar = currentText[charIndex]; 

  if (charIndex < currentText.length) {
    typingTextElement.textContent += currentChar;
    charIndex++;
    setTimeout(type, 100); 
  } else {
    setTimeout(erase, 1000); 
  }
}

function erase() {
  const currentText = texts[textIndex];

  if (charIndex > 0) {
    typingTextElement.textContent = currentText.substring(0, charIndex - 1);
    charIndex--;
    setTimeout(erase, 50); 
  } else {
    textIndex++; 
    setTimeout(type, 500); 
  }
}
type();

