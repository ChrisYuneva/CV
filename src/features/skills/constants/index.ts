import js from 'assets/icons/js.svg';
import react from 'assets/icons/react.svg';
import ts from 'assets/icons/typescript.svg';
import redux from 'assets/icons/redux.svg';
import html from 'assets/icons/html.svg';
import css from 'assets/icons/css.svg';
import sass from 'assets/icons/sass.svg';
import git from 'assets/icons/git.svg';

interface Skills {
    imgSrc: string,
    name: string
}

export const skills: Skills[] = [
    {
        imgSrc: js,
        name: 'JavaScript'
    },
    {
        imgSrc: ts,
        name: 'TypeScript'
    },
    {
        imgSrc: react,
        name: 'React'
    },
    {
        imgSrc: redux,
        name: 'Redux Toolkit'
    },
    {
        imgSrc: html,
        name: 'HTML'
    },
    {
        imgSrc: css,
        name: 'CSS'
    },
    {
        imgSrc: sass,
        name: 'Sass'
    },
    {
        imgSrc: git,
        name: 'GIT'
    },
]