import facite from 'assets/images/facite.png';
import ftp from 'assets/images/ftp.png';
import kut from 'assets/images/kut.png';

interface Case {
    imgSrc: string,
    title: string,
    stack: string[],
    description: string,
    hrefDemo: string,
    hrefCode?: string,
}

export const cases: Case[] = [
    {
        imgSrc: ftp,
        title: 'FTP',
        description: 'Каталог бесплатных игр с подробным описанием, полученного с API и возможностью фильтрации/сортировки',
        hrefDemo: 'https://chrisyuneva.github.io/FTP/',
        stack: ['React', 'Redux Toolkit', 'TypeScript', 'MUI', 'Redux Persist', 'Jest'],
        hrefCode: 'https://github.com/ChrisYuneva/FTP'
    },
    {
        imgSrc: kut,
        title: 'KUT',
        description: 'Веб-приложение автоподбора с возможностью рассчитать стоимость автомобиля',
        hrefDemo: 'https://kut-auto.ru/',
        stack: ['React', 'TypeScript', 'SCSS', 'GSAP', 'MUI']
    },
    {
        imgSrc: facite,
        title: 'Facite',
        description: 'Веб-приложение, позволяющее распределять задачи по времени (например, сегодня/завтра/на следующей неделе)',
        hrefDemo: 'https://chrisyuneva.github.io/Facite/',
        stack: ['React', 'Redux Toolkit', 'TypeScript', 'MUI', 'Firebase', 'Vite'],
        hrefCode: 'https://github.com/ChrisYuneva/Facite'
    },
    {
        imgSrc: ftp,
        title: 'ASK',
        description: 'Каталог бесплатных игр с подробным описанием, полученного с API и возможностью фильтрации/сортировки',
        hrefDemo: 'https://chrisyuneva.github.io/FTP/',
        stack: ['React', 'Redux Toolkit', 'TypeScript', 'MUI', 'Redux Persist', 'Jest']
    },
]