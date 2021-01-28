
function linkAnimations() {

    let links = document.querySelectorAll('.link');
    for (let i = 0; i < links.length; i++) {
        links[i].addEventListener('mouseover', () => {
            links[i].children[0].classList.add('linkHover');
        });
        links[i].addEventListener('mouseout', () => {
            links[i].children[0].classList.remove('linkHover');
        });
    }
}

function addScrollAnimations() {

    // ProjectBoxes animations
    let projects = document.querySelectorAll('.project');
    for (let i = 0; i < projects.length; i++) {
        let box = projects[i].getBoundingClientRect();
        if ((box.y + box.height) <= window.innerHeight) {
            projects[i].classList.add('projectVisible');
        }
    }

    // H1 and lines animations
    let boxes = document.querySelectorAll('.box');
    for (let i = 0; i < boxes.length; i++) {
        let box = boxes[i].firstElementChild.getBoundingClientRect();
        if ((box.y + box.height + 100) <= window.innerHeight) {
            boxes[i].children[0].classList.add('revealLeft');
            boxes[i].children[1].classList.add('revealLeft');
        }
    }

    //
    let aboutDiv = document.querySelector('#aboutDiv');
    let photo = aboutDiv.children[2].children[0];
    let photoBound = photo.getBoundingClientRect();
    if ((photoBound.y + photoBound.height + 100) <= window.innerHeight) {
        photo.classList.add('revealLeft');
    }
    let descript = aboutDiv.children[2].children[1];
    let descriptBound = descript.getBoundingClientRect();
    if ((descriptBound.y + descriptBound.height + 70) <= window.innerHeight) {
        descript.classList.add('revealRight34');
    }
    let boxInterest = document.querySelectorAll('.boxInterest');
    for (let i = 0; i < boxInterest.length; i++) {
        let boxInterestBound = boxInterest[i].getBoundingClientRect();
        if ((boxInterestBound.y + boxInterestBound.height + 70) <= window.innerHeight) {
            boxInterest[i].classList.add('.revealLeft');
        }
    }
}

function swapLanguages() {

    let language = document.querySelector('#language');
    console.log(language);
    let num = 0;
    setInterval( () => {
        num++;
        language.innerHTML = '' + languages[num];
        if (num == languages.length - 1) {
            num = 0;
        }
    }, 1000);
}

function init() {

    linkAnimations();

    swapLanguages();

    window.onscroll = () => {
        addScrollAnimations();
    }

    
}

let languages = ['CSS', 'JavaScript', 'PHP', 'Java', 'HTML', 'Node.js', 'React', 'UI Design', 'GIMP', 'MongoDB', 'MySQL', 'SCSS', 'npm', 'Docker', 'JSON']

window.onload = init;