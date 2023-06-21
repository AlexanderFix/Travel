


// let movie = document.getElementById('movie')
// movie.addEventListener('click', player)
// function player () {
//     movie.play()
// }


//  Блок туров
let ArrTour = {
    city: ["Франция", "Италия", "Египет", "Дубай", "Испания", "Африка"],
    picture: ['trv1.jpg', 'trv2.jpg', 'trv3.jpg', 'trv4.jpg', 'trv5.jpg', 'trv6.jpg',]
}

let picTour = document.querySelectorAll('.pic_tour');

for (i = 0; i < ArrTour.city.length; i++) {
    pic_tour.innerHTML += `<div class="pic_img" onclick="showBigPic(${i+1})" id="idpic${i}" >
<p>${ArrTour.city[i]}</p>
<img src="images/trv${i + 1}.jpg">
</div>`}

// Модальное для туров
function showBigPic(pic) {

    wrapper.innerHTML += `
    <div class=" pic_img" id="modal" onclick="closemodal()">
    <img src="images/trv${pic}.jpg" alt="">
    </div>
    `
}

function closemodal () {

let modal = document.getElementById('modal')
wrapper.removeChild(modal)

}


// Плавнная прокрутка на команду
let scrol = document.getElementById('team')
let team = document.getElementById('we_team')

function handleButtonClick() {
    scrol.scrollIntoView({ block: "center", behavior: "smooth" })
}

team.addEventListener('click', handleButtonClick)


// Слайдер
for (n = 1; n < 2; n++) {
    imgcompany.innerHTML += `
<img src="images/${ArrTour.picture[n-1]}" alt="" id="id${n}">
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
    console.log(count);
    let ff = document.getElementById(`id${id}`);
    console.log(ff);
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
    console.log(count);

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


