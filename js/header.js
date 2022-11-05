const header = document.body.querySelector(`header`);
console.log(getComputedStyle(header).height);
let prevScrollpos = window.scrollY;
header.style.transition = 'all 0.3s';
window.onscroll = function(){
    let currentScrollpos = window.scrollY;
    if(window.scrollY > 500){
        if(prevScrollpos > currentScrollpos){
            header.style.top = '0';
        }
        else {
            header.style.top = '-76px';
        }
        prevScrollpos = currentScrollpos;
    }
}
