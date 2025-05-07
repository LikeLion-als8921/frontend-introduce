import React, { Component } from "react";
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
                        <a
                            className="nav-menu__button nav-menu__button--active"
                            // href="index.html"
                        >
                            About Me
                        </a>
                    </li>
                    <li>
                        <a
                            className="nav-menu__button"
                            // href="src/pages/hobby.html"
                        >
                            Hobby
                        </a>
                    </li>
                    <li>
                        <a
                            className="nav-menu__button"
                            // href="src/pages/goals.html"
                        >
                            Goals
                        </a>
                    </li>
                </ul>
            </nav>
        );
    }
}

export default NavMenuComponent;
