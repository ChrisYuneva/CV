import file from 'assets/icons/file.svg';
import github from 'assets/icons/github.svg';
import gmail from 'assets/icons/gmail.svg';
import telegram from 'assets/icons/telegram.svg';

interface IconsLinksItem {
    imgSrc: string,
    href: string
}

export const iconsLinkItems: IconsLinksItem[] = [
    {
        imgSrc: github,
        href: 'https://github.com/ChrisYuneva'
    },
    {
        imgSrc: telegram,
        href: 'https://t.me/chris_yuneva'
    },
    {
        imgSrc: file,
        href: 'https://github.com/ChrisYuneva'
    },
    {
        imgSrc: gmail,
        href: 'mailto:christinayuneva2000@gmail.com'
    },
]