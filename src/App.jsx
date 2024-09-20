import { useEffect, useState } from 'react';
import { useMediaQuery } from 'react-responsive';
import Header from '@components/Header/Header.jsx';
import { translations } from '@lib/translations';
import * as Constants from '@lib/constants';
import CompanyLogo from 'src/assets/logo.svg';
import './App.scss';

function App() {
  const [activeTab, setActiveTab] = useState(translations.tabs.home);
  const handleTabChange = (tab) => {
    if (activeTab !== tab) {
      setActiveTab(tab);
    }
  };
  const isMobile = useMediaQuery({ query: `(max-width: 768px)` });

  return (
    <div className="app">
      <Header activeTab={activeTab} onTabChange={handleTabChange} mobile={isMobile} />

      <div className="app__page">
        <img src={CompanyLogo} className="app__logo" alt="logo" />
        <h1 className="app__title">{ translations.general.companyName }</h1>
        <p className="app__description">{ translations.general.companyDescription }</p>
        <div className="app__text">
          {activeTab === translations.tabs.home && (
          <div>{translations.content.home}</div>
          )}
          {activeTab === translations.tabs.about && (
            <div>{translations.content.about}</div>
          )}
          {activeTab === translations.tabs.schedule && (
            <div>{translations.content.schedule}</div>
          )}
          {activeTab === translations.tabs.contact && (
            <div>{translations.content.contact}</div>
          )}
        </div>
      </div>

      <footer className="app__footer">
        footer content
        <ul className="app__footer-link-list">
          <li><a>link 1</a></li>
          <li><a>link 2</a></li>
        </ul>
      </footer>
    </div>
  );
}

export default App;
