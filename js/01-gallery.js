import { galleryItems } from './gallery-items.js';
// Change code below this line
const listRef = document.querySelector('.gallery');

function renderArrayElements(array) {
    return array.map(({ description, original, preview }) => {
        return `<div class="gallery__item">
    <a class="gallery__link" href=${original}>
    <img
      class="gallery__image"
      src=${preview}
      data-source=${original}
      alt=${description}
    />
  </a>
</div>`;
    }).join('');
}

const markup = renderArrayElements(galleryItems);
listRef.insertAdjacentHTML('beforeend', markup);
listRef.addEventListener('click', handleImageClick);

function handleImageClick(event) { 
    event.preventDefault();
    console.dir(event.target);
}



console.log(galleryItems);
