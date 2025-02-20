import { classNames } from 'shared/lib/classNames/classNames';
import { memo } from 'react';
import cls from './Text.module.scss';

export enum TextTheme{
    NORMAL='normal',
    ERROR='error',
    INVERTED = 'inverted',

}

export enum TextAlign{
    RIGHT='right',
    LEFT='left',
    CENTER='center'
}

export enum TextSize{
    M='size_m',
    L='size_l',
}
interface TextProps{
    className?:string
    title?: string,
    text?: string
    theme?:TextTheme
    align?: TextAlign
    size?:TextSize
}

export const Text = memo((props:TextProps) => {
    const {
        className,
        title,
        text,
        align = TextAlign.LEFT,
        theme = TextTheme.NORMAL,
        size = TextSize.M,
    } = props;
    return (
        <div className={classNames('', {}, [className, cls[theme], cls[align], cls[size]])}>
            {title && <p className={cls.title}>{title}</p>}
            {text && <p className={cls.text}>{text}</p>}
        </div>
    );
});
