'use client'
import Image from "next/image"
import styles from "../../styles/ProcessCards.module.css"
import circle from "../../../public/halfinvertedcircles.svg"
import CountUp, { useCountUp } from 'react-countup';
import ProcessCard from "../Cards/ProcessWorkCard";

export default function Process() {
    // Define the data array
    const processData = [
        {
            title: 'Prototype & develop',
            video: 'https://cdn.prod.website-files.com/656759acf6013e1492415a32/6581b16884db085e301f2a6e_Animate-2-transcode.mp4',
            fields: false
        },
        {
            title: 'Collaborative feedback',
            video: 'https://cdn.prod.website-files.com/656759acf6013e1492415a32/6580afb235510ffc2152eda5_feedback2-transcode.mp4',
            fields: false
        },
        {
            title: 'Learn from actual users',
            video: 'https://cdn.prod.website-files.com/656759acf6013e1492415a32/6580a12a3285c87133d4e8f3_User testing-transcode.mp4',
            fields: false
        }
    ];

    return (
        <section className={styles.processholder}>
            <div className={styles.processdivider}>
                <div>
                    <h4 className={styles.containersticky}>
                        The process
                        designed for fast
                        growing companies
                    </h4>
                </div>
                <div>
                    {processData.map((item, index) => (
                        <ProcessCard
                            key={index}
                            title={item.title}
                            fields={item.fields}
                            video={item.video}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
}