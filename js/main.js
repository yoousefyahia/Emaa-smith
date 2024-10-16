const texts = ["Developer", " Web Designer", "Freelancer"]; 
let i = 0; 
let currentText = ""; // النص الحالي
let isDeleting = false; // حالة الحذف
const typingSpeed = 100; // سرعة الكتابة
const erasingSpeed = 50; // سرعة الحذف
const delayBetweenWords = 1000; // تأخير بين الكلمات

function typeWriter() {
  const dynamicTextElement = document.querySelector(".dynamic-text");

  if (!isDeleting && i < texts.length) {
    currentText = texts[i];
    dynamicTextElement.textContent += currentText.charAt(dynamicTextElement.textContent.length);
    
    if (dynamicTextElement.textContent.length === currentText.length) {
      setTimeout(() => {
        isDeleting = true;
        setTimeout(typeWriter, erasingSpeed);
      }, delayBetweenWords);
    } else {
      setTimeout(typeWriter, typingSpeed);
    }
  }
  else if (isDeleting) {
    dynamicTextElement.textContent = currentText.slice(0, dynamicTextElement.textContent.length - 1);
    
    if (dynamicTextElement.textContent === "") {
      isDeleting = false;
      i = (i + 1) % texts.length; 
      setTimeout(typeWriter, typingSpeed);
    } else {
      setTimeout(typeWriter, erasingSpeed);
    }
  }
}
window.onload = typeWriter;

const barsIcon = document.querySelector(".fa-bars");
const navLinks = document.querySelector(".nav-links");

barsIcon.addEventListener("click", () => {
  navLinks.classList.toggle("active");
});
// portofolio
// let brand = document.querySelector("")