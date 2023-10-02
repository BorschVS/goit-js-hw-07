import { galleryItems } from "./gallery-items.js";

// Change code below this line

const gallery = document.querySelector(".gallery");
const itemsMarkup = createListItemsMarkup(galleryItems);

gallery.innerHTML = itemsMarkup;

gallery.addEventListener("click", onImageClick);

function onImageClick(evt) {
  evt.preventDefault();
  if (!evt.target.classList.contains("gallery__image")) {
    return;
  }
  const instance = basicLightbox.create(`
  <img class="gallery__image" src="${evt.target.dataset.source}" width="800" height="600">
`);
  instance.show();
  
  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape") {
      instance.close();
    }
  });
}

function createListItemsMarkup(items) {
  return items
    .map(({ preview, original, description }) => {
      return `
      <li class="gallery__item">
      <a class="gallery__link" href="large-image.jpg">
        <img
          class="gallery__image"
          src="${preview}"
          data-source="${original}"
          alt="${description}"
        />
      </a>
    </li>
    `;
    })
    .join("");
}
