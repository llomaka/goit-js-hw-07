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
const closeByEsc = function (evt, instance) {
  if (evt.key === "Escape") instance.close();
};

function handleImageClick(event) { 
  event.preventDefault();
  const instance = basicLightbox.create(`<img src=${event.target.dataset.source}>`,
    {
      onShow: (instance) => {
        window.addEventListener('keydown', closeByEsc(evt, instance))
      },
      onClose: (instance) => {
        window.removeEventListener('keydown', closeByEsc(evt, instance))
      }
    });
  instance.show();  
//   document.body.addEventListener('keydown', (evt) => {
//     if (evt.key === "Escape") instance.close();
// });
}

