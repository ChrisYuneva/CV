import cake from 'assets/icons/cake.svg';
import eraser from 'assets/icons/eraser.svg';
import potion from 'assets/icons/potion.svg';

interface DragIconsInterface {
    src: string,
    id: string,
}

export const dragIcons: DragIconsInterface[] = [
    {
        src: cake,
        id: 'cake'
    },
    {
        src: potion,
        id: 'potion'
    },
    {
        src: eraser,
        id: 'eraser'
    },
]