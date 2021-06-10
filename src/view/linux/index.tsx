import './index.scss';
import React from "react";
import { Card } from '../../component/card';
import linuxLogo from '../../utils/assets/linux-logo.png';

// Fausse données à remplacer par celle dans le FTP
const fakeProps = [
    {
        href : "https://www.google.fr/",
        name : "Vm-Ubuntu-17.2"
    },
    {
        href : "https://www.esiee-it.fr/fr",
        name : "Vm-Ubuntu-20.2"
    },
]

const Linux: React.FC = () => {
    return (
        <div className="linux">
            {
                fakeProps.map((prop: any) => {
                    return(
                        <div className="cardItemWrapper">
                            <Card image={linuxLogo} href={prop.href} name={prop.name}/>
                        </div>
                    )
                })
            }
        </div>
    )
};

export default Linux;
