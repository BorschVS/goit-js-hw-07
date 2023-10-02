import { galleryItems } from "./gallery-items.js";
// Change code below this line

const gallery = document.querySelector(".gallery");
const itemsMarkup = createListItemsMarkup(galleryItems);

gallery.innerHTML = itemsMarkup;

document.addEventListener("DOMContentLoaded", function () {
  new SimpleLightbox(".gallery a", {
    captions: true,
    captionDelay: 250,
    captionsData: "alt",
    navText: ["‹", "›"],
    fadeSpeed: 250,
  });
});

function createListItemsMarkup(items) {
  return items
    .map(({ preview, original, description }) => {
      return `
      <li class="gallery__item">
   <a class="gallery__link" href="${original}">
      <img class="gallery__image" src="${preview}" alt="${description}" />
   </a>
    </li>
    `;
    })
    .join("");
}
