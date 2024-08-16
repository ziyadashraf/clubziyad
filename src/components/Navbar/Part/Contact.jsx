import Image from "next/image";
import arrow from "../../../../public/rightarrow.svg"
import styles from '../../../styles/Navbar.module.css';
import { GeistSans } from 'geist/font/sans';


export default function ContactButton() {
    return (
        <div style={{ width: '20%', display: 'flex', justifyContent: 'flex-end' }}>
            <a className={styles.holder + ' ' + GeistSans.className + ' ' + styles.hoverer}>
                <Image src={arrow} alt="right-arrow" className={styles.arrowsvg} />
                <div className={styles.btntext}>Let's chat</div>
                <div className={styles.btndot}>
                </div>
            </a>
        </div>
    );
}
