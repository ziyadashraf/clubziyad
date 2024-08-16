'use client'
import Image from "next/image"
import styles from "../../styles/Trustedby.module.css"
import mltd from "../../../public/logos/Frame 181.png"
import wg from "../../../public/logos/Frame 182.png"
import gn from "../../../public/logos/Frame 183.png"
import merit from "../../../public/logos/Frame 184.png"
import evo from "../../../public/logos/Frame 185.png"

export default function Trustedby() {
    // Define the data array
    const logoData = [
        {
            logo: mltd,
            height: 62
        },
        {
            logo: wg,
            height: 77
        },
        {
            logo: gn,
            height: 54
        },
        {
            logo: merit,
            height: 54
        },
        {
            logo: evo,
            height: 47
        }
    ];

    return (
        <section className={styles.trustedholder}>

            <div className={styles.trustedcard}>
                <div className={styles.dot}>

                </div>
                <h6>
                    Trusted By
                </h6>
                <div style={{ textAlign: 'center', marginTop: '1px', fontWeight: 400 }}>
                    ziyad.club will help founders <br />build
                    better products
                </div>
                <div className={styles.logos}>
                    {logoData.map((item, index) => (
                        <Image
                            key={index}
                            src={item.logo}
                            alt={`Logo ${index + 1}`}
                            className={styles.logo}

                        />
                    ))}
                </div>

            </div>
        </section>
    );
}
