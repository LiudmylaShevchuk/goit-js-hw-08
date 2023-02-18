// Add imports above this line
import { galleryItems } from './gallery-items.js';
import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';
// Change code below this line

console.log(galleryItems);

const gallery = document.querySelector('.gallery');

const imagesList = galleryItems
  .map(({ preview, original, description }) => {
    return `<div class="gallery__item">
			<a class="gallery__item" href="${original}">
  <img class="gallery__image" src="${preview}" alt="${description}" />
</a> 
</div>`;
  })
  .join('');

gallery.insertAdjacentHTML('afterbegin', imagesList);

const lightbox = new SimpleLightbox('.gallery a', {
  captionsData: 'alt',
  captionDelay: 250,
});
