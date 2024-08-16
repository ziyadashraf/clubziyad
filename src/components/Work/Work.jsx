'use client'
import Image from "next/image"
import styles from "../../styles/Work.module.css"
import circle from "../../../public/halfinvertedcircles.svg"
import CountUp, { useCountUp } from 'react-countup';
import WorkCard from "../Cards/ProcessWorkCard";

export default function Work() {
    // Define the data array
    const workData = [
        {
            title: 'Product UI/UX Design',
            video: 'https://cdn.prod.website-files.com/656759acf6013e1492415a32/6581b16884db085e301f2a6e_Animate-2-transcode.mp4',
            fields: [
                'Unique website design',
                'Web App Design',
                'Mobile App Design',
                'Rapid Prototyping'
            ]
        },
        {
            title: 'Web Development',
            video: 'https://cdn.prod.website-files.com/656759acf6013e1492415a32/6580afb235510ffc2152eda5_feedback2-transcode.mp4',
            fields: [
                'Web App Development',
                'E-commerce Development',
                'No-code Websites',
                'AI Development Services'
            ]
        },
        {
            title: 'Mobile Development',
            video: 'https://cdn.prod.website-files.com/656759acf6013e1492415a32/6580a12a3285c87133d4e8f3_User testing-transcode.mp4',
            fields: [
                'Flutter framework',
                'Cross-platform publishing',
                'Mobile App Development'
            ]
        }
    ];

    return (
        <section className={styles.workholder}>
            <div className={styles.workdivider}>
                <div >
                    <h4 className={styles.containersticky}>
                        Our work revolves around 3 things
                    </h4>
                </div>
                <div>
                    {workData.map((item, index) => (
                        <WorkCard
                            key={index}
                            title={item.title}
                            fields={item.fields}
                            video={item.video}
                        />
                    ))}
                </div>
            </div>
        </section >
    );
}