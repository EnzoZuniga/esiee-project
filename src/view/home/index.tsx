import './index.scss';
import React from "react";

const Home: React.FC = () => {
    return (
        <div className="home">
            <div className="inputWrapper">
                <div className="inputTitleWrapper">
                    <span className="inputTitle">
                        Rechercher votre Outils/OS
                    </span>
                </div>
                <input className="input" type="search" placeholder=" Exemple: Windows Server .... ?"></input>
            </div>
        </div>
    )
};

export default Home;
