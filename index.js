
function init() {
    document.querySelector('#contactButton').onclick = () => {
        document.querySelector('#contactBox').classList = 'contactBoxIn';
        document.querySelector('#index1').style.display = 'none';
        document.querySelector('#background').classList = 'backgroundBlur';
    };

    document.querySelector('#contactBox').querySelector('.close').onclick = async() => {
        document.querySelector('#contactBox').classList = 'contactBoxOut';
        document.querySelector('#index1').style.display = 'flex';
        document.querySelector('#background').classList.remove('backgroundBlur');
    };
}


window.onload = init;