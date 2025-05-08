import React, { Component } from "react";
import "./profilePage.css";

class ProfileComponent extends Component {
    render() {
        return (
            <div>
                <title>[202102592] 이민철 | About me</title>
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
                            저는 모든 일에 열정이 가득하고, 사람들과 친해지는
                            것을 좋아해요!
                            <br />
                            앞으로 교육에 열심히 참여하고 멋진 서비스를 만들어
                            내고 싶습니다.
                        </p>

                        <a href="https://www.instagram.com/minc._ol/">
                            <img
                                src="images/instagram.svg"
                                alt="Instagram Logo"
                                height="25px"
                            />
                        </a>
                        <a href="mailto:alscjf2632@gmail.com">
                            <img
                                src="images/gmail.svg"
                                alt="Gmail Logo"
                                height="25px"
                            />
                        </a>
                        <a href="https://github.com/als8921">
                            <img
                                src="images/github-mark.svg"
                                alt="Github Logo"
                                height="25px"
                            />
                        </a>
                    </section>
                </section>
            </div>
        );
    }
}

class ProfilePage extends Component {
    render() {
        return (
            <div>
                <ProfileComponent></ProfileComponent>
            </div>
        );
    }
}

export default ProfilePage;
