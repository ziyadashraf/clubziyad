'use client'
import { useEffect, useRef } from "react"
import styles from "../../styles/Hero.module.css"
import box from "../../../public/designbox.png"
import star from "../../../public/Star.svg"
import ziyadcursor from "../../../public/cursorziyad.svg"
import Image from "next/image";
import gsap from "gsap";

import { ScrollTrigger } from "gsap/ScrollTrigger";
import TextPlugin from "gsap/TextPlugin"

gsap.registerPlugin(ScrollTrigger);
gsap.registerPlugin(TextPlugin)


export default function Hero() {
    const cursorRef = useRef(null);
    const boxRef = useRef(null);
    const h1HolderRef = useRef(null);

    useEffect(() => {
        gsap.to(".starImage", {
            rotation: 360,
            scrollTrigger: {
                trigger: ".starImage",
                start: "top bottom", // Start the animation when the starImage enters the center of the viewport
                end: "bottom top",  // End the animation when the starImage leaves the top of the viewport
                scrub: true,       // Smoothly animate the rotation based on the scroll position
            },
        });

        const updateCursorPosition = () => {
            const boxElement = boxRef.current;
            const cursorElement = cursorRef.current;
            const h1HolderElement = h1HolderRef.current;


            if (boxElement && cursorElement) {
                const boxRect = boxElement.getBoundingClientRect();
                const h1HolderHeight = h1HolderElement.getBoundingClientRect().height;

                cursorElement.style.top = `${boxRect.top - h1HolderHeight * 2}px`;
                cursorElement.style.left = `${boxRect.left + 92.5}px`;
                // cursorElement.style.display = 'block'; // Show the cursor
            }
        };


        updateCursorPosition();
        // window.addEventListener('resize', updateCursorPosition);
        // window.addEventListener('scroll', updateCursorPosition);


        // Cleanup event listeners and timeout on component unmount



    }, []);

    return (
        <section className={styles.heroholder} style={{ color: '#343A40' }}>
            <Image src={ziyadcursor} className={styles.cursor} ref={cursorRef} />

            <div className={styles.hero}>
                <div style={{ width: 'max-content' }}>
                    <div className={styles.h1holder} ref={h1HolderRef}>
                        <h1 >
                            <div className={styles.headingHolder}>
                                <div className={styles.textHero}> We </div></div>
                            <div className={styles.design} >
                                <div className={styles.designImg} >
                                    <Image src={box} width={250} alt="Design Box" ref={boxRef} />
                                </div>design
                            </div>
                            <div className={styles.headingHolder}>
                                <div className={styles.textHero}>and </div>
                            </div>
                            <div className={styles.develop}> develop</div>
                        </h1>
                    </div>

                    <h1 style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between' }}>
                        <div className={styles.headingHolder}>
                            <div className={styles.textHero}>
                                websites and apps
                            </div>
                        </div>
                        <div className={`${styles.star}`}>
                            <Image src={star} className="starImage" />
                        </div>
                    </h1>
                </div>
            </div>
            <div className={styles.descriptionholder}>
                <div className={styles.description}>

                    <div className={styles.descriptionlineholder}>
                        <div className={styles.descriptionline}>
                            We’re a creative powerhouse fueled by our passion for designing and developing
                        </div>
                    </div>
                    <div className={styles.descriptionlineholder}>
                        <div className={styles.descriptionline}>incredible apps and websites. We're confident we deliver the best visual designs in Egypt</div>
                    </div>
                    <div className={styles.descriptionlineholder}>
                        <div className={styles.descriptionline}> —<span style={{ color: '#9747FF' }}>all without breaking the bank.</span></div>
                    </div>
                    <div className={styles.descriptionlineholder}>
                        <div className={styles.descriptionline}>Are you ready!</div>
                    </div>
                </div>
            </div>
        </section >
    );
}
