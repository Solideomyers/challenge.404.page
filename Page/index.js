// references
const backButton = document.getElementById('back');
const backSpan = document.getElementById('back-span');
const titleH1 = document.getElementById('text');
const textParah = document.getElementById('paragraph');
const footText = document.getElementById('foot');
const typedText = document.getElementById('typed-text');

const text = 'solideomyers'; // Text objetive for animate
let index = 0;

// animation typewriter
function typeWriter() {
  if (index < text.length) {
    typedText.textContent += text.charAt(index);
    index++;
    setTimeout(typeWriter, 120); 
  }
};

typeWriter();

// add event button
backButton.addEventListener('click', () => {
    window.location.href = 'https://linkedin.com/in/franciscomyers';
  });  

backButton.addEventListener('mouseover', () => {
    backButton.style.backgroundColor = "#fff";
    backButton.style.color = 'black';
    backButton.style.border = 'solid #333 2px';
    backButton.style.borderRadius = '5px';
    backButton.style.color = '#333';
    backSpan.style.color = '#333';
    backButton.style.boxShadow = '-5px 5px 12px #333';
    backButton.style.transition = 'all 0.5s ease-out';
    backSpan.style.fontWeight = '700';
});

backButton.addEventListener('mouseleave', () => {
    backButton.style.color = '#fff';
    backButton.style.backgroundColor = "#333";
    backButton.style.border = 'none';
    backButton.style.borderRadius = '0';
    backSpan.style.color = '#fff';
    backButton.style.boxShadow = 'none';
});

titleH1.addEventListener('mouseover', () => {
    titleH1.style.textShadow = '-2px -2px 10px #333';
    titleH1.style.color = '#fff';
    titleH1.style.textDecoration = 'underline';
    titleH1.style.textDecorationStyle = 'dotted';
    titleH1.style.textDecorationColor = '#333';
    titleH1.style.transition = 'all 0.3s ease-in';
    
});

titleH1.addEventListener('mouseout', () => {
    titleH1.style.textShadow = 'none';
    titleH1.style.color = '#333';
    titleH1.style.textDecoration = 'none';
});

textParah.addEventListener('mouseover', () => {
    textParah.style.transform = 'scale(1.1)';
    textParah.style.transition = 'all 0.5 ease-out';
});

textParah.addEventListener('mouseleave', () => {
    textParah.style.transform = 'none';
});

