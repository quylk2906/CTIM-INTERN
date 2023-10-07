var slider = document.querySelector('.slider .list');
var items = document.getElementsByClassName('item');
var next = document.getElementById('next');
var prev = document.getElementById('prev');
var dots = document.querySelectorAll('.slider .dots li');
var heading = document.querySelector('.text')


var lengthItems = items.length - 1;
var active = 0;

next.onclick = function(){
   
    active = active + 1 <= lengthItems ? active + 1 : 0;   
    reloadSlider();   
}
prev.onclick = function(){
    active = active - 1 >= 0 ? active - 1 : lengthItems;   
    reloadSlider();
}

var refreshInterval = setInterval(()=> {next.click()}, 3000);
function reloadSlider(){
   
    slider.style.left = -items[active].offsetLeft + 'px';
   
    
    var last_active_dot = document.querySelector('.slider .dots li.active');
    last_active_dot.classList.remove('active');
    dots[active].classList.add('active');
    

    clearInterval(refreshInterval);
    refreshInterval = setInterval(()=> {next.click()}, 3000);

    
}
dots.forEach((li, key) => {
    li.addEventListener('click', ()=>{
         active = key;
         reloadSlider();
    })
})
