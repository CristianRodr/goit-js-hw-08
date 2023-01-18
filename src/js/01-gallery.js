// Add imports above this line
import { galleryItems } from './gallery-items';
// Change code below this line
import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';
import '../css/01-gallery.css';
import '../css/common.css';

console.log(galleryItems);

const gallery = document.querySelector('.gallery');

const crearEtiquetas = pictureItems => {
  return pictureItems
    .map(
      item => `
    <a class="gallery__item" href="${item.original}">
        <img class="gallery__image" src="${item.preview}" alt="${item.description}"/>
    </a>`
    )
    .join('');
};

const mostrarGaleria = crearEtiquetas(galleryItems);

gallery.innerHTML = mostrarGaleria;

let lightbox = new SimpleLightbox('.gallery a');
