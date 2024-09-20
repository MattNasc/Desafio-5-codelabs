import './App.scss';

const App: React.FC = () => {
  return (
    <div className="studio">
      <div className="studio__container">
        <header className="studio__header">
          <img src="/logo.png" alt="" className="studio__logo" />
          <nav>
            <ul className="studio__menu">
              <li>
                <a href="#" className="studio__menuItem">
                  <img src="/google.png" alt="" />
                </a>
              </li>
              <li>
                <a href="#" className="studio__menuItem">
                  <img src="/facebook.png" alt="" />
                </a>
              </li>
              <li>
                <a href="#" className="studio__menuItem">
                  <img src="/twitter.png" alt="" />
                </a>
              </li>
              <li>
                <a href="#" className="studio__menuItem">
                  <img src="/instagram.png" alt="" />
                </a>
              </li>
            </ul>
          </nav>
        </header>
        <main className="studio__content">
          <div className="studio__text">
            <p className="studio__author">HAYAO MIYAZAKI</p>
            <h1 className="studio__title">A VIAGEM
              DE CHIHIRO</h1>
            <p className="studio__description">Chihiro chega a um mundo mágico dominado por uma bruxa. Aqueles que a desobedecem são transformados em animais.</p>
            <div className="studio__buttons">
              <button className="studio__now"> <img src="/play.png"/> assistir agora</button>
              <button className="studio__trailer">assista o trailer</button>
            </div>
          </div>
          <img className="studio__illustration" src="/ilustração.png" alt="" />
        </main>
      </div>
    </div>
  );
};

export default App;
