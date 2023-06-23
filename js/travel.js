
// Кнопка вверх

window.addEventListener('scroll', function () {
    if (this.scrollY < 500) {
        showScroll.style = `
        display: none;
        opacity: 0;
        `
    } else {
        showScroll.style = `
        display: block;
        opacity: 0.5;
        `
    }
});

function scrollUp() {
    window.scrollTo(0, 0)
}


// Видео

function player() {
    if (movie.paused) movie.play()
    else { movie.pause() }
}

// Блок о компании
let aboutButtons = ['О компании', 'Почему выбирают нас', 'Наша миссия']
let about = document.getElementById('about_button')
let parag = ['Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt sapiente dolorem officiisconsequuntur, aliquid eaque! Illo, praesentium tempora odit quasi aspernatur laudantiumdicta,aliquid, quaerat illum at sint hic tempore. Officiis nihil ea similique cumque beatae, quoconsequuntur amet, recusandae veritatis omnis illum, maxime laborum repellendus vitae corporis',
'haha','good']
for (button = 0; button < aboutButtons.length; button++) {
    about.innerHTML += `
    <button id='but${button}' onclick="activeAbout(this,${button})" class="buttonOff">${aboutButtons[button]}</button>
    `
}
but0.setAttribute('class', 'buttonOn')

function activeAbout(activ, numP) {
    let allButton = document.querySelectorAll('.about_button>button')
    allButton.forEach(function (item) {
        item.setAttribute('class', 'buttonOff')
    });
    activ.setAttribute('class', 'buttonOn')
    // console.log(allButton);
    pAbout.innerHTML = parag[numP]

}

//  Блок туров
let ArrTour = {
    city: ["Франция", "Италия", "Египет", "Дубай", "Испания", "Африка"],
    picture: ['trv1.jpg', 'trv2.jpg', 'trv3.jpg', 'trv4.jpg', 'trv5.jpg', 'trv6.jpg',]
}

let picTour = document.querySelectorAll('.pic_tour');

for (i = 0; i < ArrTour.city.length; i++) {
    pic_tour.innerHTML += `<div class="pic_img" onclick="showBigPic(${i + 1})" id="idpic${i}" >
<p>${ArrTour.city[i]}</p>
<img src="images/trv${i + 1}.jpg">
</div>`}

// Модальное для туров
function showBigPic(pic) {

    modal.style = `display: flex;`
    modal.innerHTML = `
        <img src="images/trv${pic}.jpg" alt="">
       `
}

function closemodal() {

    modal.innerHTML = ''
    modal.style = `display: none;`

}


// Плавнная прокрутка наша команда
// let scrol = document.getElementById('team')
// let team = document.getElementById('we_team')

// function handleButtonClick() {
//     scrol.scrollIntoView({ block: "center", behavior: "smooth" })
// }

// team.addEventListener('click', handleButtonClick)


// Слайдер
for (n = 1; n < 2; n++) {
    imgcompany.innerHTML += `
<img src="images/${ArrTour.picture[n - 1]}" alt="" id="id${n}">
<img src="images/${ArrTour.picture[n]}" alt="" id="id${n + 1}">
`
}

let count = 0
let id = 1

function delimg() {
    id2.style.left = `${0}px`;
    id1.style.left = `${0}px`;
    p = 1

    if (++count > ArrTour.city.length) count = 1;
    let ff = document.getElementById(`id${id}`);
    ff.remove();

    if (count + 1 > ArrTour.city.length) {
        imgcompany.innerHTML += `
        <img src="images/trv${ArrTour.city.length - count + 2}.jpg" alt="" id="id${ArrTour.city.length - count + 2}">
        `
    }
    else if (count + 2 > ArrTour.city.length) {
        imgcompany.innerHTML += `
        <img src="images/trv${ArrTour.city.length - count}.jpg" alt="" id="id${ArrTour.city.length - count}">
        `
    }
    else {
        imgcompany.innerHTML += `
        <img src="images/trv${count + 2}.jpg" alt="" id="id${id}">
        `}

    if (id == 1) id = 2
    else { id = 1 }


    setTimeout(gallery, 2000)

}

max = 550, step = 5, p = 1;

function gallery() {

    if (p > max + step)
        clearTimeout(timerId);
    else {
        id1.style.left = `${-p}px`;
        id2.style.left = `${-p}px`;
        p += step;
        timerId = setTimeout(gallery, 10);
    }



}

setTimeout(gallery, 2000)
setInterval(delimg, 6000);

//Яндекс карты
ymaps.ready(init);
    function init(){
        // Создание карты.
        var myMap = new ymaps.Map("map", {
            // Координаты центра карты.
            // Порядок по умолчанию: «широта, долгота».
            // Чтобы не определять координаты центра карты вручную,
            // воспользуйтесь инструментом Определение координат.
            center: [55.75399400, 37.62209300],
            // Уровень масштабирования. Допустимые значения:
            // от 0 (весь мир) до 19.
            zoom: 7
            
        });myMap.behaviors.disable('scrollZoom')
    }

