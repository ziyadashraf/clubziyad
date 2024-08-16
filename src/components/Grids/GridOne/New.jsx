'use client'
import React, { useRef, useState, useEffect } from 'react';
import Image from 'next/image';
import styles from "../../../styles/New.module.css"
// import star from "../../../../../public/greenstar.svg"
import Joanne from "../../../../public/Joanne.jpg"
const New = () => {

    return (

        <div className={styles.container}>
            <Image className={styles.image} src={Joanne} />
            <div className={styles.new}>NEW!</div>
            <div className={styles.jobTitle}>
                <h6>Joanne</h6>
                <p>Development</p>
            </div>
        </div>
    )
};


export default New;
