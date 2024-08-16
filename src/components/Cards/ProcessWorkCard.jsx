'use client'
import Image from "next/image"
import styles from "../../styles/ProcessCards.module.css"
import circle from "../../../public/halfinvertedcircles.svg"
import CountUp, { useCountUp } from 'react-countup';

export default function ProcessWorkCard({ title, fields, video, image }) {


    return (
        <div className={`${styles.cardContainer} ${fields && styles.double}`}>
            <div className={styles.titleholder}>
                <h6 className={styles.title}>
                    {title}
                </h6>
                <div className={styles.dot}>

                </div>
            </div>
            {fields && fields.length > 0 && (
                <div className={styles.photoholder}>
                    <video
                        src={video}
                        autoPlay
                        muted
                        loop
                        className={styles.video}
                    >
                    </video>
                    <div>
                        {fields.map((field, index) => (
                            <div key={index}>{field}</div>
                        ))}
                    </div>
                </div>
            )}

            {!fields && (
                <div className={styles.videoholder}>
                    <video
                        src={video}
                        autoPlay
                        muted
                        loop
                        className={styles.video}
                    >
                    </video>

                </div>
            )}



        </div>

    );
}
