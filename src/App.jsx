import { useEffect, useState } from 'react';
import Header from '@components/Header/Header.jsx';
import { translations } from '@lib/translations';
import { isScreenMobile } from '@lib/utils/dimensions';
import CompanyLogo from 'src/assets/logo.svg';
import './App.scss';

function App() {
  const [activeTab, setActiveTab] = useState(translations.general.owners.c);
  const handleTabChange = (tab) => {
    if (activeTab !== tab) {
      setActiveTab(tab);
    }
  };

  const [isMobile, setIsMobile] = useState(isScreenMobile());
  useEffect(() => {
    function handleResize() {
      if (window) {
        const screenMobile = isScreenMobile();
        if (isMobile && !screenMobile) {
          setIsMobile(false);
        } else if (!isMobile && screenMobile) {
          setIsMobile(true);
        }
      }
    }
    // check initial window size and add resize listener
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [isMobile]);

  return (
    <div className="app">
      <Header activeTab={activeTab} onTabChange={handleTabChange} mobile={isMobile} />
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

      <header className="app__header">
        <img src={CompanyLogo} className="app__logo" alt="logo" />
        <h1 className="app__title">{ translations.general.companyName }</h1>
        <p className="app__description">{ translations.general.companyDescription }</p>
        <a
          className="app__link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
