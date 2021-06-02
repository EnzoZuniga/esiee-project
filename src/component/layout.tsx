import React from "react";
import { BrowserRouter as Router, Link, Route, Switch } from "react-router-dom";
import Reseau from "../view/reseau";
import Windows from "../view/windows";
import Home from "../view/home";
import Developpement from "../view/developpement";
import Projet from "../view/projet";
import Linux from "../view/linux";
import logo from "./../utils/assets/logo.png";
import "./../utils/scss/layout.scss";

const Layout: React.FC = () => {

  return (
    <div>
      <Router>
        <div>
          <div className="header">
            <div className="logo">
              <Link to="/">
                <img src={logo} alt="logo" />
              </Link>
            </div>
            <div className="navigation">
              <div className="dropdown">
                <span >OS</span>
                <div className="dropdown-content">
                  <p>
                    <Link to="/os/linux">Linux</Link>
                  </p>
                  <p>
                    <Link to="/os/windows">Windows</Link>
                  </p>
                </div>
              </div>
              <div className="dropdown">
                <span >Outils</span>
                <div className="dropdown-content">
                  <p>
                    <Link to="/outils/developpement">Développement</Link>
                  </p>
                  <p>
                    <Link to="/outils/projet">Projet</Link>
                  </p>
                  <p>
                    <Link to="/outils/reseau">Réseau</Link>
                  </p>
                </div>
              </div>
            </div>
          </div>

          <Switch>
            <Route exact path="/">
              <Home />
            </Route>
            <Route exact path="/os/linux">
              <Linux />
            </Route>
            <Route exact path="/os/windows">
              <Windows />
            </Route>
            <Route exact path="/outils/developpement">
              <Developpement />
            </Route>
            <Route exact path="/outils/projet">
              <Projet />
            </Route>
            <Route exact path="/outils/reseau">
              <Reseau />
            </Route>
          </Switch>
        </div>
      </Router>
    </div>
  );
};

export default Layout;
