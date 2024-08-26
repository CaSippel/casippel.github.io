import logo from './logo.svg';
import { translations } from './lib/translations';
import './App.scss';

function App() {
  return (
    <div className="app">
      <header className="app__header">
        <img src={logo} className="app__logo" alt="logo" />
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
