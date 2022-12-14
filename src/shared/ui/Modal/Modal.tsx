import { classNames } from 'shared/lib/classNames/classNames';
import React, {
  MutableRefObject,
  ReactNode,
  useCallback,
  useEffect,
  useRef,
  useState,
} from 'react';
import Portal from 'shared/ui/Portal/Portal';
import CloseIcon from '../../assets/icons/close.svg';
import { useLocation } from 'react-router-dom';
import cls from './Modal.module.scss';
import { Icon } from 'shared/ui/Icon/Icon';

export interface ModalProps {
  className?: string;
  overlayCls?: string;
  contentCls?: string;
  children: ReactNode;
  isOpen: boolean;
  onClose?: () => void;
  lazy?: boolean;
}

const ANIMATE_DELAY = 300;

export const Modal = (props: ModalProps) => {
  const { className, children, lazy, onClose, isOpen, overlayCls, contentCls } =
    props;
  const [isClosing, setIsClosing] = useState(false);
  const timerRef = useRef() as MutableRefObject<ReturnType<typeof setTimeout>>;
  const [isMounted, setIsMounted] = useState(false);
  const nav = useLocation();

  useEffect(() => {
    if (isOpen && isMounted) {
      onClose?.();
    }
    // eslint-disable-next-line
  }, [isOpen, nav.pathname, onClose]);

  const onContentClickHandler = useCallback((e: React.MouseEvent) => {
    e.stopPropagation();
  }, []);

  const onCloseHandler = useCallback(() => {
    if (onClose) {
      setIsClosing(true);
      timerRef.current = setTimeout(() => {
        onClose();
        setIsClosing(false);
      }, ANIMATE_DELAY);
    }
  }, [onClose]);

  useEffect(() => {
    if (isOpen) {
      setIsMounted(true);
    }
  }, [isOpen]);

  const onKeyDown = useCallback(
    (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onCloseHandler();
      }
    },
    [onCloseHandler]
  );

  useEffect(() => {
    if (isOpen) {
      window.addEventListener('keydown', onKeyDown);
    }

    return () => {
      clearTimeout(timerRef.current);
      window.removeEventListener('keydown', onKeyDown);
    };
  }, [isOpen, onKeyDown]);

  const mods = {
    [cls.opened]: isOpen,
    [cls.isClosing]: isClosing,
  };

  if (lazy && !isMounted) {
    return null;
  }

  return (
    <Portal>
      <div className={classNames(cls.Modal, mods, [className])}>
        <div
          className={classNames(cls.overlay, {}, [overlayCls])}
          onClick={onCloseHandler}
        >
          <div
            className={classNames(cls.content, {}, [contentCls])}
            onClick={onContentClickHandler}
          >
            <Icon
              Svg={CloseIcon}
              className={cls.icon}
              onClick={onCloseHandler}
            />
            {children}
          </div>
        </div>
      </div>
    </Portal>
  );
};
