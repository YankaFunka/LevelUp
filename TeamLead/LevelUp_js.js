document.addEventListener('DOMContentLoaded', () => {
    const newYear = new Date('Mar 7 2021 00:00:00');
    
    const daysVal = document.querySelector('.time-count__days .time-count__val');
    const hoursVal = document.querySelector('.time-count__hours .time-count__val');
    const minutesVal = document.querySelector('.time-count__minutes .time-count__val');
    const secondsVal = document.querySelector('.time-count__seconds .time-count__val');

    const daysText = document.querySelector('.time-count__days .time-count__text');
    const hoursText = document.querySelector('.time-count__hours .time-count__text');
    const minutesText = document.querySelector('.time-count__minutes .time-count__text');
    const secondsText = document.querySelector('.time-count__seconds .time-count__text');

    function declOfNum(number, titles) {  
        let cases = [2, 0, 1, 1, 1, 2];  
        return titles[ (number%100>4 && number%100<20)? 2 : cases[(number%10<5)?number%10:5] ];  
    }
    
    const timeCount = () => {
        let now = new Date();
        let leftUntil = newYear - now;
        
        let days = Math.floor(leftUntil / 1000 / 60 / 60 / 24);
        let hours = Math.floor(leftUntil / 1000 / 60 / 60) % 24;
        let minutes = Math.floor(leftUntil / 1000 / 60) % 60;
        let seconds = Math.floor(leftUntil / 1000) % 60;
        
        daysVal.textContent = days;
        hoursVal.textContent = hours;
        minutesVal.textContent = minutes;
        secondsVal.textContent = seconds;

        daysText.textContent = declOfNum(days, ['день', 'дня', 'дней']);
        hoursText.textContent = declOfNum(hours, ['час', 'часа', 'часов']);
        minutesText.textContent = declOfNum(minutes, ['минута', 'минуты', 'минут']);
        secondsText.textContent = declOfNum(seconds, ['секунда', 'секунды', 'секунд']);
    };

    timeCount();
    setInterval(timeCount, 1000);
});


const slider = document.querySelector('.swiper-container');

let mySwiper = new Swiper(slider,{
    loop: true,
    slidesPerView: 1,
    spaceBetween: 10,
    pagination: {
        el: '.swiper-pagination',
        type: 'bullets',
        clickable: true,
    },
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },
    breakpoints: {
        950: {
            slidesPerView: 2,
            spaceBetween: 12,
        },
        1420: {
            slidesPerView: 3,
            spaceBetween: 10,
        },
      },
});

$(document).ready(function(){

    $('.popup-button').on('click', function(){
        let name = $('#name').val();
        let tel = $('#tel').val();
 
        if(name.length !== 0 && tel.length !== 0) {
         $('input[type="text"]').removeClass('error');
 
 
         name = $('#name').val('');
         tel = $('#tel').val('');
 
         addToStorage();
 
     } 
     
     else {
         $('input[type="text"]').addClass('error');
     };
 
    });

    document.oninput = function() {
        var input = document.querySelector('.input-0');
        input.value = input.value.replace (/[^\+\d]/g, '');
    };
 });




