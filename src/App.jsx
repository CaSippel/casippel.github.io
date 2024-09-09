import { useEffect, useState } from 'react';
import { useMediaQuery } from 'react-responsive';
import Header from '@components/Header/Header.jsx';
import { translations } from '@lib/translations';
import * as Constants from '@lib/constants';
import CompanyLogo from 'src/assets/logo.svg';
import './App.scss';

function App() {
  const [activeTab, setActiveTab] = useState(translations.general.owners.c);
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
        <p className="app__text">
          {activeTab === translations.general.owners.c && (
          <div>{translations.general.owners.c}</div>
          )}
          {activeTab === translations.general.owners.q && (
            <div>{translations.general.owners.q}</div>
          )}
          {activeTab === translations.general.owners.r && (
            <div>{translations.general.owners.r}</div>
          )}
          {activeTab === translations.general.owners.v && (
            <div>{translations.general.owners.v}</div>
          )}
          , <a
            className="app__link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>.
        </p>
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
