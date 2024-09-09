import PropTypes from 'prop-types';
import Modal from '@components/Modal/Modal.jsx';
import {ReactComponent as ReactClose} from 'src/assets/close.svg';
import './SideNav.scss';

SideNav.propTypes = {
  title: PropTypes.string.isRequired,
  onClose: PropTypes.func.isRequired,
  children: PropTypes.node.isRequired
};

function SideNav({show, title, onClose, children}) {
  return (
    <Modal handleClose={onClose}>
      <nav className="sideNav">
        <div className="sideNav__menu-item-wrapper sideNav__header">
          <div className="sideNav__menu-item">
            <button className="sideNav__close">
              <ReactClose alt="close" onClick={onClose} />
            </button>
            <h2 className="sideNav__title">{title}</h2>
          </div>
        </div>
        {children}
      </nav>
    </Modal>
  );
}

export default SideNav;
