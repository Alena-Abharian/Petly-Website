import useScrollLock from 'hooks/useScrollLock';
import PropTypes from 'prop-types';
import { useEffect } from 'react';
import { createPortal } from 'react-dom';
import { ModalBackdrop, ModalContent } from './Modal.styled';

const modalRoot = document.querySelector('#modal-root');

export default function Modal({
  children = '',
  handleKeyDown = () => {},
  handleBackdropClick = () => {},
  up,
  // closeModal = () => {},
}) {
  const { lockScroll, UnlockScroll } = useScrollLock();
  useEffect(() => {
    window.addEventListener('keydown', handleKeyDown);
    lockScroll();
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      UnlockScroll();
    };
  }, [handleKeyDown, lockScroll, UnlockScroll]);

  return createPortal(
    <ModalBackdrop onClick={handleBackdropClick} up={up}>
      <ModalContent up={up}>{children}</ModalContent>
    </ModalBackdrop>,
    modalRoot
  );
}

Modal.propTypes = {
  children: PropTypes.node,
  footerModal: PropTypes.bool,
};
