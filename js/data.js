import { getRandomNumber } from './util.js';

const avatarCount = 6;

const getPathForAvatarImg = (number) => `img/avatar-${number}.svg`;

const NAMES = [
  'Иван',
  'Александр',
  'Михаил',
  'Екатерина',
  'Алексей',
  'Анна',
  'Сергей',
  'Дарья',
  'Павел',
  'Наталья',
];

const SENTENCES = [
  'Очень красивая фотография!',
  'Отличный кадр!',
  'Супер!',
  'Мне нравится!',
  'Прекрасное место!',
  'Очаровательно!',
  'Интересный ракурс!',
  'Сказочно!',
  'Отличная работа!',
  'Красивые цвета!',
  'Замечательно!',
];

function generateRandomComment() {
  const randomAvatarIndex = getRandomNumber(1, avatarCount);
  const randomNameIndex = getRandomNumber(0, NAMES.length - 1);
  const randomSentenceIndex = getRandomNumber(0, SENTENCES.length - 1);

  return {
    id: getRandomNumber(1, 1000),
    avatar: getPathForAvatarImg(randomAvatarIndex),
    message: SENTENCES[randomSentenceIndex],
    name: NAMES[randomNameIndex],
  };
}

// Функция для генерации массива комментариев
export function generateCommentsArray() {
  const commentsArray = [];
  const usedIds = new Set();

  for (let i = 1; i <= 25; i++) {
    const commentsCount = getRandomNumber(0, 30);
    const comments = [];


    for (let j = 0; j < commentsCount; j++) {
      const comment = generateRandomComment();

      while (usedIds.has(comment.id)) {
        comment.id = getRandomNumber(1, 1000);
      }
      usedIds.add(comment.id);
      comments.push(comment);
    }

    commentsArray.push(comments);
  }

  return commentsArray;
}

// Функция для генерации массива фотографий
export function generatePhotosArray() {
  const photosArray = [];
  const usedIds = new Set();

  for (let i = 1; i <= 25; i++) {
    const photo = {
      id: getRandomNumber(1, 1000),
      url: `photos/${i}.jpg`,
      description: SENTENCES[getRandomNumber(0, SENTENCES.length - 1)],
      likes: getRandomNumber(15, 200),
      comments: [],
    };

    const commentsCount = getRandomNumber(1, 5);

    for (let j = 0; j < commentsCount; j++) {
      const comment = generateRandomComment();
      // Проверка на уникальность id комментария
      while (usedIds.has(comment.id)) {
        comment.id = getRandomNumber(1, 1000);
      }
      usedIds.add(comment.id);
      photo.comments.push(comment);
    }

    photosArray.push(photo);
  }

  return photosArray;
}
