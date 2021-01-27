
function addScrollAnimations() {

    let projects = document.querySelectorAll('.project');

    for (let i = 0; i < projects.length; i++) {
        let box = projects[i].getBoundingClientRect();
        if ((box.y + box.height) <= window.innerHeight) {
            projects[i].classList.add('projectVisible');
        }
    }

    let boxes = document.querySelectorAll('.box');
    for (let i = 0; i < boxes.length; i++) {
        let box = boxes[i].firstElementChild.getBoundingClientRect();
        if ((box.y + box.height + 100) <= window.innerHeight) {
            boxes[i].children[0].classList.add('revealLeft');
            boxes[i].children[1].classList.add('revealLeft');
        }
    }
}

function fillTheLanguages() {

    let languagesDiv = document.querySelector('#languages');
    for (let i = 0; i < languages.length; i++) {
        console.log(languages[i]);
        languagesDiv.innerHTML += "<span id=" + languages[i] + ">" + languages[i] + "</span>";
    }
}

function init() {
    
    window.onscroll = () => {
        addScrollAnimations();
    }

    fillTheLanguages();
    
   
    
}

let languages = ['CSS', 'JavaScript', 'PHP', 'Java', 'HTML', 'Node.js', 'React', 'UI Design', 'GIMP', 'MongoDB', 'MySQL', 'SCSS', 'npm', 'Docker', 'JSON']

window.onload = init;