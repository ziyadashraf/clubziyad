'use client'
import React, { useRef, useState, useEffect } from 'react';
import Image from 'next/image';
import styles from "../../../styles/Shapes.module.css"
import halfcircles from "../../../../public/halfcircles.svg"
const Shapes = () => {

    return (

        <div className={styles.container}>
            <div className={styles.blue}></div>
            <div className={styles.halfcirclesholder}>
                <Image className={styles.halfcircle} src={halfcircles} />
            </div>
            <div className={styles.white}></div>

        </div>
    )
};


export default Shapes;
