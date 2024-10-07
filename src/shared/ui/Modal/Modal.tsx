import { classNames, Mods } from 'shared/lib/classNames/classNames';
import {
    MouseEvent, MutableRefObject, ReactNode, useCallback, useEffect, useRef, useState,
} from 'react';
import cls from './Modal.module.scss';

interface ModalProps{
    className?:string
    children:ReactNode
    onClose:()=>void
    isOpen?:boolean
    lazy?:boolean
}
const ANIMATION_TIME = 200;

export const Modal = (props: ModalProps) => {
    const {
        isOpen,
        className,
        onClose,
        lazy,
        children,
    } = props;

    const [close, setClose] = useState(false);
    const [isMounted, setIsMounted] = useState(false);

    const timerRef = useRef() as MutableRefObject<ReturnType<typeof setTimeout> >;
    const closeHandler = useCallback(() => {
        if (onClose) {
            setClose(true);
            timerRef.current = setTimeout(() => {
                onClose();
                setClose(false);
            }, ANIMATION_TIME);
        }
    }, [onClose]);
    useEffect(() => {
        if (isOpen) {
            setIsMounted(true);
        }
    }, [isOpen]);
    const handleClose = useCallback((e:KeyboardEvent) => {
        if (e.key === 'Escape') {
            closeHandler();
        }
    }, [closeHandler]);

    const onContentClick = (e: MouseEvent) => {
        e.stopPropagation();
    };

    useEffect(() => {
        if (isOpen) {
            window.addEventListener('keydown', handleClose);
        }

        return () => {
            clearTimeout(timerRef.current);
            window.removeEventListener('keydown', handleClose);
        };
    }, [handleClose, isOpen]);

    const mods:Mods = {
        [cls.opened]: isOpen,
        [cls.closes]: close,
    };

    if (lazy && !isMounted) {
        return null;
    }
    return (
        <div className={classNames(cls.container, mods, [className])}>
            <div className={cls.overlay} onClick={closeHandler}>
                <div className={cls.content} onClick={onContentClick}>
                    {children}
                </div>
            </div>
        </div>
    );
};
