import React from 'react';
import styles from "./Login.module.scss";

export default function Login() {
    return (
        <main className={styles['login-main']}>
            <div className={styles['login-container']}>
                <div className={styles['login-txt']}>
                    <h1>Welcome Onboard &nbsp; !</h1>
                    <p>Let’s help you start to find new places </p>
                </div>
                <div className={styles['login-form']}>
                    <form action="">
                        <div className={styles['username-label']}>
                            <input type="text" required />
                            <div className={styles['username-placeholder']}>
                                Username
                            </div>
                        </div>
                        <div className={styles['email-label']}>
                            <input type="email" required />
                            <div className={styles['email-placeholder']}>
                                Email
                            </div>
                        </div>
                        <div className={styles['pass-label']}>
                            <input type="password" required />
                            <div className={styles['pass-placeholder']}>
                                Password
                            </div>
                        </div>
                        <button className={styles['login-btn']}>Login</button>
                    </form>
                </div>
            </div>
            <div className={styles['login-first-circle']} />
            <div className={styles['login-second-circle']} />
        </main>
    )
}
