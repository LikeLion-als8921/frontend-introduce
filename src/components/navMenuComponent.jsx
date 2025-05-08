import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./navMenuComponent.css";

class NavMenuComponent extends Component {
    render() {
        return (
            <nav className="nav-menu">
                <section className="nav-menu__logo-container">
                    <div className="nav-menu__logo">LIKELION</div>
                    <div className="nav-menu__name">_mincheol</div>
                </section>
                <ul className="nav-menu__button-container">
                    <li>
                        <Link
                            to="/"
                            className="nav-menu__button nav-menu__button--active"
                        >
                            About Me
                        </Link>
                    </li>
                    <li>
                        <Link to="/hobby" className="nav-menu__button">
                            Hobby
                        </Link>
                    </li>
                    <li>
                        <Link to="/goal" className="nav-menu__button">
                            Goals
                        </Link>
                    </li>
                </ul>
            </nav>
        );
    }
}

export default NavMenuComponent;
