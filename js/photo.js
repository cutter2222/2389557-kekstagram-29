export function renderPhoto(photosArray) {
  const pictureTemplate = document.querySelector('#picture').content;
  const picturesContainer = document.querySelector('.pictures');

  // Создаем DocumentFragment для добавления всех миниатюр за одну операцию вставки
  const fragment = document.createDocumentFragment();

  photosArray.forEach((photo) => {
    const pictureElement = pictureTemplate.cloneNode(true);

    const pictureImg = pictureElement.querySelector('.picture__img');
    pictureImg.src = photo.url;
    pictureImg.alt = photo.description;

    const pictureLikes = pictureElement.querySelector('.picture__likes');
    pictureLikes.textContent = photo.likes;

    const pictureComments = pictureElement.querySelector('.picture__comments');
    pictureComments.textContent = photo.comments.length;

    fragment.appendChild(pictureElement);
  });

  picturesContainer.appendChild(fragment);
}
