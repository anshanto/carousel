const images = [
    'images/Screenshot_10.png',
    'images/Screenshot_11.png',
    'images/Screenshot_12.png',
    'images/Screenshot_13.png',
    'images/Screenshot_16.png',
    'images/Screenshot_17.png',
    'images/Screenshot_18.png',
    'images/Screenshot_19.png',
    'images/Screenshot_22.png',
    'images/Screenshot_23.png',
    'images/Screenshot_24.png'
]

let imgIndex = 0;
const imgId = document.getElementById('carousel-img')
setInterval(() => {
    if (imgIndex === images.length) {
        imgIndex = 0;
    }
    const imgLink = images[imgIndex];
    imgId.setAttribute('src', imgLink)
    imgIndex++;
}, 5000);