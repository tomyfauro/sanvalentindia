// © github.com/papichans

// Preloader
let messagePhase = 1;
const preloader = document.querySelector('.preloader');
const button_next = document.querySelector('.next')
const message = document.querySelector('.message')

button_next.addEventListener('click', () => {
    messagePhase++;
    if (messagePhase == 2) {
        message.classList.add('fade');
        setTimeout(() => {
            message.textContent = "Tengo que preguntarte algo..."
            message.classList.remove('fade');
        }, 200); 
    }
    if (messagePhase == 3 ) {
        setTimeout(() => {
            preloader.style.opacity = 0;
        }, 100)
        setTimeout(() => {
            preloader.style.display = 'none';
        },  600)
    }
})

// No button hover

const button_area = document.querySelector('.buttons-area');
const button_no = document.querySelector('.answer-no');
const button_yes = document.querySelector('.answer-yes');
const image = document.querySelector('.content-image');
const question = document.querySelector('.question');
let imagePhase = 1;

function changeImage() {
    image.classList.add('fade');
    if (imagePhase == 1) {
        question.textContent = "Porfa, no digas que no.";
    }
    else if (imagePhase == 2) {
        question.textContent = "No rompas mi corazon mala";
    }
    else if (imagePhase == 3) {
        question.textContent = "Te amo mucho no seas mala";
    }
    else if (imagePhase == 4) {
        question.textContent = "Dale maldita yo te amo infinito";
    }
    else if (imagePhase == 5) {
        question.textContent = "Sos todo lo que quiero amor";
    }
    else if (imagePhase == 6) {
        question.textContent = "porfavor.";
    }
    setTimeout(() => {
        image.src = 'assets/images/content-pics/img-2.jpg';
        image.classList.remove('fade');
    }, 180); 
}

function backtoImage() {
    image.classList.add('fade');
    setTimeout(() => {
        if (imagePhase == 1) {
            image.src = 'assets/images/content-pics/img-1.jpg';
            question.textContent = "queres ser mi SAN VALENTIN";
        }
        else if (imagePhase == 2) {
            image.src = 'assets/images/content-pics/img-3.jpg';
            question.textContent = "sos MUY hermosa";
        }
        else if (imagePhase == 3) {
            image.src = 'assets/images/content-pics/img-4.jpg';
            question.textContent = "no puedo imaginarme ni un dia sin vos amor";
        }
        else if (imagePhase == 4) {
            image.src = 'assets/images/content-pics/img-5.jpg';
            question.textContent = "necesito esto de vos.";
        }
        else if (imagePhase == 5) {
            image.src = 'assets/images/content-pics/img-6.jpg';
            question.textContent = "te prometo que voy a ser el mejor novio del mundo";
        }
        else if (imagePhase == 6) {
            image.src = 'assets/images/content-pics/img-7.jpg';
            question.textContent = "lo unico que tenes que decir es si";
        }
        image.classList.remove('fade');
    }, 180); 
}

button_no.addEventListener('mouseover', () => {
    changeImage();
});

button_no.addEventListener('mouseout', () => {
    backtoImage();
});

// Next Phase

button_no.addEventListener('click', () => {
    imagePhase++;
    if (imagePhase == 6) {
        button_no.disabled = true;
        button_no.style.opacity = 0.5;
    }
});

// She said yes

button_yes.addEventListener('click', () =>{
    image.classList.add('fade');
    button_area.innerHTML = '';
    button_area.textContent = "te espero en españa hermosa, te amo <3";
    question.textContent = "siii!"
    setTimeout(() => {
        image.src = 'assets/images/content-pics/img-5.jpg';
        image.classList.remove('fade');
    }, 180 )
});