const searchField = document.getElementById('search-field');
const body = document.getElementById('body');
body.style.backgroundColor = '#FBFBF9'
const slider = document.getElementById('slider-img');
slider.style.borderRadius = '20px'
const view = document.getElementById('view-photo');
const loadPhotos = () => {
    toggleSpinner('block')
    const apiKey = '22906393-d90de50f87392b4bd87b60cc1'
    const url = `https://pixabay.com/api/?key=${apiKey}&q=${searchField.value}`
    fetch(url)
    .then(res => res.json())
    .then(data => showPhotos(data))
}

const toggleSpinner = displayStyle => {
    document.getElementById('spinner').style.display = displayStyle;
  }

const myImages = [];
let imgIndex = 0;

setInterval(() => {
    if (imgIndex >= myImages.length) {
        imgIndex = 0;
    }
    const imgUrl = myImages[imgIndex];
    slider.setAttribute('src', imgUrl)
    imgIndex++
    toggleSpinner('none')
}, 2000);


const showPhotos = data => {
    data.hits.forEach(photo => {
        myImages.push(photo.largeImageURL);
    });
}

const showText = () => {
    const footer = document.getElementById('footer');
    footer.textContent = '';
    const p = document.createElement('p');
    p.style.fontSize = '25px'
    p.classList.add('text-center', 'text-success');
    p.innerHTML = "<p>Powered by <a href = 'https://pixabay.com/' target = '_blank'>Pixabay</a></p>"
    footer.appendChild(p)
}