
function scrolls() {

    let projects = document.querySelectorAll('.project');
    let count = 0;
    projects.forEach(project => {
        count++;
        let box = project.getBoundingClientRect();
        if ((box.y + box.height - 150) <= window.innerHeight) {
            project.classList.add('projectVisible');
            
        }
    });
}

function init() {
    
    window.onscroll = () => {
        scrolls();
    }
    
}


window.onload = init;