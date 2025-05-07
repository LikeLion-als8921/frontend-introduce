import React, { Component } from "react";
import NavMenuComponent from "../components/navMenuComponent";
import "./hobbyPage.css";

class Header extends Component {
    render() {
        return <title>[202102592] 이민철 | Hobby</title>;
    }
}
class HobbyContents extends Component {
    render() {
        return (
            <div>
                <span class="sr-only">취미를 소개하는 페이지 입니다.</span>
                <section class="hobby-image">
                    <img src="images/hobby-chacha.png" alt="차차 이미지" />
                </section>
                <section>
                    <ul class="hobby-card">
                        <li class="hobby-card__content">
                            저는 운동을 좋아하고 헬스장에 꾸준히 다닙니다.
                        </li>
                        <li class="hobby-card__content">
                            도서관, 서점에서 책 구경하는 것을 좋아합니다.
                        </li>
                        <li class="hobby-card__content">
                            집에서는 주로 넷플릭스, 유튜브, 노래 듣기로 시간을
                            보냅니다.
                        </li>
                        <li class="hobby-card__content">
                            요즘은 기타에 관심이 생겨서 일렉기타 연습하고
                            있습니다. 기타 너무 어려워요..
                        </li>
                    </ul>
                </section>
            </div>
        );
    }
}

class ProfilePage extends Component {
    render() {
        return (
            <div>
                <Header></Header>
                <NavMenuComponent></NavMenuComponent>
                <HobbyContents></HobbyContents>
            </div>
        );
    }
}

export default ProfilePage;
