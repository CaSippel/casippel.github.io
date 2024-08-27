import { translations } from '../../lib/translations';
import PropTypes from 'prop-types';
import { useState } from 'react';
// TODO: condense SVG imports into 1 import (index file in assets)
import {ReactComponent as ReactHamburger} from '../../assets/hamburger.svg';
import CompanyLogo from '../../assets/logo.svg';

import SideNav from '../SideNav/SideNav.jsx';
import './Header.scss';

Header.propTypes = {
  activeTab: PropTypes.string.isRequired,
  onTabChange: PropTypes.func.isRequired,
  mobile: PropTypes.bool.isRequired
};

/* TODO (optional): drawer slide from L */
function Header({activeTab, onTabChange, mobile}) {
  const [showSideNav, setShowSideNav] = useState(false);
  const closeSideNav = () => {
    if (showSideNav) {
      setShowSideNav(false);
    }
  };
  const openSideNav = () => {
    if (!showSideNav) {
      setShowSideNav(true);
    }
  };
  const onClickTab = (tab) => {
    onTabChange(tab);
    closeSideNav();
  };

  function NavButton({itemName, itemClass}) {
    const isActiveTab = (itemName === activeTab);
    return (<button
        aria-current={isActiveTab}
        className={`${itemClass} ${(isActiveTab ? `${itemClass}--active` : ``)}`}
        onClick={() => onClickTab(itemName)}>
        {itemName}
      </button>);
  }

  return (
    <nav className="header">
      {mobile && (
        <button className="header__hamburger" onClick={openSideNav}>
          <ReactHamburger alt="hamburger menu" />
        </button>
      )}
      {showSideNav && (
        <SideNav onClose={closeSideNav} title={translations.general.companyNameFull}>{
          Object.entries(translations.general.owners).map(([key, tab]) =>
            <div key={`menu_item_wrapper_key_${key}`} className="sideNav__menu-item-wrapper">
              <NavButton key={`menu_item_key_${key}`}
                itemName={tab}
                itemClass="sideNav__menu-item" // todo: bad to use class here?
              />
            </div>)
        }</SideNav>
      )}

      <button className="header__home" onClick={() => onTabChange(translations.general.owners.c)}>
        <img src={CompanyLogo} className="header__logo" alt="logo" />
        <h1 className="header__title">{translations.general.companyNameFull}</h1>
      </button>

      {!mobile && (
        <nav className="header__tabs">{
          Object.entries(translations.general.owners).map(([key, tab]) =>
          <NavButton key={`tab_key_${key}`}
            itemName={tab}
            itemClass="header__tab"
          />)
        }</nav>
      )}
    </nav>
  );
}

export default Header;
