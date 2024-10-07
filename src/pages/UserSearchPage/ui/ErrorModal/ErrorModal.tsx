import { classNames } from 'shared/lib/classNames/classNames';
import { Modal } from 'shared/ui/Modal/Modal';

import { Text } from 'shared/ui/Text/Text';

interface LoginModalProps{
    className?:string
    isOpen: boolean
    onClose:()=>void
    error: string
}

export const ErrorModal = ({
    className, onClose, isOpen, error,
}:LoginModalProps) => (
    <Modal
        isOpen={isOpen}
        onClose={onClose}
        className={classNames('', {}, [className])}
    >
        <Text title={error} />
    </Modal>
);
