'use client'
import React, { useRef, useState, useEffect } from 'react';
import styles from "../../styles/Grids.module.css"
import Team from './GridOne/Team/Team';
import New from './GridOne/New';
import Shapes from './GridOne/Shapes';
import Shapes2 from './GridTwo/Shapes';
import CardStack from './GridTwo/CardStack';
import CardStackTwo from './GridTwo/CardStackTwo';
import gonative from '../../../public/gonative.png'
import ProjectPerClient from './GridTwo/ProjectPerClient';



const Grids = () => {

    const sampleItems = [
        {
            id: 1,
            logo: gonative,
            content: 'Very Professional. They are the best.',
        },



    ];

    return (

        <div className={styles.container}>
            <div className={styles.firstContainer}>
                <Team />
                <New />
                <Shapes />
            </div>
            <div className={styles.secContainer}>

                <CardStack items={sampleItems} />
                {/* <CardStackTwo /> */}


                <ProjectPerClient />
                <Shapes2 />
                {/* <CardStackTwo /> */}
            </div>
        </div>
    )
};


export default Grids;
