import React from 'react';
import styles from "./IntroPage.module.scss";
import IntroImg from "../../assets/Intro/intro-img.png";

export default function IntroPage() {
    return (
        <main className={styles['intro-page-main']}>
            <div className={styles['intro-page-container']}>
                <img src={IntroImg} alt="" />
                <p>Explore, Share, Interact !</p>
            </div>
            <button className={styles['intro-get-start-btn']}>Let’s get started</button>
            <div className={styles['intro-first-circle']} />
            <div className={styles['intro-second-circle']} />
        </main>
    )
}
