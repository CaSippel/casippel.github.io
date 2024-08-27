import './Modal.scss';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';
import { useEffect } from 'react';

Modal.propTypes = {
  handleClose: PropTypes.func.isRequired,
  children: PropTypes.node.isRequired
};

/* should only be used by popups since there is no UI button to close the modal */
function Modal({handleClose, children}) {
  const mount = document.getElementById('modal-root');
  const el = document.createElement('div');
  el.classList.add('modal');

  useEffect(() => {
    mount.appendChild(el);
    return () => mount.removeChild(el);
  }, [el, mount]);
  useEffect(() => {
    const handleKeyDown = (event) => {
      if (event.code === "Escape") {
        handleClose();
      }
    };
    document.addEventListener("keydown", handleKeyDown);
    return () => document.removeEventListener("keydown", handleKeyDown);
  }, [handleClose]);

  return ReactDOM.createPortal(children, el);
}

export default Modal;
