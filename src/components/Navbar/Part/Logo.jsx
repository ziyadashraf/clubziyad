import Image from "next/image";
import styles from "../../../styles/Navbar.module.css"
import Link from "next/link";
export default function Logo() {
    return (
        <div className={`${styles.logo}`}>
            <Link className={`${styles.linkholder} `} href='/'>
                <span className={styles.tstatic}>
                    ziyad.club
                </span>
                <span className={styles.tabsolute}>
                    <span style={{ color: '#79BFF3' }}>
                        Innovate.
                    </span>
                    <span style={{ color: '#FF7676' }}>
                        Design.
                    </span>
                    <span style={{ color: '#FFB58A' }}>
                        Code.
                    </span>

                </span>
            </Link>
        </div>
    );
}
