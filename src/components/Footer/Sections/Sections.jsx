'use client'
import { useEffect, useRef } from "react"
import styles from "../../../styles/Sections.module.css"




export default function Sections() {



    return (
        <div className={styles.container}>
            <div>
                Copyright<br /> ziyad club
            </div>
            <div>
                <ul>
                    <li className={styles.underline}>studio</li>
                    <li className={styles.underline}>work</li>
                    <li className={styles.underline}>services</li>
                </ul>
            </div>
            <div>
                <ul>
                    <li className={styles.underline}>linkedin</li>
                    <li className={styles.underline}>instagram</li>
                    <li className={styles.underline}>facebook</li>
                    <li className={styles.underline}>x</li>
                </ul>
            </div>
            <div>
                <ul>
                    <li>let's chat</li>
                    <li className={styles.underline}>innovate@ziyad.club</li>

                </ul>
            </div>
            <div>
                <ul>
                    <li>get valuable insights</li>
                </ul>
                <input placeholder="Your email here">
                </input>
            </div>
        </div >
    );
}
