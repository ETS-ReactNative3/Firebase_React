import React from 'react';
import './css/Navigation.css';


const Navigation = (props) => {
    return (
        <div id="navigation" className="navigation">
            <ul classList="navigation-menu">
                <li id="dashboard-btn-home">
                    <img src={require("../img/021-doghouse.svg")} alt="Dog house, home icon"/>
                </li>
                <li id="dashboard-btn-new">
                    <img src={require("../img/014-bell.svg")} alt="New task icon"/>
                </li>
                <li id="dashboard-btn-settings">
                <img src={require("../img/001-promotion.svg")} alt="Tools, Settings Icon"/>
                </li>
                <li id="dashboard-btn-settings">
                <img src={require("../img/003-photo-camera.svg")} alt="Tools, Settings Icon"/>
                </li>
                <li id="dashboard-btn-settings">
                <img src={require("../img/004-tools.svg")} alt="Tools, Settings Icon"/>
                </li>
            </ul>
        </div>
        );
    }

export default Navigation;