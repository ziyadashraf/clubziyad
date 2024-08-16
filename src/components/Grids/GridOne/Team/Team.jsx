'use client'
import React, { useRef, useState, useEffect } from 'react';
import Image from 'next/image';
import DoughnutChart from './DoughnutChart';
import styles from "../../../../styles/Team.module.css"
import star from "../../../../../public/greenstar.svg"
const Team = () => {

    return (

        <div className={styles.container}>
            <div className={styles.teamHolder}>
                <div className={styles.titleHolder}>
                    <div className={styles.titleHolder}>
                        <Image src={star} style={{ marginRight: "10px" }} />
                        <h6 className={styles.title}>
                            Team Size
                        </h6>
                    </div>
                    <div style={{ fontSize: '40px', fontWeight: 200, marginBottom: '10px' }}>
                        +
                    </div>
                </div>
                <div className={styles.chartHolder}>
                    <DoughnutChart />
                    <div>
                        <ul className={styles.list}>
                            <li><span className={styles.circle} style={{ backgroundColor: "#FF7676" }}></span>4 Development</li>
                            <li><span className={styles.circle} style={{ backgroundColor: "#79BFF3" }}></span>3 Operations</li>
                            <li><span className={styles.circle} style={{ backgroundColor: "#21BBB1" }}></span>1 Design</li>
                            <li><span className={styles.circle} style={{ backgroundColor: "#FFB58A" }}></span>2 Founders</li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    )
};


export default Team;
