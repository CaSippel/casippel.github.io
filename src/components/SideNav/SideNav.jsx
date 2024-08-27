import './SideNav.scss';
import Modal from '../Modal/Modal.jsx';
import {ReactComponent as ReactClose} from '../../assets/close.svg';
import PropTypes from 'prop-types';

SideNav.propTypes = {
  title: PropTypes.string.isRequired,
  onClose: PropTypes.func.isRequired,
  children: PropTypes.node.isRequired
};

function SideNav({show, title, onClose, children}) {
  return (
    <Modal handleClose={onClose}>
      <nav className="sideNav">
        <div className="sideNav__menu-item-wrapper">
          <div className="sideNav__header sideNav__menu-item">
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
