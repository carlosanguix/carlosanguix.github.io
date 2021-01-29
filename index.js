import { projects } from './projects.js';

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

    // H1 and lines animations
    let boxes = document.querySelectorAll('.box');
    for (let i = 0; i < boxes.length; i++) {
        let box = boxes[i].firstElementChild.getBoundingClientRect();
        if ((box.y + box.height + 100) <= window.innerHeight) {
            boxes[i].children[0].classList.add('revealLeft');
            boxes[i].children[1].classList.add('revealLeft');
        }
    }

    // AboutAnimations
    let aboutDiv = document.querySelector('#aboutDiv');
    let photo = aboutDiv.children[2].children[0];
    let photoBound = photo.getBoundingClientRect();
    if ((photoBound.y + photoBound.height + 100) <= window.innerHeight) {
        photo.classList.add('revealLeft');
    }
    let descript = aboutDiv.children[2].children[1];
    let descriptBound = descript.getBoundingClientRect();
    if ((descriptBound.y + descriptBound.height + 70) <= window.innerHeight) {
        descript.classList.add('revealRight14');
    }
    let boxInterest = document.querySelectorAll('.boxInterest');
    for (let i = 0; i < boxInterest.length; i++) {
        let boxInterestBound = boxInterest[i].getBoundingClientRect();
        if ((boxInterestBound.y + boxInterestBound.height + 70) <= window.innerHeight) {
            boxInterest[i].classList.add('.revealLeft');
        }
    }

    // ProjectBoxes animations
    let projects = document.querySelectorAll('.project');
    for (let i = 0; i < projects.length; i++) {
        let box = projects[i].getBoundingClientRect();
        if ((box.y + box.height) <= window.innerHeight) {
            projects[i].classList.add('projectVisible');
        }
        // Project description animations
        projects[i].addEventListener('mouseover', () => {
            projects[i].children[0].classList.add('projectDescReveal');
        });
        projects[i].addEventListener('mouseout', () => {
            projects[i].children[0].classList.remove('projectDescReveal');
        });
    }

    /*
    let projects = document.querySelectorAll('.project');
    for (let i = 0; i < projects.length; i++) {
        projects[i].addEventListener('mouseover', () => {
            projects[i].children[0].classList.add('projectDescReveal');
        });
        projects[i].addEventListener('mouseout', () => {
            projects[i].children[0].classList.remove('projectDescReveal');
        });
    }*/
}

function swapLanguages() {

    let language = document.querySelector('#language');
    let num = 0;
    setInterval(() => {
        num++;
        language.innerHTML = '' + languages[num];
        if (num == languages.length - 1) {
            num = 0;
        }
    }, 1000);
}

function fillProjects() {

    let wrapProjects = document.querySelector('#wrapProjects');
    let buttons = document.createElement('div');
    for (let i = 0; i < projects.length; i++) {


        wrapProjects.innerHTML += `
            <div class="project">
                <div class="desc">
                    <h2 class="projName">${projects[i].name}</h2>
                    <p class="projDesc">${projects[i].description}</p>
                    <div class="projButtons"></div>
                </div>
                <img src="${projects[i].images[0]}">
            </div>
        `;

        if (projects[i].url == '') {
            wrapProjects.children[i].children[0].querySelector('.projButtons').innerHTML = `
            <a href="${projects[i].githubUrl}">github</a>`;
        } else {
            wrapProjects.children[i].children[0].querySelector('.projButtons').innerHTML = `
            <a href="${projects[i].githubUrl}">github</a>
            <a href="${projects[i].url}">view</a>`;
        }

    }
    /*
    let wrapProjects = document.querySelector('#wrapProjects');
    let projectsDom = projects.map(function(project) {
        let projBut = document.createElement('div');
        if (project.url == '') {
            projBut.innerHTML = `
                <div class="projButtons">
                    <a href="${project.githubUrl}"></a>
                </div>`;
        } else {
            projBut.innerHTML = `
                <div class="projButtons">
                    <a href="${project.githubUrl}"></a>
                    <a href="${project.url}"></a>
                </div>`;
        }
    });
    wrapProjects.innerHTML = projects.map((project, projectsDom) => 
    `
        <div class="project">
            <div class="desc">
                <h2 class="projName">${project.name}</h2>
                <p class="projDesc">${project.description}</p>` + projectsDom + `
                
            </div>
            <img src="${project.images[0]}">
        </div>
    `,).join('');*/
}

function swapProjectImages() {
    setInterval(() => {
        let projectsDom = document.querySelectorAll('.project');
        for (let i = 0; i < projectsDom.length; i++) {
            let rnd = Math.floor(Math.random() * projects[i].images.length);
            projectsDom[i].children[1].src = projects[i].images[rnd];
        }
    }, 4000);
}

function init() {

    linkAnimations();

    fillProjects();

    window.onscroll = () => {
        addScrollAnimations();
    }

    swapLanguages();

    swapProjectImages();

}

let languages = ['CSS', 'JavaScript', 'PHP', 'Java', 'HTML', 'Node.js', 'React', 'UI Design', 'GIMP', 'MongoDB', 'MySQL', 'SCSS', 'npm', 'Docker', 'JSON']

window.onload = init;
