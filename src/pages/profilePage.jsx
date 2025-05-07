import React, { Component } from "react";
import "./profilePage.css";
import "./navMenu.css";

class Header extends Component {
    render() {
        return (
            <head>
                <title>[202102592] 이민철 | About me</title>
            </head>
        );
    }
}
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
class ProfileComponent extends Component {
    render() {
        return (
            <section className="profile">
                <aside className="profile__image-container">
                    <img
                        className="profile__image"
                        src="images/me.png"
                        alt="프로필 이미지"
                        width="350px"
                    />
                </aside>
                <section className="profile__container">
                    <h2 className="profile__name">MinCheol Lee 이민철</h2>
                    <p className="profile__content">
                        안녕하세요! 저는 프론트 엔드 분야 아기 사자
                        이민철입니다.
                        <br />
                        저의 학과는 충남대학교 자율운항시스템공학과 입니다.
                        <br />
                        제 MBTI는 자주 바뀌지만, INTJ 입니다!
                        <br />
                        <br />
                        저는 모든 일에 열정이 가득하고, 사람들과 친해지는 것을
                        좋아해요!
                        <br />
                        앞으로 교육에 열심히 참여하고 멋진 서비스를 만들어 내고
                        싶습니다.
                    </p>

                    <a
                        href="https://www.instagram.com/minc._ol/"
                        target="_blank"
                    >
                        <img
                            src="images/instagram.svg"
                            alt="Instagram Logo"
                            height="25px"
                        />
                    </a>
                    <a href="mailto:alscjf2632@gmail.com" target="_blank">
                        <img
                            src="images/gmail.svg"
                            alt="Gmail Logo"
                            height="25px"
                        />
                    </a>
                    <a href="https://github.com/als8921" target="_blank">
                        <img
                            src="images/github-mark.svg"
                            alt="Github Logo"
                            height="25px"
                        />
                    </a>
                </section>
            </section>
        );
    }
}

class ProfilePage extends Component {
    render() {
        return (
            <div>
                <Header></Header>
                <NavMenuComponent></NavMenuComponent>
                <ProfileComponent></ProfileComponent>
            </div>
        );
    }
}

export default ProfilePage;
