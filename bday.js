const paper = document.getElementById('paper');
const envelopeCap = document.getElementById('envelopeCap');
const envelopeBodyLeft = document.getElementById('envelopeBodyLeft');
const envelopeBodyRight = document.getElementById('envelopeBodyRight');
const envelopeBodyBottom = document.getElementById('envelopeBodyBottom');

let toggleCapOpen = false;

const openPaper = () => {
    

    toggleCapOpen ? envelopeCap.classList.remove('envelopeCapOpen') : envelopeCap.classList.add('envelopeCapOpen');
    
    setInterval(() => {
        envelopeBodyLeft.style.zIndex = '0';
        envelopeBodyRight.style.zIndex = '0';
        envelopeBodyBottom.style.zIndex = '0';
        paper.classList.add('expandPaper');
        envelopeCap.classList.remove('envelopeCapOpen');
        paper.innerHTML = "<h1>HAPPY BIRTHDAY LOVE!!!</h1>";
    },3000);
   
};


envelopeCap.addEventListener('click', () => openPaper());
