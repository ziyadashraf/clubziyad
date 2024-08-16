'use client'
import styles from "../../styles/InfoCards.module.css"
import StatCard from "../Cards/StatCard";
import circle from "../../../public/halfinvertedcircles.svg"
import smallstar from "../../../public/smallstar.svg"
import ellipse from "../../../public/Ellipse.svg"
import Image from "next/image";

const cardData = [
    {
        color: "#79BFF3",
        statnum1: 120,
        statdesc1: "Combined VC investment in products we’ve helped our partners design.",
        photo: circle
    },
    {
        color: "#FFB58A",
        statnum1: 80,
        statdesc1: "Projects completed successfully across various industries.",
        photo: smallstar
    },
    {
        color: "#FF7676",
        statnum1: 50,
        statdesc1: "Global partners and clients we've worked with.",
        statnum2: 20,
        statdesc2: "Countries we’ve operated in.",
        photo: ellipse
    }
];

export default function Stats() {
    return (
        <section className={styles.allcardcontainer} >

            {cardData.map((card, index) => (
                <StatCard
                    key={index}
                    color={card.color}
                    statnum1={card.statnum1}
                    statdesc1={card.statdesc1}
                    statnum2={card.statnum2}
                    statdesc2={card.statdesc2}
                    photo={card.photo}
                />
            ))}

        </section>
    );
}
