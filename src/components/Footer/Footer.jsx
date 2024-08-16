'use client'
import { useEffect, useRef } from "react"
import styles from "../../styles/Footer.module.css"
import Slider from "react-infinite-logo-slider"
import Sections from "./Sections/Sections"



export default function Footer() {

    const logo = [
        'ZIYAD', 'CLUB'
    ]

    return (
        <div className={styles.container}>
            <Slider
                width="5000px"
                duration={160}
                pauseOnHover={false}
                blurBorders={false}
                blurBorderColor={'#fff'}
                className="mx-5"
            >

                {logo.map((l, index) =>
                    <div className={styles.slide} style={{ width: 'unset' }} key={index} >
                        <Slider.Slide style={{ width: 'unset' }} key={index}>
                            {l}
                        </Slider.Slide>

                    </div>
                )
                }

            </Slider >
            
            <Sections />
        </div >
    );
}
