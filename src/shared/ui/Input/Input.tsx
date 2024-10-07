import { classNames, Mods } from 'shared/lib/classNames/classNames';
import {
    ChangeEvent, InputHTMLAttributes, memo, useEffect, useRef, useState,
} from 'react';
import cls from './Input.module.scss';

type InputType = Omit<InputHTMLAttributes<HTMLInputElement>, 'value' | 'onChange' | 'readOnly'>

interface InputProps extends InputType {
    className?: string
    value?: string | number
    onChange?: (value: string) => void
}

export const Input = memo((props:InputProps) => {
    const {
        className,
        value,
        onChange,
        placeholder,
        autoFocus,
        type = 'text',
        ...otherProps
    } = props;
    const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
        onChange?.(e.target.value);
    };

    return (
        <div className={classNames(cls.container, {}, [className])}>
            {placeholder && (
                <div className={cls.placeholder}>
                    {placeholder}
                </div>
            )}
            <input
                className={cls.input}
                value={value}
                type={type}
                onChange={onChangeHandler}
                {...otherProps}
            />
        </div>
    );
});
