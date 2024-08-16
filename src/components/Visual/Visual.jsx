'use client'
import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import styles from "../../styles/Visual.module.css";
import Image from "next/image";
import ss from "../../../public/ss.png"
import ss2 from "../../../public/ss2.png"
import ss3 from "../../../public/ss3.png"
import ss4 from "../../../public/ss4.png"
import ss5 from "../../../public/ss5.png"


gsap.registerPlugin(ScrollTrigger);

export default function Visual() {
    const containerRef = useRef(null);
    const triggerElement = useRef(null);
    const photos = [
        { src: ss, alt: 'Photo 1', z: 5 },
        { src: ss2, alt: 'Photo 2', z: 4 },
        { src: ss3, alt: 'Photo 3', z: 3 },
        { src: ss4, alt: 'Photo 4', z: 2 },
        { src: ss5, alt: 'Photo 5', z: 1 }
    ];

    const positions = [
        { x: -10, y: -10, },  // Photo 1 position
        { x: 15, y: 10 },  // Photo 2 position
        { x: -20, y: 15 }, // Photo 3 position
        { x: 25, y: -10 }, // Photo 4 position
        { x: 0, y: 0 }  // Photo 5 position
    ];
    useEffect(() => {


        const element = containerRef.current;
        const trigger = triggerElement.current;
        // GSAP Animation for photos


        gsap.fromTo(element,
            {
                width: "100vw",
                height: "100vh",
                marginTop: '0vh',
                borderRadius: '0',
                padding: '0'
            },
            {
                width: "89vw",
                height: "90vh",

                marginTop: '5vh',
                borderRadius: '0.25em',

                scrollTrigger: {
                    trigger: trigger,
                    start: 'top top',
                    end: '1500 bottom',
                    scrub: true,

                    // markers: true
                },
            }
        );

        photos.forEach((photo, index) => {
            const { x, y } = positions[index];

            gsap.fromTo(`.${styles.photo}:nth-child(${index + 1})`,
                {
                    autoAlpha: 0,
                    x: 0,
                    y: 0,

                },
                {
                    autoAlpha: 1,
                    opacity: 1,
                    x: `${x}vw`,
                    y: `${y}vh`,

                    scrollTrigger: {
                        trigger: trigger,
                        start: () => `bottom-=${index * 100} center`,
                        end: () => `top+=${(index + 1) * 100} center`,
                        scrub: true,
                        toggleActions: 'play none none reverse'
                    }
                }
            );
        });
    }, [photos]);
    return (
        <section className={styles.wrapper}>
            <div className={styles.container} ref={triggerElement}>
                <div className={`${styles.resize} `} ref={containerRef} style={{ zIndex: 8 }}>
                    {photos.map((photo, index) => (
                        <div key={index} className={styles.photo} style={{ zIndex: photo.z }}>
                            <Image src={photo.src} alt={photo.alt} />
                        </div>
                    ))}
                    <div className={styles.header} style={{ zIndex: 9 }}>
                        <h6 > Visually Stunning
                            <br /> Work</h6>
                    </div>
                </div>
            </div>
        </section>
    );
}
