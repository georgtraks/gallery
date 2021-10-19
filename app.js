const currentimage = document.querySelector('#image')
const images = ['images/pilt1.jpg', 'images/pilt2.jpg', 'images/pilt3.jpg'];

function changeimage() {
    console.log('hello from script file.');

    let randomnumber = Math.floor(Math.random() * images.length);

    console.log(images[randomnumber]);
    currentimage.src =images[randomnumber];
}