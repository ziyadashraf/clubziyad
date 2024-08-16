'use client'
import Image from "next/image"
import styles from "../../styles/InfoCards.module.css"
import circle from "../../../public/halfinvertedcircles.svg"
import CountUp, { useCountUp } from 'react-countup';

export default function StatCard({ color, statnum1, statdesc1, statnum2, statdesc2, photo }) {

    useCountUp({
        ref: 'counter',
        end: 1234567,
        enableScrollSpy: true,
        scrollSpyOnce: 1000,
    });
    return (
        <div className={`${styles.cardContainer} ${statnum2 && statdesc2 && styles.double}`}>
            <div className={styles.cardvert} style={{ color: color }}>
                <div className={styles.iconholder}>
                    <Image src={photo} alt="icon" />
                </div>
                <div className={styles.allstatholder}>
                    <div className={styles.statholder}>
                        <div className={styles.statnum}>
                            <CountUp scrollSpyOnce enableScrollSpy start={statnum1 / 2} end={statnum1} duration={5} />
                            +
                        </div>
                        <div className={styles.statdesc}>
                            {statdesc1}

                        </div>
                    </div>
                    {statnum2 && statdesc2 && (
                        <div className={styles.statholder}>
                            <div className={styles.statnum}>
                                <CountUp scrollSpyOnce enableScrollSpy start={statnum2 / 2} end={statnum2} duration={5} />+
                            </div>
                            <div className={styles.statdesc}>
                                {statdesc2}

                            </div>
                        </div>
                    )}
                </div>
            </div>
        </div>

    );
}
