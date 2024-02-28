import img3 from 'assets/images/facite.png';
import img1 from 'assets/images/ftp.png';
import img2 from 'assets/images/kut.png';

interface Case {
    name: string,
    imgSrc: string[],
    stack: string,
    firstDes: string,
    secondDes?: string,
    demoHref: string,
    codeHref?: string,
}

export const ftp: Case = {
    name: 'FTP',
    imgSrc: [img1, img2, img3],
    stack: 'React / Redux Toolkit / TypeScript / MUI / Redux Persist / Jest',
    firstDes: 'Реализация адаптивного интерфейса с использованием UI библиотеки MUI Core. Приложение состоит из двух страниц:',
    secondDes: 'Реализованы базовые UNIT-тесты с использованием фреймворка Jest.  Применен Redux Persist для сохранения состояния карточки игры после перезагрузки страницы.',
    demoHref: 'https://chrisyuneva.github.io/FTP/',
    codeHref: 'https://github.com/ChrisYuneva/FTP'
}

export const kut: Case = {
    name: 'KUT',
    imgSrc: [img1, img2],
    stack: 'React / Redux Toolkit / TypeScript',
    firstDes: 'Реализация адаптивного интерфейса с использованием UI библиотеки MUI Core. Приложение состоит из двух страниц:',
    secondDes: 'Реализованы базовые UNIT-тесты с использованием фреймворка Jest.  Применен Redux Persist для сохранения состояния карточки игры после перезагрузки страницы.',
    demoHref: 'https://kut-auto.ru/'
}