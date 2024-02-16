interface ExperienceWork {
    name: string,
    time: string,
    description: string,
    stack: string[],
    listItems: string[]
}

export const workItems: ExperienceWork[] = [
    {
        name: 'SKUBA – Junior React developer',
        time: 'Декабрь 2023 – наст. время',
        description: 'Разработка веб-приложений различного уровня сложности в соответствии с требованиями заказчика.',
        stack: ['React', 'TypeScript', 'SCSS', 'GSAP'],
        listItems: ['Верстка отзывчивых веб-приложений по макету с использованием SCSS;', 'Работа с анимацией с использованием библиотеки GSAP;', 'Разработка веб-приложений с использованием React и TypeScript;', 'Взаимодействие с дизайнерами, разработчиками и заказчиками.']
    },
    {
        name: 'Скайтекс – Junior frontend developer',
        time: 'Июнь 2022 – Сентябрь 2022',
        description: 'Разработка веб-приложения, управляющего торговлей на маркетплейсах (автоматизация рекламы).',
        stack: ['Angular', 'Bootstrap', 'SCSS'],
        listItems: ['Разработка страниц приложения;', 'Создание UI-Kit;', 'Взаимодействие с REST API.']
    },
    {
        name: 'SKUBA – Junior React developer',
        time: 'Декабрь 2023 – наст. время',
        description: 'Разработка веб-приложений различного уровня сложности в соответствии с требованиями заказчика.',
        stack: ['Angular', 'RxJS', 'Bootstrap', 'библиотека Chart.js'],
        listItems: ['Верстка отзывчивых веб-приложений по макету с использованием SCSS;', 'Работа с анимацией с использованием библиотеки GSAP;', 'Разработка веб-приложений с использованием React и TypeScript;', 'Взаимодействие с дизайнерами, разработчиками и заказчиками.']
    },
]