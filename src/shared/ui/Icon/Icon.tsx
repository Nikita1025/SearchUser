import { classNames } from 'shared/lib/classNames/classNames';
import { FunctionComponent, SVGAttributes } from 'react';
import cls from './Icon.module.scss';

interface IconProps {
    className?: string
    Svg:FunctionComponent<SVGAttributes<SVGElement>>
}

export const Icon = ({ className, Svg }: IconProps) => (
    <Svg className={classNames(cls.Icon, {}, [className])} />
);
