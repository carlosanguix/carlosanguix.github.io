
function init() {
    document.querySelector('#contactButton').onclick = () => {
        document.querySelector('#contactBox').style.display = 'flex';
        document.querySelector('#contactBox').classList.add = '.contactBoxIn';
    };

    document.querySelector('#contactBox').querySelector('.close').onclick = async() => {
        document.querySelector('#contactBox').classList.add = '.contactBoxOut';
        document.querySelector('#contactBox').style.display = 'none';
    };
}


window.onload = init;