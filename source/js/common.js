let maskVisible = false;

document.getElementById('mask').addEventListener('click', () => {
    showMenu()
})

function backToMain() {
    location.href = '../../index.html'
}

function showMenu() {
    let menuEle = document.getElementById('menu');
    let maskEle = document.getElementById('mask');
    let display = maskVisible ? 'none' : 'block';
    let menuBtnEle = document.querySelector('#header-menu span')
    let menuBtnClass = maskVisible ? 'icon iconfont icon-close' : 'icon iconfont icon-menu';
    menuBtnEle.className = menuBtnClass;
    menuEle.style.display = display;
    maskEle.style.display = display;
    maskVisible = !maskVisible
}