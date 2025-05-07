import React, { Component } from "react";
import "./goalPage.css";

class GoalContents extends Component {
    render() {
        return (
            <div>
                <title>[202102592] 이민철 | Goals</title>
                <span className="sr-only">
                    목표들을 소개하는 페이지 입니다.
                </span>
                <header className="goals-header">GOALS</header>
                <section className="goals-section">
                    <article className="goal-card">
                        <header className="goal-card__header">
                            <h2>Prize</h2>
                        </header>
                        <p className="goal-card__content">
                            멋쟁이 사자 해커톤에서 상 받기
                        </p>
                    </article>

                    <article className="goal-card">
                        <header className="goal-card__header">
                            <h2>Develop</h2>
                        </header>
                        <p className="goal-card__content">
                            나만의 웹/앱 개발하기 <br /> + 출시하기
                        </p>
                    </article>

                    <article className="goal-card">
                        <header className="goal-card__header">
                            <h2>Grade</h2>
                        </header>
                        <p className="goal-card__content">
                            이번 학기 학점 4.5 달성하기
                        </p>
                    </article>
                </section>
            </div>
        );
    }
}

class ProfilePage extends Component {
    render() {
        return (
            <div>
                <GoalContents></GoalContents>
            </div>
        );
    }
}

export default ProfilePage;
